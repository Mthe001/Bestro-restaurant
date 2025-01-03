import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaHome, FaClipboardCheck, FaHistory, FaStar, FaTicketAlt, FaMoon, FaSun, FaBars } from 'react-icons/fa'; // Add appropriate icons
import useTheme from '../Hook/useTheme';


const DashboardLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar is hidden by default on mobile
    const { theme, toggleTheme } = useTheme(); // Assuming `useTheme` is a custom hook managing dark/light mode

    // Toggle Sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`flex flex-col lg:flex-row ${theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-gray-100 text-gray-900'}`}>

            {/* Hamburger Menu Icon for Mobile */}
            <div className="lg:hidden flex items-center p-4" onClick={toggleSidebar}>
                <FaBars size={24} className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
            </div>

            {/* Sidebar */}
            {/* Sidebar */}
            <div
                className={`lg:w-64 min-h-screen bg-orange-400 text-gray-900 dark:text-white p-4 transition-all ease-in-out
                ${isSidebarOpen ? 'block fixed top-0 left-0 right-0 z-10' : 'hidden lg:block'}`}
            >
                <ul className="menu space-y-4">
                    <li>
                        <NavLink
                            to="/dashboard/user-home"
                            className={({ isActive }) =>
                                `hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-md ${isActive ? 'text-red-700 dark:text-yellow-200' : ''
                                }`
                            }
                        >
                            <FaHome size={20} /> User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/reservation"
                            className={({ isActive }) =>
                                `hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-md ${isActive ? 'text-red-700 dark:text-yellow-200' : ''
                                }`
                            }
                        >
                            <FaClipboardCheck size={20} /> Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/payment-history"
                            className={({ isActive }) =>
                                `hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-md ${isActive ? 'text-red-700 dark:text-yellow-200' : ''
                                }`
                            }
                        >
                            <FaHistory size={20} /> Payment History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/cart"
                            className={({ isActive }) =>
                                `hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-md ${isActive ? 'text-red-700 dark:text-yellow-200' : ''
                                }`
                            }
                        >
                            <FaShoppingCart size={20} /> My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/add-review"
                            className={({ isActive }) =>
                                `hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-md ${isActive ? 'text-red-700 dark:text-yellow-200' : ''
                                }`
                            }
                        >
                            <FaStar size={20} /> Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/my-booking"
                            className={({ isActive }) =>
                                `hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-md ${isActive ? 'text-red-700 dark:text-yellow-200' : ''
                                }`
                            }
                        >
                            <FaTicketAlt size={20} /> My Booking
                        </NavLink>
                    </li>
                    {/* Divider */}
                    <div className="divider"></div>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-md ${isActive ? 'text-red-700 dark:text-yellow-200' : ''
                                }`
                            }
                        >
                            <FaHome size={20} /> Main Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/menu"
                            className={({ isActive }) =>
                                `hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-md ${isActive ? 'text-red-700 dark:text-yellow-200' : ''
                                }`
                            }
                        >
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/order/salad"
                            className={({ isActive }) =>
                                `hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-md ${isActive ? 'text-red-700 dark:text-yellow-200' : ''
                                }`
                            }
                        >
                            Order
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-md ${isActive ? 'text-red-700 dark:text-yellow-200' : ''
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                    {/* Dark/Light Mode Toggle */}
                    <li>
                        <button
                            onClick={toggleTheme}
                            className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-md w-full"
                        >
                            {theme === 'dark' ? (
                                <FaSun size={20} /> // Sun icon for light mode
                            ) : (
                                <FaMoon size={20} /> // Moon icon for dark mode
                            )}
                        </button>
                    </li>
                </ul>
            </div>


            {/* Main Content (Outlet) */}
            <div className="flex-1 p-4 mt-20">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
