import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import authImg from '../../assets/others/authentication.gif';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import { Authcontext } from '../../Provider/AuthProvider';

// Validation schema with Yup
const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Za-z]/, 'Password must contain at least one letter')
        .matches(/\d/, 'Password must contain at least one number')
        .matches(/[@$!%*?&]/, 'Password must contain at least one special character')
        .required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    photoUrl: yup.string().url('Enter a valid URL').notRequired(),
    terms: yup.boolean().oneOf([true], 'You must agree to the terms and conditions')
});

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();
    const { registerUser } = useContext(Authcontext);

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitted },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur' // Validate fields only onBlur (when user leaves the field)
    });

    // Form submission handler
    const onSubmit = async (data) => {
        try {
            await registerUser(data.email, data.password, data.name, data.photoUrl);
            Swal.fire({
                icon: 'success',
                title: 'Registration Successful!',
                text: 'You have successfully created an account.',
            });
            navigate('/');
            reset(); // Clear the form after successful submission
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message || 'Something went wrong!',
            });
        }
    };

    return (
        <div className="flex flex-col lg:mt-auto md:mt-auto pt-20 md:flex-row justify-center items-center min-h-screen bg-zinc-100 dark:bg-zinc-900">
            <Helmet>
                <title>Register | Bestro Boss</title>
            </Helmet>

            {/* Image Section */}
            <div className="md:w-1/2 w-1/2 lg:w-[30%] m-10">
                <img
                    src={authImg}
                    alt="Register Illustration"
                    className="w-full rounded-lg h-full object-cover"
                />
            </div>

            {/* Form Section */}
            <div className="w-[80%] m-10 md:w-1/2 lg:w-[20%] p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-gray-200 mb-6">
                    Create an Account
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                            Full Name
                        </label>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholder="Enter your full name"
                                />
                            )}
                        />
                        {errors.name && isSubmitted && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                            Email Address
                        </label>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholder="Enter your email"
                                />
                            )}
                        />
                        {errors.email && isSubmitted && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 mb-2">
                            Password
                        </label>
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type={showPassword ? 'text' : 'password'}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholder="Enter your password"
                                />
                            )}
                        />
                        <div
                            className="absolute top-[51px] right-3 transform -translate-y-1/2 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                        </div>
                        {errors.password && isSubmitted && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-4 relative">
                        <label htmlFor="confirmPassword" className="block text-gray-700 dark:text-gray-300 mb-2">
                            Confirm Password
                        </label>
                        <Controller
                            name="confirmPassword"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholder="Confirm your password"
                                />
                            )}
                        />
                        <div
                            className="absolute top-[51px] right-3 transform -translate-y-1/2 cursor-pointer"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                        </div>
                        {errors.confirmPassword && isSubmitted && (
                            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-yellow-400 text-white font-semibold rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                    >
                        Register
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-gray-700 dark:text-gray-300">
                        Already have an account?{' '}
                        <Link to="/login" className="text-yellow-400 hover:text-yellow-500">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
