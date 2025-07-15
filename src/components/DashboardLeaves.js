"use client";

import Table from "@/components/Table";
import leavesData from "@/app/data/leavesData";
import Link from "next/link";

export default function DashboardLeavesPreview() {
  const columns = [
    { key: "type", title: "Leave Type" },
    { key: "appliedOn", title: "Applied on" },
    { key: "dateRange", title: "Date Range" },
    { key: "duration", title: "Duration" },
    { key: "status", title: "Status" },
  ];

  const previewData = leavesData.slice(0, 3).map((leave) => ({
    ...leave,
  }));

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Leave Requests
        </h2>
        <Link
          href="/my-leaves"
          className="text-sm text-indigo-600 hover:underline"
        >
          View All
        </Link>
      </div>

      <Table columns={columns} data={previewData} sortable={false} />
    </div>
  );
}
