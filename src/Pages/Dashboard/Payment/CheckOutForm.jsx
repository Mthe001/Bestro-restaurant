import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import useCart from '../../../Hook/useCart';
import useAuth from '../../../Hook/useAuth';

const CheckOutForm = () => {
    const [error, setError] = useState();
    const [clientSecret, setClientSecret] = useState('');
    const [transitonId, setTransitionId] = useState();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();
    const { user } = useAuth();

    // Calculate total price and convert it to the smallest currency unit (cents for USD)
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const totalAmountInCents = Math.round(totalPrice * 100); // Convert to cents

    useEffect(() => {
        // Send the amount in cents to the backend
        axiosSecure.post('/create-payment-intent', { price: totalAmountInCents })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
            .catch(err => console.error('Error creating payment intent:', err));
    }, [axiosSecure, totalAmountInCents]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        // Create payment method
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('Payment error', error);
            setError(error.message);
            return;
        } else {
            console.log('Payment method', paymentMethod);
            setError('');
        }

        // Confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous name'
                }
            }
        });

        if (confirmError) {
            console.log('Confirm error:', confirmError.message);
            setError(confirmError.message);
        } else {
            console.log('Payment successful:', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transition id', paymentIntent.id);
                setTransitionId(paymentIntent.id);
            }

            setError('');
            // Add success logic here (e.g., save payment info to database)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-red-100 dark:bg-gray-900 rounded-lg shadow-md space-y-4">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#fff',
                            fontFamily: 'Arial, sans-serif',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
                className="card-element bg-white dark:bg-gray-700 rounded-md p-4"
            />
            <button
                type="submit"
                disabled={!stripe || !clientSecret}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
                Pay
            </button>
            <p className='text-red-500'>{error}</p>
            {transitonId && <p className='text-green-500'>Your transition id: {transitonId}</p>}
        </form>
    );
};

export default CheckOutForm;
