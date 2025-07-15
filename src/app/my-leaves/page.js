"use client";

import Table from "@/components/Table";
import leavesData from "../data/leavesData";
import { useState } from "react";

const MyLeaves = () => {
  const TABS = ["All", "Approved", "Pending", "Rejected"];
  const [searchTerm, setSearchTerm] = useState("");

  const columns = [
    { key: "type", title: "Leave Type" },
    { key: "appliedOn", title: "Applied on" },
    { key: "dateRange", title: "Date Range" },
    { key: "duration", title: "Duration" },
    { key: "status", title: "Status" },
    { key: "action", title: "Action" },
  ];

  const formattedData = leavesData.map((leave) => ({
    ...leave,
    action: {
      link: `/leave-details/${leave.id}`,
      text: "View",
    },
  }));

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

      <Table
        columns={columns}
        data={formattedData}
        filterTabs={TABS}
        searchable={true}
        sortable={true}
        viewMoreLink={{ text: "Leave History" }}
      />
    </div>
  );
};

export default MyLeaves;