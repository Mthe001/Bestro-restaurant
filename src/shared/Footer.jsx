import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white p-6 md:p-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Logo / Description */}
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Bistro Boss</h1>
                        <p className="text-sm text-gray-400">
                            Delight your senses with our carefully crafted dishes made from the freshest ingredients. Bistro Boss is your ultimate dining experience.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/menu" className="hover:text-gray-400">
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link to="/reservations" className="hover:text-gray-400">
                                    Reservations
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-gray-400">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-gray-400">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media / Contact */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Connect with Us</h2>
                        <div className="flex space-x-4 mb-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                <FaFacebook size={24} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                <FaTwitter size={24} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                        <p className="text-sm text-gray-400">
                            123 Flavor Street, Gourmet City, FC 45678
                        </p>
                        <p className="text-sm text-gray-400">
                            Phone: +1 234 567 890
                        </p>
                        <p className="text-sm text-gray-400">
                            Email: info@bistroboss.com
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8"></div>

                {/* Copyright Section */}
                <div className="text-center mt-4 text-sm text-gray-400">
                    © {new Date().getFullYear()} Bistro Boss. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
