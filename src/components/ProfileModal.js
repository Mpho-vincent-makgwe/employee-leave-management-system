"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

export default function ProfileModal({
  isAuthenticated,
  onLogin,
  onLogout,
  userInitials,
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile icon/button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-green-700 text-white font-bold flex items-center justify-center hover:opacity-90"
        aria-label="Profile menu"
      >
        {userInitials || "?"}
      </button>

      {/* Dropdown modal */}
      {/* <AnimatePresence> */}
      {open && (
        <div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 4 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border z-50"
        >
          <Link href="/auth/log-in">
            <button
              className="w-full text-left bg-indigo-600 px-4 py-4 text-sm text-white hover:bg-white hover:text-indigo-600 rounded-t-xl"
              onClick={() => {
                setOpen(false);
                isAuthenticated ? onLogout() : onLogin();
              }}
            >
              {isAuthenticated ? "Log out" : "Log in"}
            </button>
          </Link>
        </div>
      )}
      {/* </AnimatePresence> */}
    </div>
  );
}
