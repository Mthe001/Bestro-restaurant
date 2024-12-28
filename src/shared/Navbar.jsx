import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-transparent">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Brand Logo / Name */}
                    <div className="text-2xl btn btn-ghost font-bold text-white">
                        Bistro /<span className="text-yellow-400">Boss</span>
                    </div>

                    {/* Links for Desktop */}
                    <div className="hidden md:flex space-x-6 text-white">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-yellow-400 underline'
                                    : 'hover:text-yellow-400'
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/menu"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-yellow-400 underline'
                                    : 'hover:text-yellow-400'
                            }
                        >
                            Menu
                        </NavLink>
                        <NavLink
                            to="/shop"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-yellow-400 underline'
                                    : 'hover:text-yellow-400'
                            }
                        >
                            Shop
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-yellow-400 underline'
                                    : 'hover:text-yellow-400'
                            }
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-yellow-400 underline'
                                    : 'hover:text-yellow-400'
                            }
                        >
                            Contact Us
                        </NavLink>
                    </div>

                    {/* Icons Section */}
                    <div className="flex items-center space-x-4 text-white">
                        {/* Cart Icon */}
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-yellow-400'
                                    : 'hover:text-yellow-400'
                            }
                        >
                            <FaShoppingCart size={24} />
                        </NavLink>
                        {/* Sign In Icon */}
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-yellow-400'
                                    : 'hover:text-yellow-400'
                            }
                        >
                            <FaSignInAlt size={24} />
                        </NavLink>
                        {/* Register Icon */}
                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-yellow-400'
                                    : 'hover:text-yellow-400'
                            }
                        >
                            <FaUserPlus size={24} />
                        </NavLink>
                        {/* Theme Toggle */}
                        <button
                            className="btn btn-ghost text-white"
                            data-set-theme="dark"
                            data-act-class="ACTIVECLASS"
                        >
                            🌙
                        </button>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="md:hidden">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost text-white">
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
                                    <NavLink to="/" className="hover:text-yellow-400">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/menu" className="hover:text-yellow-400">
                                        Menu
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/shop" className="hover:text-yellow-400">
                                        Shop
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard" className="hover:text-yellow-400">
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className="hover:text-yellow-400">
                                        Contact Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/cart" className="hover:text-yellow-400">
                                        Cart
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login" className="hover:text-yellow-400">
                                        Sign In
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register" className="hover:text-yellow-400">
                                        Register
                                    </NavLink>
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
