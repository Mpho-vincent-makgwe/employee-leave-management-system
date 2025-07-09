"use client";

import { useState } from "react";
import leavesData from "../data/leavesData";
import Link from "next/link";

const TABS = ["All Requests", "Approved", "Pending", "Rejected"];

const statusColor = {
  Approved: "text-green-500",
  Pending: "text-yellow-500",
  Rejected: "text-red-500",
};

const MyLeaves = () => {
  const [activeTab, setActiveTab] = useState("All Requests");

  const filteredLeaves =
    activeTab === "All Requests"
      ? leavesData
      : leavesData.filter((leave) => leave.status === activeTab);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">My Leaves</h2>
          <p className="text-sm text-gray-600">
            View and manage your leave requests.
          </p>
        </div>
        <button className="bg-[#4f46e5] text-white px-4 py-2 rounded shadow hover:bg-indigo-700">
          + Request New Leave
        </button>
      </div>
      <div className="bg-white shadow mt-4 mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 object-cover gap-4 mb-4 p-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded ${
                activeTab === tab
                  ? "bg-[#4f46e5] text-white shadow"
                  : "bg-white text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white shadow rounded-md overflow-x-auto">
        <h3 className="text-[#4f46e5] text-sm font-semibold px-4 py-4">
          Leave History
        </h3>
        <table className="min-w-full text-sm text-gray-700">
          <thead>
            <tr className="bg-white text-left">
              <th className="px-6 py-3">Leave Type</th>
              <th className="px-6 py-3">Applied on</th>
              <th className="px-6 py-3">Date Range</th>
              <th className="px-6 py-3">Duration</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeaves.map((leave) => (
              <tr key={leave.id} className="border-t border-gray-100">
                <td className="px-6 py-4">{leave.type}</td>
                <td className="px-6 py-4">{leave.appliedOn}</td>
                <td className="px-6 py-4">{leave.dateRange}</td>
                <td className="px-6 py-4">{leave.duration}</td>
                <td
                  className={`px-6 py-4 font-medium ${
                    statusColor[leave.status]
                  }`}
                >
                  {leave.status}
                </td>
                <td className="px-6 py-4 text-indigo-500 font-medium cursor-pointer hover:underline">
                  <Link
                    href={`/leave-details/${leave.id}`}
                    className="text-indigo-500 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
            {filteredLeaves.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-400">
                  No leave requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLeaves;
