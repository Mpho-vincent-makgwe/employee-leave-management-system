"use client";

import leavesData from "@/app/data/leavesData";
import { useParams } from "next/navigation";

const badgeColors = {
  Approved: "bg-green-100 text-green-600",
  Pending: "bg-yellow-100 text-yellow-600",
  Rejected: "bg-red-100 text-red-600",
};

export default function LeaveRequestDetails() {
  const params = useParams();
  const id = parseInt(params.id);
  const leave = leavesData.find((item) => item.id === id);

  if (!leave) {
    return <div className="p-6">Leave request not found.</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      <h2 className="text-2xl text-gray-800">Leave Request Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Leave Information */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-start">
            <h3 className="text-lg text-gray-700 mb-2">Leave Information</h3>
            <span
              className={`px-3 py-1 text-sm font-medium rounded-full ${
                badgeColors[leave.status]
              }`}
            >
              {leave.status}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500">Employee</p>
                <p className="text-base font-semibold text-gray-800">
                  Rukome Paul
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Leave Type</p>
                <p className="text-base font-semibold text-gray-800">
                  {leave.type}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500">Applied Date</p>
                <p className="text-base font-semibold text-gray-800">
                  {leave.appliedOn}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Duration</p>
                <p className="text-base font-semibold text-gray-800">
                  {leave.dateRange} ({leave.duration})
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Details */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg text-gray-700 mb-4">Employee Details</h3>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500">Department</p>
                <p className="text-base font-semibold text-gray-800">
                  {leave.department}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Role</p>
                <p className="text-base font-semibold text-gray-800">
                  {leave.role}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500">Reporting Manager</p>
                <p className="text-base font-semibold text-gray-800">
                  {leave.manager}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Remaining Leave Balance</p>
                <p className="text-base font-semibold text-gray-800">
                  {leave.balance}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reason for Leave */}
      {leave.status === "Rejected" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg text-gray-700 mb-2">Reason for Leave</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {leave.reason}
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg text-[#D11A2A] mb-2">
              Reason for Rejection
            </h3>
            <p className="text-sm text-gray-700">{leave.rejectionReason}</p>
          </div>
        </div>
      ) : (
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg text-gray-700 mb-2">Reason for Leave</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {leave.reason}
          </p>
        </div>
      )}
    </div>
  );
}
