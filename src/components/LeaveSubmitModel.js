import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const LeaveSubmitModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-gray-100 rounded-[20px] shadow-xl p-10 relative w-[90%] max-w-md text-center">
        {/* Close Icon */}
        <button onClick={onClose} className="absolute top-4 right-4 text-[#6C4CF1] text-xl">
          <FaTimes />
        </button>

        {/* Check Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-[#F1F3F7] flex items-center justify-center">
            <FaCheck className="text-[#6C4CF1] text-3xl" />
          </div>
        </div>

        {/* Message */}
        <h3 className="text-2xl font-bold text-[#6C4CF1] mb-2">Successful</h3>
        <p className="text-gray-600 text-sm mb-6">
          Your leave request has been submitted and is currently pending approval.
        </p>

        {/* Go Back Button */}
        <button
          onClick={onClose}
          className="bg-[#6C4CF1] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#5A3FE0] transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default LeaveSubmitModal;
