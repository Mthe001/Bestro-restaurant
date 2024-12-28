import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-transparent ">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Brand Logo / Name */}
                    <div className="text-2xl btn btn-ghost font-bold text-white">
                        Bistro /<span className='text-yellow-400'>Boss</span>
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
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="md:hidden text-white">
                        <label htmlFor="menu-toggle" className="cursor-pointer">
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
                    </div>
                </div>

                {/* Mobile Menu */}
                <input
                    type="checkbox"
                    id="menu-toggle"
                    className="hidden"
                />
                <div className="md:hidden bg-zinc-900 text-white p-4 absolute w-full left-0">
                    <NavLink
                        to="/"
                        className="block py-2 hover:text-yellow-400"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/menu"
                        className="block py-2 hover:text-yellow-400"
                    >
                        Menu
                    </NavLink>
                    <NavLink
                        to="/shop"
                        className="block py-2 hover:text-yellow-400"
                    >
                        Shop
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className="block py-2 hover:text-yellow-400"
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="block py-2 hover:text-yellow-400"
                    >
                        Contact Us
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className="block py-2 hover:text-yellow-400"
                    >
                        Cart
                    </NavLink>
                    <NavLink
                        to="/login"
                        className="block py-2 hover:text-yellow-400"
                    >
                        Sign In
                    </NavLink>
                    <NavLink
                        to="/register"
                        className="block py-2 hover:text-yellow-400"
                    >
                        Register
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
