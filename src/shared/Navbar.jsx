import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import useTheme from '../Hook/useTheme';
import { Authcontext } from '../Provider/AuthProvider';
import useCart from '../Hook/useCart';
import './Navbar.css'; // Import the CSS file



const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { user, logout } = useContext(Authcontext);
    const [cart] = useCart(); // Get the cart from useCart hook

    const handleLogOut = async () => {
        try {
            await logout();
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <nav className="bg-cyan-500 bg-opacity-10 Nav-Bar  fixed z-50 w-full shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Brand Logo */}
                    <Link to="/" className="btn btn-ghost text-2xl font-bold text-gray-800 dark:text-white">
                        Bistro/<span className="text-yellow-500">Boss</span>
                    </Link>

                    {/* Desktop Links */}
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
                            to="/order/salad"
                            className={({ isActive }) =>
                                isActive ? 'text-yellow-500 underline' : 'hover:text-yellow-500'
                            }
                        >
                            Order
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
                            Contact
                        </NavLink>
                    </div>

                    {/* Icons Section */}
                    <div className="hidden md:flex items-center space-x-4 text-gray-900 dark:text-white">
                        {/* Cart Icon with Counter */}
                        <NavLink
                            to="/dashboard/cart"
                            className={({ isActive }) =>
                                isActive ? 'relative text-yellow-500' : 'relative hover:text-yellow-500'
                            }
                        >
                            <FaShoppingCart size={24} />
                            <span className="absolute top-[-4px] right-[-5px] bg-red-600 text-white text-xs rounded-full px-1">
                                {cart?.length ?? 0}
                            </span>
                        </NavLink>


                        {/* Theme Toggle */}
                        <label className="grid cursor-pointer place-items-center">
                            <input
                                type="checkbox"
                                value="synthwave"
                                className="toggle theme-controller bg-base-content"
                                checked={theme === 'dark'}
                                onChange={toggleTheme}
                            />
                        </label>

                        {/* User Authentication */}
                        {!user ? (
                            <div className="flex gap-4">
                                <NavLink to="/login" className="btn btn-sm btn-ghost flex items-center gap-2">
                                    <FaSignInAlt />
                                </NavLink>
                                <NavLink to="/register" className="btn btn-sm btn-ghost flex items-center gap-2">
                                    <FaUserPlus />
                                </NavLink>
                            </div>
                        ) : (
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    className="btn btn-ghost btn-circle hover:dark:bg-zinc-950 avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        <img alt="User Avatar" src={user?.photoURL || "https://via.placeholder.com/150"} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-zinc-500 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                                >
                                    <li>
                                        <NavLink to="/profile">Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/settings">Settings</NavLink>
                                    </li>
                                    <li>
                                        <button onClick={handleLogOut}>Logout</button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Mobile View: User + Hamburger Menu */}
                    <div className="md:hidden z-50 flex items-center space-x-4">
                        {/* User Authentication for Mobile */}
                        {!user ? (
                            <div className="flex gap-2">
                                <NavLink to="/login" className="btn btn-sm btn-ghost flex items-center gap-2">
                                    <FaSignInAlt />
                                </NavLink>
                                <NavLink to="/register" className="btn btn-sm btn-ghost flex items-center gap-2">
                                    <FaUserPlus />
                                </NavLink>
                            </div>
                        ) : (
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-8 rounded-full">
                                        <img alt="User Avatar" src={user?.photoURL || "https://via.placeholder.com/150"} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-zinc-500 rounded-box z-[1] mt-3 w-40 p-2 shadow"
                                >
                                    <li>
                                        <NavLink to="/profile">Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/settings">Settings</NavLink>
                                    </li>
                                    <li>
                                        <button onClick={handleLogOut}>Logout</button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {/* Hamburger Menu */}
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
                                    <NavLink to="/" className="hover:text-yellow-500">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/menu" className="hover:text-yellow-500">Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/order/salad" className="hover:text-yellow-500">Order</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard" className="hover:text-yellow-500">Dashboard</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className="hover:text-yellow-500">Contact</NavLink>
                                </li>
                                <li>
                                    {/* Cart Icon with Counter */}
                                    <NavLink
                                        to="/dashboard/cart"
                                        className={({ isActive }) =>
                                            isActive ? 'relative text-yellow-500' : 'relative hover:text-yellow-500'
                                        }
                                    >
                                        <FaShoppingCart size={24} />
                                        <span className="absolute top-0 right-36 bg-red-600 text-white text-xs rounded-full px-1">
                                            {cart?.length ?? 0}
                                        </span>
                                    </NavLink>

                                </li>
                                <li>
                                    {/* Theme Toggle in Hamburger Menu */}
                                    <label className="grid cursor-pointer place-items-center">
                                        <input
                                            type="checkbox"
                                            value="synthwave"
                                            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                                            checked={theme === 'dark'}
                                            onChange={toggleTheme}
                                        />
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
