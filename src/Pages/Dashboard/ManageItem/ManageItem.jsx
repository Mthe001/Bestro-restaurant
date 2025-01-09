import React from 'react';
import useMenu from '../../../Hook/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageItem = () => {
    const [menu, loading, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();



    const handleDeleteItem = async (item) => {
        if (!item._id) {
            console.error("Item doesn't have a valid '_id':", item);
            Swal.fire('Error!', 'This item cannot be deleted because it is invalid.', 'error');
            return;
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/menu/${item._id}`);
                    console.log('API Response:', res.data);

                    if (res.data && res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire('Deleted!', 'The menu item has been deleted.', 'success');
                    } else {
                        Swal.fire('Error!', 'Failed to delete the menu item. Please try again.', 'error');
                    }
                } catch (error) {
                    console.error('Error deleting item:', error.response || error);
                    Swal.fire('Error!', 'An unexpected error occurred while deleting the item.', 'error');
                }
            }
        });
    };



    return (
        <div className="bg-gray-100 dark:bg-zinc-900 px-4 py-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
                Manage Items
            </h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* Table Header */}
                    <thead>
                        <tr className="bg-gray-200 dark:bg-zinc-800 text-gray-800 dark:text-gray-200">
                            <th className="text-center">#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {menu.map((item, index) => (
                            <tr
                                key={item._id}
                                className="hover:bg-gray-50 dark:hover:bg-zinc-800"
                            >
                                <td className="text-center font-bold text-gray-800 dark:text-gray-200">
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-4">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-semibold text-gray-800 dark:text-gray-200">
                                    {item.name}
                                </td>
                                <td className="text-gray-600 dark:text-gray-400">
                                    {item.category}
                                </td>
                                <td className="text-gray-800 dark:text-gray-200">
                                    ${item.price.toFixed(2)}
                                </td>
                                <td>

                                    <Link
                                        to={`/dashboard/updateItem/${item._id}`}
                                        className="btn btn-sm btn-warning text-white">
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDeleteItem(item)}
                                        className="px-3 py-3 hover:text-red-500 text-white ml-2">
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItem;
