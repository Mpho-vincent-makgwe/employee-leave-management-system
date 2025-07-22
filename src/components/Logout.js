"use client";
import Image from "next/image";
import React from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

const Logout = ({ isOpen, onConfirm, onCancel }) => {
  const { logout } = useUser();
  const router = useRouter();

  const handleConfirm = async () => {
    try {
      await logout();
      if (onConfirm) onConfirm();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    router.back(); // Navigate to the previous page
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50 p-10">
      <div className="relative bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg text-center p-15">
        {/* Top Drag Handle */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-300 rounded-full" />

        {/* Close Icon */}
        <button
          onClick={handleCancel}
          className="absolute top-4 right-4 bg-indigo-600 rounded-full text-white hover:bg-white hover:text-indigo-600 p-1"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Power Icon */}
        <div className="mt-8">
          <div className="flex items-center justify-center mb-8">
            <Image
              src="/logout.jpg"
              alt="Power Icon"
              className="rounded-full ring-16 ring-indigo-100"
              width={50}
              height={50}
            />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Are you sure you want to Logout?
          </h2>
          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <button
              onClick={handleConfirm}
              className="w-full bg-[#D72323] hover:bg-[#b71c1c] text-white py-2 rounded-xl font-semibold"
            >
              Yes
            </button>
            <button
              onClick={handleCancel}
              className="w-full border-2 border-[#6C63FF] text-[#6C63FF] hover:bg-violet-50 py-2 rounded-xl font-semibold"
            >
              NO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
