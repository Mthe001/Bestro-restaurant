import React from 'react';
import useAuth from '../../../Hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hook/useAxiosSecure';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    });

    return (
        <div className="p-4 md:p-8">
            <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-200">
                Payment History
            </h1>
            <div className="overflow-x-auto">
                <table className="table w-full border border-gray-200 dark:border-gray-700">
                    {/* Table Head */}
                    <thead className="bg-gray-100 dark:bg-gray-800">
                        <tr>
                            <th className="py-2 px-4 text-left text-gray-800 dark:text-gray-200">#</th>
                            <th className="py-2 px-4 text-left text-gray-800 dark:text-gray-200">Transaction ID</th>
                            <th className="py-2 px-4 text-left text-gray-800 dark:text-gray-200">Date</th>
                            <th className="py-2 px-4 text-left text-gray-800 dark:text-gray-200">Amount</th>
                            <th className="py-2 px-4 text-left text-gray-800 dark:text-gray-200">Status</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {payments.length > 0 ? (
                            payments.map((payment, index) => (
                                <tr key={payment.transactionId} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <td className="py-2 px-4 text-gray-700 dark:text-gray-300">{index + 1}</td>
                                    <td className="py-2 px-4 text-gray-700 dark:text-gray-300">{payment.transactionId}</td>
                                    <td className="py-2 px-4 text-gray-700 dark:text-gray-300">
                                        {new Date(payment.date).toLocaleDateString()}
                                    </td>
                                    <td className="py-2 px-4 text-gray-700 dark:text-gray-300">
                                        ${payment.price.toFixed(2)}
                                    </td>
                                    <td
                                        className={`py-2 px-4 font-semibold ${payment.status === 'succeeded'
                                            ? 'text-green-500'
                                            : 'text-red-500'
                                            }`}
                                    >
                                        {payment.status}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="py-4 text-center text-gray-700 dark:text-gray-300"
                                >
                                    No payments found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
