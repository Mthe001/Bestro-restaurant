import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleDeleteUser = user => {
        console.log('deelete user successfully', user)

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
                axiosSecure.delete(`/users/${user._id}`)
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




    const handleUpdateUserRole = user => {
        console.log('update user-role successfgully', user)
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })

    };




    return (
        <div className="p-5">
            <div className="mb-5">
                <h2 className="text-3xl font-bold mb-2">All Users</h2>
                <h2 className="text-lg">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* Table Head */}
                    <thead>
                        <tr className="bg-gray-200 dark:bg-gray-800">
                            <th className="text-left">#</th>
                            <th className="text-left">Image</th>
                            <th className="text-left">Name</th>
                            <th className="text-left">Email</th>
                            <th className="text-left">Role</th>
                            <th className="text-left">Actions</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={user.photoUrl} alt={`${user.name}'s profile`} />
                                        </div>
                                    </div>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'Admin' : <button
                                            onClick={() => handleUpdateUserRole(user)}
                                            className="btn btn-sm btn-success">User</button>
                                    }

                                </td>
                                <td>

                                    {/* <button className="btn btn-sm btn-info mr-2">Edit</button> */}

                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn btn-sm btn-error">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
