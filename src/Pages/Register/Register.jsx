import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Password visibility toggle icons
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook for redirection

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        photoUrl: '' // Added photoUrl state
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // Initialize the navigate hook

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword, photoUrl } = formData;
        const errorMessages = {};

        // Password validation regex
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/; // At least 8 characters, 1 letter, 1 number, and 1 special character

        // Basic form validation
        if (!name) errorMessages.name = 'Name is required';
        if (!email) errorMessages.email = 'Email is required';
        if (!password) errorMessages.password = 'Password is required';
        if (!passwordRegex.test(password)) errorMessages.password = 'Password must be at least 8 characters long and contain at least 1 letter, 1 number, and 1 special character';
        if (password !== confirmPassword) errorMessages.confirmPassword = 'Passwords do not match';
        if (!isChecked) errorMessages.terms = 'You must agree to the terms and conditions';
        if (photoUrl && !/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/.test(photoUrl)) {
            errorMessages.photoUrl = 'Please enter a valid image URL (jpg, jpeg, png, gif, webp)';
        }

        if (Object.keys(errorMessages).length > 0) {
            setErrors(errorMessages);
        } else {
            setErrors({});
            // Form submission logic (e.g., send data to API)
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-zinc-100 dark:bg-zinc-900">
            <div className="w-full max-w-md p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-gray-200 mb-6">
                    Create an Account
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 dark:text-gray-300 mb-2"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter your full name"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

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
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
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
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter your password"
                        />
                        <div
                            className="absolute top-[51px] right-3 transform -translate-y-1/2 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                        </div>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-4 relative">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-gray-700 dark:text-gray-300 mb-2"
                        >
                            Confirm Password
                        </label>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Confirm your password"
                        />
                        <div
                            className="absolute top-[51px] right-3 transform -translate-y-1/2 cursor-pointer"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                        </div>
                        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                    </div>

                    {/* Photo URL */}
                    <div className="mb-4">
                        <label
                            htmlFor="photoUrl"
                            className="block text-gray-700 dark:text-gray-300 mb-2"
                        >
                            Photo URL (optional)
                        </label>
                        <input
                            type="text"
                            id="photoUrl"
                            name="photoUrl"
                            value={formData.photoUrl}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter an image URL (optional)"
                        />
                        {errors.photoUrl && <p className="text-red-500 text-xs mt-1">{errors.photoUrl}</p>}
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                            className="w-4 h-4 text-yellow-400 border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-yellow-400"
                        />
                        <label
                            htmlFor="terms"
                            className="ml-2 text-gray-700 dark:text-gray-300"
                        >
                            I agree to the <a href="#" className="text-yellow-400 hover:text-yellow-500">terms and conditions</a>
                        </label>
                        {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-yellow-400 text-white font-semibold rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
