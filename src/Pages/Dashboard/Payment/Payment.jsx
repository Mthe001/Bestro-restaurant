import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';

// TODO: Add your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
    return (
        <div className=" flex items-center justify-center bg-gray-50 dark:bg-zinc-900">
            <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center mb-6">
                    Secure Payment
                </h1>

                <Elements stripe={stripePromise}>
                    <CheckOutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
