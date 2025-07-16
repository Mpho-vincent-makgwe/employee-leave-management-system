"use client";

import Table from "@/components/Table";
import leavesData from "../data/leavesData";
import { useEffect, useMemo } from "react";
import { useSearch } from '@/context/SearchContext';
import { Plus } from 'lucide-react';
import CustomButton from "@/components/Buttons/CustomButton";


const MyLeaves = () => {
  const TABS = ["All", "Approved", "Pending", "Rejected"];
  const { setSearchTerm } = useSearch();

  // Memoize the columns array to prevent unnecessary re-renders
  const columns = useMemo(() => [
    { key: "type", title: "Leave Type" },
    { key: "appliedOn", title: "Applied on" },
    { key: "dateRange", title: "Date Range" },
    { key: "duration", title: "Duration" },
    { key: "status", title: "Status" },
    { key: "action", title: "Action" },
  ], []);

  // Memoize the formatted data to prevent unnecessary recalculations
  const formattedData = useMemo(() => 
    leavesData.map((leave) => ({
      ...leave,
      action: {
        link: `/leave-details/${leave.id}`,
        text: "View",
      },
    }))
  , []);

  // Clear search term when component mounts and unmounts
  useEffect(() => {
    setSearchTerm('');
    return () => setSearchTerm('');
  }, [setSearchTerm]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">My Leaves</h2>
          <p className="text-sm text-gray-600">
            View and manage your leave requests.
          </p>
        </div>
        {/* <button 
          className="flex items-center gap-2 bg-[#4f46e5] text-white px-4 py-2 rounded shadow hover:bg-indigo-700 transition-colors"
          onClick={() => {
            // Add your leave request logic here
            console.log("Request new leave clicked");
          }}
        >
          <Plus size={18} />
          Request New Leave
        </button> */}
        <CustomButton to="/request-leave" icon={<Plus size={18} />} text="Request New Leave" />
      </div>

      <Table
        columns={columns}
        data={formattedData}
        filterTabs={TABS}
        sortable={true}
        viewMoreLink={{ text: "Leave History" }}
        enablePagination={formattedData.length > 5}
      />
    </div>
  );
};

export default MyLeaves;