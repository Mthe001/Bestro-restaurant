import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white p-6 md:p-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Logo or Brand Name */}
                <div className="text-xl font-bold mb-4 md:mb-0">
                    MyBrand
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-sm">
                    <Link to="/about" className="hover:text-gray-400">About</Link>
                    <Link to="/services" className="hover:text-gray-400">Services</Link>
                    <Link to="/contact" className="hover:text-gray-400">Contact</Link>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-6 text-sm text-gray-400">
                © {new Date().getFullYear()} Bistro Boss. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
