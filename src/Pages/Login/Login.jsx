import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Importing React Icons for eye toggle
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook for redirection

const Login = () => {
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
    const [isChecked, setIsChecked] = useState(false); // State for remember me checkbox
    const navigate = useNavigate(); // Initialize the navigate hook

    const handleSubmit = (e) => {
        e.preventDefault();
        // Accessing form values
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', isChecked);

        // Proceed with login logic, e.g., API request
    };

    return (
        <div className="flex justify-center p-4 items-center min-h-screen bg-zinc-100 dark:bg-zinc-900">
            <div className="w-full max-w-md p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-gray-200 mb-6">
                    Login to Your Account
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 dark:text-gray-300 mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4 relative">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 dark:text-gray-300 mb-2"
                        >
                            Password
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter your password"
                            required
                        />
                        {/* Password Toggle */}
                        <div
                            className="absolute top-[52px] right-3 transform -translate-y-1/2 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                        </div>
                    </div>

                    {/* Remember Me Checkbox */}
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                            className="w-4 h-4 text-yellow-400 border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-yellow-400"
                        />
                        <label
                            htmlFor="rememberMe"
                            className="ml-2 text-gray-700 dark:text-gray-300"
                        >
                            Remember me
                        </label>
                    </div>

                    {/* Forgot Password Link */}
                    <div className="text-right mb-4">
                        <a
                            href="#"
                            className="text-yellow-400 hover:text-yellow-500 text-sm dark:text-yellow-300 dark:hover:text-yellow-400 transition-all duration-300"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-yellow-400 text-white font-semibold rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                    >
                        Login
                    </button>
                </form>

                {/* Register Link */}
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        Don't have an account?{' '}
                        <a
                            href="#"
                            className="text-yellow-400 hover:text-yellow-500 transition-all duration-300"
                            onClick={() => navigate('/register')} // Navigate to register page
                        >
                            Register
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
