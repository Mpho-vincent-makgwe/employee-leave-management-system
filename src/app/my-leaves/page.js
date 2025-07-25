"use client";

import Table from "@/components/Table";
import leavesData from "../data/leavesData";
import { useEffect, useMemo } from "react";
import { useSearch } from "@/context/SearchContext";
import { Plus } from "lucide-react";
import CustomButton from "@/components/Buttons/CustomButton";
import Heading from "@/components/Heading";

const MyLeaves = () => {
  const TABS = ["All", "Approved", "Pending", "Rejected"];
  const { setSearchTerm } = useSearch();

  // Memoize the columns array to prevent unnecessary re-renders
  const columns = useMemo(
    () => [
      { key: "type", title: "Leave Type" },
      { key: "appliedOn", title: "Applied on" },
      { key: "dateRange", title: "Date Range" },
      { key: "duration", title: "Duration" },
      { key: "status", title: "Status" },
      { key: "action", title: "Action" },
    ],
    []
  );

  // Memoize the formatted data to prevent unnecessary recalculations
  const formattedData = useMemo(
    () =>
      leavesData.map((leave) => ({
        ...leave,
        action: {
          link: `/leave-details/${leave.id}`,
          text: "View",
        },
      })),
    []
  );

  // Clear search term when component mounts and unmounts
  useEffect(() => {
    setSearchTerm("");
    return () => setSearchTerm("");
  }, [setSearchTerm]);

  return (
    <div className="bg-gray-100">
      <div className="flex justify-between items-center">
        <div>
          <Heading
            title="My Leaves"
            subtitle="View and manage your leave requests."
          />
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
        <CustomButton
          to="/request-leave"
          icon={<Plus size={18} />}
          text="Request New Leave"
        />
      </div>

      <Table
        columns={columns}
        data={formattedData}
        filterTabs={TABS}
        sortable={true}
        title="Leave History"
        titleClassName="text-blue-800"
        viewMoreLink={{ text: "Leave History" }}
        enablePagination={formattedData.length > 5}
      />
    </div>
  );
};

export default MyLeaves;
