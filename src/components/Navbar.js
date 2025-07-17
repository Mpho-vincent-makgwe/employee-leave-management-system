"use client";

import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { useState, useCallback } from "react";
import EtiLogo from "./Logo";
import { useSearch } from "@/context/SearchContext";
import Link from "next/link";
import ProfileModal from "./ProfileModal";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { searchTerm, setSearchTerm } = useSearch();

  const handleSearch = useCallback(
    (e) => {
      setSearchTerm(e.target.value);
    },
    [setSearchTerm]
  );

  return (
    <header className="bg-white shadow-sm h-16 fixed top-0 right-0 left-0 lg:left-64 z-10 border-b border-gray-200">
      <div className="flex items-center justify-between h-full px-4 lg:px-6 w-full">
        <div className="lg:hidden flex items-center">
          <EtiLogo className="h-8 w-auto" />
        </div>

        <div className="relative w-full max-w-md mx-4">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <FaSearch className="text-sm" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="relative">
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <FaBell className="text-gray-500 text-lg" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </div>
          <ProfileModal
          // isAuthenticated={isAuthenticated}
          // onLogin={handleLogin}
          // onLogout={handleLogout}
          // userInitials={user?.name?.[0]?.toUpperCase() || "?"}
          />
        </div>

        <div className="lg:hidden relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="p-2 rounded-full hover:bg-gray-100 transition text-indigo-600"
          >
            <FiSettings className="text-lg" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200">
              <a
                href="/notifications"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
              >
                <FaBell className="mr-3 text-indigo-600" />
                Notifications
              </a>
              <a
                href="/profile"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
              >
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-600 mr-3">
                  <FaUser />
                </div>
                Profile
              </a>
              <a
                href="/auth/logout"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
              >
                <FiSettings className="mr-3 text-indigo-600" />
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
