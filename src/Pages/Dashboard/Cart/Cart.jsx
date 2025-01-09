import Swal from 'sweetalert2'; // Import SweetAlert2
import useCart from '../../../Hook/useCart';  // Assuming useCart is a custom hook that fetches cart data
import { FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = useCart(); // Assuming refetch is part of your custom hook's return value
    const totalPrice = cart.reduce((previous, product) => previous + product.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (_id) => {
        if (!_id) {
            // If the ID is invalid, we don't proceed with the delete action
            return;
        }

        // SweetAlert2 Confirmation Dialog
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                // Perform delete action here (e.g., remove from cart)
                axiosSecure.delete(`/carts/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            // Refetch cart to get the updated list after deletion
                            refetch(); // Assuming your useCart hook has this refetch function
                            Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
                        } else {
                            Swal.fire('Failed!', 'Could not delete the item. It may not exist.', 'error');
                        }
                    })
                    .catch(error => {
                        Swal.fire('Error!', 'Something went wrong. Please try again.', 'error');
                        console.error('Error deleting product:', error); // Optional, you can keep this if you want to log errors
                    });
            }
        });
    };

    return (
        <div className="p-4 md:p-8">
            {/* Title Section */}
            <div className="flex flex-col md:flex-row items-center justify-evenly gap-4 pb-10">
                <h2 className="text-2xl md:text-4xl font-bold">
                    Items: <span className="text-yellow-500 text-xl md:text-3xl">{cart.length}</span>
                </h2>
                <h2 className="text-xl md:text-3xl font-semibold">
                    Total Price: <span className="text-orange-400">${totalPrice.toFixed(1)}</span>
                </h2>

                {cart.length ? <Link to='/dashboard/reservation'>
                    <button className="btn btn-outline px-6 md:px-10 py-2 text-sm md:text-base">Pay</button>
                </Link> : <button disabled className="btn btn-outline px-6 md:px-10 py-2 text-sm md:text-base">Pay</button>}

            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="table w-full border border-gray-200">
                    {/* Table Head */}
                    <thead className="bg-gray-100 dark:bg-gray-800">
                        <tr>
                            <th className="text-sm md:text-base py-2 px-4">S.No</th>
                            <th className="text-sm md:text-base py-2 px-4">Name</th>
                            <th className="text-sm md:text-base py-2 px-4">Price</th>
                            <th className="text-sm md:text-base py-2 px-4">Quantity</th>
                            <th className="text-sm md:text-base py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product, index) => (
                            <tr key={product._id} className="border-t">
                                {/* Serial Number Column */}
                                <td className="py-3 px-4 text-sm md:text-base">{index + 1}</td>
                                <td className="py-3 px-4">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm md:text-base">{product.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-sm md:text-base">${product.price.toFixed(2)}</td>
                                <td className="py-3 px-4 text-sm md:text-base">{product.quantity}</td>
                                <td className="py-3 px-4">
                                    <button
                                        onClick={() => handleDelete(product._id)} // Use _id as unique identifier
                                        className="bg-transparent btn-xs hover:text-red-500 md:btn-sm text-xs md:text-sm"
                                    >
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

export default Cart;
