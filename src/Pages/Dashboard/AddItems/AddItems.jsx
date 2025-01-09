import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hook/useAxiosSecure';

const image_hosting_key = import.meta.env.VITE_IMAGE_UPLOAD_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const [isUploading, setIsUploading] = useState(false);

    const onSubmit = async (data) => {
        if (!data.recipeName || !data.category || !data.price || (!data.image[0] && !data.photoUrl) || !data.details) {
            Swal.fire({
                icon: 'error',
                title: 'Incomplete Form',
                text: 'Please fill in all the required fields!',
            });
            return;
        }

        setIsUploading(true);

        try {
            let imageUrl = data.photoUrl; // Default to the Photo URL if provided

            // If no Photo URL, upload the image file
            if (!imageUrl && data.image[0]) {
                const formData = new FormData();
                formData.append('image', data.image[0]);

                const imgResponse = await fetch(image_hosting_api, {
                    method: 'POST',
                    body: formData,
                });

                const imgData = await imgResponse.json();

                if (imgData.success) {
                    imageUrl = imgData.data.url; // Set the image URL from ImgBB
                } else {
                    throw new Error('Image upload failed');
                }
            }

            // Prepare the item data
            const itemData = {
                name: data.recipeName,
                recipe: data.details,
                category: data.category,
                price: parseFloat(data.price),
                image: imageUrl, // Use the final image URL
            };

            const response = await axiosSecure.post('/menu', itemData);

            if (response.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Item added successfully!',
                });
                reset();
            } else {
                throw new Error('Failed to add item');
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message || 'Something went wrong!',
            });
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="bg-gray-100 dark:bg-zinc-900 text-gray-800 dark:text-gray-200 px-4">
            <div className="card lg:max-w-3xl w-full md:w-9/12 mx-auto shadow-xl bg-white dark:bg-zinc-950">
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center mb-6">Add Items</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Row 1: Recipe Name and Category */}
                        <div className="flex flex-col lg:flex-row lg:space-x-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-orange-500 dark:text-gray-400">Recipe Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter recipe name"
                                    {...register('recipeName', { required: true })}
                                    className="input input-bordered font-semibold text-red-600 dark:bg-stone-700 dark:text-gray-200"
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-yellow-500 dark:text-gray-200">Category</span>
                                </label>
                                <select
                                    {...register('category', { required: true })}
                                    className="select select-bordered font-semibold text-slate-300 dark:bg-stone-700 dark:text-gray-200"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Select Category
                                    </option>
                                    <option value="pizza">pizza</option>
                                    <option value="salad">salad</option>
                                    <option value="soup">soup</option>
                                    <option value="dessert">dessert</option>
                                    <option value="drinks">drinks</option>
                                </select>
                            </div>
                        </div>

                        {/* Row 2: Price and Image Upload */}
                        <div className="flex flex-col lg:flex-row lg:space-x-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-sky-500 font-semibold dark:text-gray-200">Price</span>
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    placeholder="Enter price"
                                    {...register('price', { required: true })}
                                    className="input text-gray-200 input-bordered dark:bg-stone-700 dark:text-gray-200"
                                />
                            </div>
                            <div className="form-control w-full lg:w-[600px]">
                                <label className="label">
                                    <span className="label-text font-semibold dark:text-gray-200">Upload Image</span>
                                </label>
                                <input
                                    type="file"
                                    {...register('image')}
                                    className="file-input bg-red-400 file-input-bordered dark:bg-stone-700 dark:text-gray-200"
                                />
                            </div>
                        </div>

                        {/* Row 3: Photo URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold dark:text-gray-200">Photo URL (Optional)</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter photo URL"
                                {...register('photoUrl')}
                                className="input text-gray-200 input-bordered dark:bg-stone-700 dark:text-gray-200"
                            />
                        </div>

                        {/* Row 4: Recipe Details */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-purple-500 font-semibold dark:text-gray-200">Recipe Details</span>
                            </label>
                            <textarea
                                placeholder="Enter recipe details"
                                {...register('details', { required: true })}
                                className="textarea text-gray-400 textarea-bordered dark:bg-stone-700 dark:text-gray-200"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className="btn btn-outline bg-inherit w-[20%] dark:bg-stone-800 dark:border-none hover:dark:bg-stone-600"
                            >
                                {isUploading ? 'Uploading...' : 'Add Item'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItems;
