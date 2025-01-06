import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;

        }
    })


    return (
        <div>
            <div>
                <h2 className='text-3xl'>All users</h2>
                <h2 className='text-3xl'>Total Users :{users.length}</h2>
            </div>
        </div>
    );
};

export default AllUsers;