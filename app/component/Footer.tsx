"use client";

import { FaTwitter, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 py-10">
            <div className="container mx-auto flex justify-between items-start px-6 lg:px-16">

                <div className="flex flex-col">
                    <div className="flex items-center mb-4">
                        {/* Todoist Logo */}
                        <div className="h-8 w-8 bg-white rounded-md"></div>
                        <h1 className="text-xl font-bold ml-2 text-white">todoist</h1>
                    </div>
                    <p className="text-white text-sm">
                        Join millions of people who organize work and life with Todoist.
                    </p>
                </div>

                {/* Center sections */}
                <div className="flex space-x-8">
                    {/* Features Section */}
                    <div>
                        <h3 className="font-bold mb-2 text-white">Features</h3>
                        <ul className="text-white space-y-2 text-sm">
                            <li>How It Works</li>
                            <li>For Teams</li>
                            <li>Pricing</li>
                            <li>Templates</li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div>
                        <h3 className="font-bold mb-2 text-white">Resources</h3>
                        <ul className="text-white space-y-2 text-sm">
                            <li>Download Apps</li>
                            <li>Help Center</li>
                            <li>Productivity Methods</li>
                            <li>Integrations</li>
                            <li>Channel Partners</li>
                            <li>Developer API</li>
                            <li>Status</li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div>
                        <h3 className="font-bold mb-2 text-white">Company</h3>
                        <ul className="text-white space-y-2 text-sm">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Inspiration Hub</li>
                            <li>Press</li>
                            <li>Twist</li>
                        </ul>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">
                        <FaTwitter size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        <FaYoutube size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        <FaFacebook size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        <FaInstagram size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
