"use client";

import { useRef, useEffect } from "react";
import { useUser } from "@/context/UserContext";
import Link from "next/link";

export default function ProfileModal({ onClose }) {
  const { user, logout } = useUser();
  const dropdownRef = useRef();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const getInitials = (name) =>
    name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <div
      ref={dropdownRef}
      className="absolute top-12 right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl z-50"
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center">
            {getInitials(user?.name)}
          </div>
          <div>
            <p className="font-medium text-sm">{user?.name}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
        </div>
        <Link href="/profile" onClick={onClose}>
          <button className="mt-3 w-full text-indigo-600 text-sm font-medium hover:bg-indigo-50 px-3 py-2 rounded-lg transition">
            Manage your account
          </button>
        </Link>
      </div>

      <div className="p-4">
        <Link href="/auth/logout" onClick={onClose}>
          <div className="w-full text-left text-sm text-red-600 py-2 px-3 hover:bg-gray-100 rounded-md">
            Log out
          </div>
        </Link>
      </div>
    </div>
  );
}
