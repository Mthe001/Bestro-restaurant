// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useEffect, useState } from 'react';
// import useAxiosSecure from '../../../Hook/useAxiosSecure';
// import useCart from '../../../Hook/useCart';
// import useAuth from '../../../Hook/useAuth';

// const CheckOutForm = () => {
//     const [error, setError] = useState('');
//     const [clientSecret, setClientSecret] = useState('');
//     const [transactionId, setTransactionId] = useState('');
//     const stripe = useStripe();
//     const elements = useElements();

//     const axiosSecure = useAxiosSecure();
//     const [cart, refetch] = useCart();
//     const { user } = useAuth();

//     // Calculate total price and convert it to the smallest currency unit (cents for USD)
//     const totalPrice = cart.reduce((total, item) => total + item.price, 0);
//     const totalAmountInCents = Math.round(totalPrice * 100); // Convert to cents

//     useEffect(() => {
//         // Fetch the client secret from the backend
//         if (totalPrice > 0) {
//             axiosSecure.post('/create-payment-intent', { price: totalAmountInCents })
//                 .then(res => {
//                     if (res.data?.clientSecret) {
//                         console.log('Client secret received:', res.data.clientSecret);
//                         setClientSecret(res.data.clientSecret);
//                     } else {
//                         console.error('No client secret in response:', res.data);
//                     }
//                 })
//                 .catch(err => {
//                     console.error('Error creating payment intent:', err);
//                     setError('Failed to create payment intent. Please try again.');
//                 });
//         }
//     }, [axiosSecure, totalAmountInCents, totalPrice]);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             setError('Stripe is not initialized. Please try again.');
//             return;
//         }

//         const card = elements.getElement(CardElement);
//         if (!card) {
//             setError('Card details are required.');
//             return;
//         }

//         // Create payment method
//         const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card
//         });

//         if (paymentMethodError) {
//             console.log('Payment error:', paymentMethodError);
//             setError(paymentMethodError.message);
//             return;
//         } else {
//             console.log('Payment method created successfully:', paymentMethod);
//             setError('');
//         }

//         // Confirm payment
//         try {
//             const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
//                 payment_method: {
//                     card,
//                     billing_details: {
//                         email: user?.email || 'anonymous',
//                         name: user?.displayName || 'Anonymous User'
//                     }
//                 }
//             });

//             if (confirmError) {
//                 console.log('Confirm error:', confirmError.message);
//                 setError(confirmError.message);
//                 return;
//             }

//             console.log('Payment successful:', paymentIntent);

//             if (paymentIntent?.status === 'succeeded') {
//                 console.log('Transaction ID:', paymentIntent.id);
//                 setTransactionId(paymentIntent.id);

//                 // Save the payment in the database
//                 const payment = {
//                     email: user?.email,
//                     price: totalPrice,
//                     transactionId: paymentIntent.id,
//                     date: new Date().toISOString(), // Use ISO format for consistency
//                     cartIds: cart.map(item => item._id),
//                     menuItemIds: cart.map(item => item.menuId),
//                     status: 'pending'
//                 };

//                 try {
//                     const res = await axiosSecure.post('/payments', payment);
//                     console.log('Payment saved successfully:', res.data);
//                     refetch();

//                 } catch (dbError) {
//                     console.error('Failed to save payment in database:', dbError);
//                     setError('Payment succeeded but failed to save in database.');
//                 }
//             }
//         } catch (paymentError) {
//             console.error('Error during payment confirmation:', paymentError);
//             setError('Payment failed. Please try again.');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="p-6 bg-red-100 dark:bg-gray-900 rounded-lg shadow-md space-y-4">
//             <CardElement
//                 options={{
//                     style: {
//                         base: {
//                             fontSize: '16px',
//                             color: '#fff',
//                             fontFamily: 'Arial, sans-serif',
//                             '::placeholder': {
//                                 color: '#aab7c4',
//                             },
//                         },
//                         invalid: {
//                             color: '#9e2146',
//                         },
//                     },
//                 }}
//                 className="card-element bg-white dark:bg-gray-700 rounded-md p-4"
//             />
//             <button
//                 type="submit"
//                 disabled={!stripe || !clientSecret}
//                 className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
//             >
//                 Pay
//             </button>
//             {error && <p className="text-red-500">{error}</p>}
//             {transactionId && <p className="text-green-500">Your transaction ID: {transactionId}</p>}
//         </form>
//     );
// };

// export default CheckOutForm;





import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import useCart from '../../../Hook/useCart';
import useAuth from '../../../Hook/useAuth';

const CheckOutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const { user } = useAuth();

    // Calculate total price and convert it to the smallest currency unit (cents for USD)
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const totalAmountInCents = Math.round(totalPrice * 100); // Convert to cents

    useEffect(() => {
        // Fetch the client secret from the backend
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalAmountInCents })
                .then(res => {
                    if (res.data?.clientSecret) {
                        console.log('Client secret received:', res.data.clientSecret);
                        setClientSecret(res.data.clientSecret);
                    } else {
                        console.error('No client secret in response:', res.data);
                    }
                })
                .catch(err => {
                    console.error('Error creating payment intent:', err);
                    setError('Failed to create payment intent. Please try again.');
                });
        }
    }, [axiosSecure, totalAmountInCents, totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            setError('Stripe is not initialized. Please try again.');
            return;
        }

        const card = elements.getElement(CardElement);
        if (!card) {
            setError('Card details are required.');
            return;
        }

        // Create payment method
        const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (paymentMethodError) {
            console.log('Payment error:', paymentMethodError);
            setError(paymentMethodError.message);
            return;
        } else {
            console.log('Payment method created successfully:', paymentMethod);
            setError('');
        }

        // Confirm payment
        try {
            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'Anonymous User'
                    }
                }
            });

            if (confirmError) {
                console.log('Confirm error:', confirmError.message);
                setError(confirmError.message);
                return;
            }

            console.log('Payment successful:', paymentIntent);

            if (paymentIntent?.status === 'succeeded') {
                console.log('Transaction ID:', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // Save the payment in the database
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date().toISOString(), // Use ISO format for consistency
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                };

                try {
                    const res = await axiosSecure.post('/payments', payment);
                    console.log('Payment saved successfully:', res.data);

                    // Trigger refetch and show SweetAlert success
                    refetch();

                    Swal.fire({
                        icon: 'success',
                        title: 'Payment Successful!',
                        text: `Transaction ID: ${paymentIntent.id}`,
                        confirmButtonText: 'OK'
                    });
                } catch (dbError) {
                    console.error('Failed to save payment in database:', dbError);
                    setError('Payment succeeded but failed to save in database.');
                }
            }
        } catch (paymentError) {
            console.error('Error during payment confirmation:', paymentError);
            setError('Payment failed. Please try again.');
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
            {error && <p className="text-red-500">{error}</p>}
            {transactionId && <p className="text-green-500">Your transaction ID: {transactionId}</p>}
        </form>
    );
};

export default CheckOutForm;
