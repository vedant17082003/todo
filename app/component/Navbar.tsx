'use client';

import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa'; // Import the down arrow icon
import { useState } from 'react';
import Image from 'next/image';
import logo from "/app/logo.png";

type NavbarProps = {
    loginText: string;
    signupText: string;

};

const Navbar: React.FC<NavbarProps> = ({ loginText, signupText }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between p-4 shadow-md ml-4 mr-4">
            {/* Left side with logo */}
            <div className="text-2xl font-bold">
                <Link href="/">
                    <Image
                        src={logo} // Replace with your image path
                        alt="YourLogo"
                        width={50} // Adjust width as needed
                        height={50} // Adjust height as needed
                    />
                </Link>
            </div>
            {/* Center section with navigation items */}
            <div className="flex items-center gap-6">
                <Link href="/features">
                    <span className="text-white hover:text-orange-500">Features</span>
                </Link>
                <Link href="/teams">
                    <span className="text-white hover:text-orange-500">Teams</span>
                </Link>
                <div className="relative">
                    <button
                        id="dropdownDelayButton"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center text-white hover:text-orange-500 focus:outline-none"
                    >
                        Resources
                        <FaChevronDown className="ml-1 text-gray-500" />
                    </button>
                    {/* Dropdown menu */}
                    {dropdownOpen && (
                        <div
                            id="dropdownDelay"
                            className="absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 z-10"
                        >
                            <ul className="py-2 text-sm text-white bg-black">
                                <li>
                                    <Link href="/resources/integration">
                                        <span className="block px-4 py-2 hover:bg-orange-500 cursor-pointer">Integration</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/templates">
                                        <span className="block px-4 py-2 hover:bg-orange-500 cursor-pointer">Templates</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/getting-started">
                                        <span className="block px-4 py-2 hover:bg-orange-500 cursor-pointer">Getting Started</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/help-centre">
                                        <span className="block px-4 py-2 hover:bg-orange-500 cursor-pointer">Help Centre</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/productivity-methods">
                                        <span className="block px-4 py-2 hover:bg-orange-500 cursor-pointer">Productivity Methods</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/inspiration-hub">
                                        <span className="block px-4 py-2 hover:bg-orange-500 cursor-pointer">Inspiration Hub</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/downloads">
                                        <span className="block px-4 py-2 hover:bg-orange-500 cursor-pointer">Downloads</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <Link href="/pricing">
                    <span className="text-white hover:text-orange-500">Pricing</span>
                </Link>
                <hr className="h-6 border-l border-gray-300" />
                {/* Right side with login and signup */}
                <div className="flex items-center gap-4">
                    <Link href="/login">
                        <span className="text-orange-500 hover:underline">{loginText}</span>
                    </Link>
                    <Link href="/signup">
                        <span className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500">{signupText}</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
