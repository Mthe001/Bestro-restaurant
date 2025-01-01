import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import useTheme from '../Hook/useTheme';
import { Authcontext } from '../Provider/AuthProvider';


const Navbar = () => {
    const { theme, toggleTheme } = useTheme(); // Use the theme state and toggle function from the custom hook
    const { user, logout } = useContext(Authcontext); // Access user and logout from context

    const handleLogOut = async () => {
        try {
            await logout();
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

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
                        {/* Cart Icon */}
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                isActive ? 'text-yellow-500' : 'hover:text-yellow-500'
                            }
                        >
                            <FaShoppingCart size={24} />
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

                        {/* User Authentication Links */}
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
                                    role="button"
                                    className="btn btn-ghost btn-circle hover:dark:bg-zinc-950 avatar tooltip tooltip-bottom"
                                    data-tip={user?.displayName || "No Display Name"}
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
                                        <NavLink
                                            to="/profile"
                                            className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                                        >
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/settings"
                                            className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                                        >
                                            Settings
                                        </NavLink>
                                    </li>
                                    <li>
                                        <button onClick={handleLogOut}>Logout</button>
                                    </li>
                                </ul>
                            </div>
                        )}
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
                                    <NavLink to="/order/salad" className="hover:text-yellow-500">
                                        Order
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard" className="hover:text-yellow-500">
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className="hover:text-yellow-500">
                                        Contact
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
