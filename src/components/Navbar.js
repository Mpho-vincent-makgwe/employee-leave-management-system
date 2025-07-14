// components/Navbar.js
"use client";

import { FaSearch, FaBell, FaUser } from 'react-icons/fa';
import { FiLogOut, FiSettings } from 'react-icons/fi';
import { useState } from 'react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm h-16 fixed top-0 right-0 left-0 lg:left-64 z-10 border-b border-gray-200">
      <div className="flex items-center justify-between h-full px-4 lg:px-6 w-full">
        {/* Search input - always visible */}
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <FaSearch className="text-sm" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Desktop: Full right side */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="p-2 rounded-full hover:bg-gray-100 transition text-indigo-600">
            <FaBell className="text-lg" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition text-indigo-600">
            <FaUser className="text-lg" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition text-indigo-600">
            <FiLogOut className="text-lg" />
          </button>
        </div>

        {/* Mobile: Settings dropdown */}
        <div className="lg:hidden relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="p-2 rounded-full hover:bg-gray-100 transition text-indigo-600"
          >
            <FiSettings className="text-lg" />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
              <a href="/notifications" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <FaBell className="mr-3 text-indigo-600" />
                Notifications
              </a>
              <a href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <FaUser className="mr-3 text-indigo-600" />
                Profile
              </a>
              <a href="/logout" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <FiLogOut className="mr-3 text-indigo-600" />
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}