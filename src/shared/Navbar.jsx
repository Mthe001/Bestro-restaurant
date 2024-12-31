import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import useTheme from '../Hook/useTheme';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme(); // Use the theme state and toggle function from the custom hook

    return (
        <nav className="bg-cyan-500 bg-opacity-20 fixed z-50 flex w-full">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Brand Logo / Name */}
                    <Link to="/" className="btn btn-ghost text-2xl font-bold text-gray-800 dark:text-white">
                        Bistro/<span className="text-yellow-500">Boss</span>
                    </Link>

                    {/* Links for Desktop */}
                    <div className="hidden md:flex space-x-6 text-gray-900 dark:text-white">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'text-yellow-500 underline' : 'hover:text-yellow-500'
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/menu"
                            className={({ isActive }) =>
                                isActive ? 'text-yellow-500 underline' : 'hover:text-yellow-500'
                            }
                        >
                            Menu
                        </NavLink>
                        <NavLink
                            to="/shop"
                            className={({ isActive }) =>
                                isActive ? 'text-yellow-500 underline' : 'hover:text-yellow-500'
                            }
                        >
                            Shop
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive ? 'text-yellow-500 underline' : 'hover:text-yellow-500'
                            }
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? 'text-yellow-500 underline' : 'hover:text-yellow-500'
                            }
                        >
                            Contact Us
                        </NavLink>
                    </div>

                    {/* Icons Section */}
                    <div className="hidden md:flex items-center space-x-4 text-gray-900 dark:text-white">
                        {/* Cart Icon */}
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                isActive ? 'text-yellow-500' : 'hover:text-yellow-500'
                            }
                        >
                            <FaShoppingCart size={24} />
                        </NavLink>
                        {/* Sign In Icon */}
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? 'text-yellow-500' : 'hover:text-yellow-500'
                            }
                        >
                            <FaSignInAlt size={24} />
                        </NavLink>
                        {/* Register Icon */}
                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                isActive ? 'text-yellow-500' : 'hover:text-yellow-500'
                            }
                        >
                            <FaUserPlus size={24} />
                        </NavLink>

                        {/* Theme Toggle using custom input */}
                        <label className="grid cursor-pointer place-items-center">
                            <input
                                type="checkbox"
                                value="synthwave"
                                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                                checked={theme === 'dark'} // Check if the current theme is dark
                                onChange={toggleTheme} // Toggle theme on change
                            />
                            {/* Light Mode Icon */}
                            <svg
                                className="stroke-gray-900 dark:stroke-white fill-gray-900 dark:fill-white col-start-1 row-start-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="5" />
                                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                            {/* Dark Mode Icon */}
                            <svg
                                className="stroke-gray-900 dark:stroke-white fill-gray-900 dark:fill-white col-start-2 row-start-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        </label>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="md:hidden z-50">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost text-gray-900 dark:text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu p-2 shadow bg-zinc-800 rounded-box w-52"
                            >
                                <li>
                                    <NavLink to="/" className="hover:text-yellow-500">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/menu" className="hover:text-yellow-500">
                                        Menu
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/shop" className="hover:text-yellow-500">
                                        Shop
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard" className="hover:text-yellow-500">
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className="hover:text-yellow-500">
                                        Contact Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/cart" className="hover:text-yellow-500">
                                        Cart
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login" className="hover:text-yellow-500">
                                        Sign In
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register" className="hover:text-yellow-500">
                                        Register
                                    </NavLink>
                                </li>
                                <li>
                                    {/* Theme Toggle for Mobile */}
                                    <label className="grid cursor-pointer place-items-center">
                                        <input
                                            type="checkbox"
                                            value="synthwave"
                                            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                                            checked={theme === 'dark'}
                                            onChange={toggleTheme}
                                        />
                                        <svg
                                            className="stroke-gray-900 dark:stroke-white fill-zinc-900 dark:fill-white col-start-1 row-start-1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="5" />
                                            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                                        </svg>
                                        <svg
                                            className="stroke-gray-900 dark:stroke-white fill-gray-900 dark:fill-white col-start-2 row-start-1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                        </svg>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
