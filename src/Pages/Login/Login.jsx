import React, { useState, useEffect } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import authImg from '../../assets/others/authentication.gif';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
    const [isChecked, setIsChecked] = useState(false); // State for remember me checkbox
    const [captchaInput, setCaptchaInput] = useState(''); // State for storing captcha input
    const [captchaError, setCaptchaError] = useState(''); // State for showing captcha validation error
    const navigate = useNavigate(); // Initialize the navigate hook

    useEffect(() => {
        // Initialize the captcha engine with 6 characters
        loadCaptchaEnginge(6); // Generates a 6-character captcha
    }, []); // Empty dependency array ensures it runs only once on component mount

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // Validate captcha
        if (!validateCaptcha(captchaInput)) {
            setCaptchaError('Invalid captcha. Please try again.');
            return;
        }

        // Clear captcha error and input on success
        setCaptchaError(''); // Clear captcha error if valid
        setCaptchaInput(''); // Reset the captcha input field
        loadCaptchaEnginge(6); // Reload the captcha with a new value

        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', isChecked);

        form.reset(); // Reset the form fields
    };

    return (
        <div className="flex flex-col  md:flex-row justify-center items-center min-h-screen bg-zinc-100 dark:bg-zinc-900">
            {/* Image Section */}
            <div className=" md:w-1/2 w-1/2 lg:w-[30%] m-10">
                <img
                    src={authImg} // Replace with your image URL
                    alt="Login Illustration"
                    className="w-full rounded-lg h-full object-cover"
                />
            </div>

            {/* Form Section */}
            <div className="w-[80%] m-10 md:w-1/2 lg:w-[20%] p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg">
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

                    {/* Captcha Section */}
                    <div className="mb-4">
                        <LoadCanvasTemplate /> {/* Captcha canvas */}
                        <input
                            type="text"
                            placeholder="Enter captcha"
                            value={captchaInput}
                            onChange={(e) => setCaptchaInput(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        {captchaError && (
                            <p className="text-red-500 text-sm mt-1">{captchaError}</p>
                        )}
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
