import React from "react";
import { FiMonitor, FiSmartphone, FiWatch, FiMail, FiGlobe } from "react-icons/fi"; // Importing icons (you can use other icons or libraries)

export function PlatformOptions() {
    return (
        <div className="flex space-x-4 justify-center mt-20">
            {/* Desktop */}
            <div className="flex items-center bg-yellow-100 px-4 py-2 rounded-lg shadow-sm">
                <FiMonitor className="text-lg text-black mr-2" />
                <span className="text-black font-medium">Desktop</span>
            </div>

            {/* Android */}
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
                <FiSmartphone className="text-lg text-gray-500 mr-2" />
                <span className="text-gray-700 font-medium">Android</span>
            </div>

            {/* iOS */}
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
                <FiSmartphone className="text-lg text-orange-500 mr-2" />
                <span className="text-gray-700 font-medium">iOS</span>
            </div>

            {/* Wearables */}
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
                <FiWatch className="text-lg text-gray-500 mr-2" />
                <span className="text-gray-700 font-medium">Wearables</span>
            </div>

            {/* Browser Extensions */}
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
                <FiGlobe className="text-lg text-gray-500 mr-2" />
                <span className="text-gray-700 font-medium">Browser extensions</span>
            </div>

            {/* Email Add-ons */}
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
                <FiMail className="text-lg text-gray-500 mr-2" />
                <span className="text-gray-700 font-medium">Email add-ons</span>
            </div>
        </div>
    );
}
