"use client";
import React from "react";
import leavesData from "@/app/data/leavesData";
import { Calendar } from "lucide-react";

const getDuration = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffTime = endDate - startDate;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
};

const statusStyles = {
  Approved: "bg-green-100 text-green-600",
  Pending: "bg-orange-100 text-orange-500",
};

const UpcomingLeaves = () => {
  const today = new Date();

  const upcoming = [...leavesData]
    .filter((leave) => new Date(leave.endDate) >= today)
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
    .slice(0, 2); // Only show the next 2 upcoming leaves

  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="text-xl mb-4 flex items-center gap-2">
        <span>
          <Calendar />
        </span>{" "}
        Upcoming Leaves
      </h2>

      {upcoming.length === 0 ? (
        <p className="text-gray-500">No upcoming leaves.</p>
      ) : (
        upcoming.map((leave) => (
          <div
            key={leave.id}
            className="border border-gray-200 shadow-sm rounded-lg p-4 mb-4 flex justify-between items-start"
          >
            <div>
              <p className="font-medium">{leave.type}</p>
              <p className="text-sm text-gray-600">
                {formatDate(leave.startDate)} to {formatDate(leave.endDate)} (
                {getDuration(leave.startDate, leave.endDate)}{" "}
                {getDuration(leave.startDate, leave.endDate) === 1
                  ? "day"
                  : "days"}
                )
              </p>
            </div>
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-md ${
                statusStyles[leave.status]
              }`}
            >
              {leave.status}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default UpcomingLeaves;
