"use client";

import SummaryCards from "@/components/SummaryCards";
import UpcomingLeaves from "@/components/UpcomingLeaves";
import DashboardNotifications from "@/components/DashboardNotifications";
import CustomButton from "@/components/Buttons/CustomButton";
import { Plus } from 'lucide-react';
import Table from "@/components/Table";
import Link from "next/link";
import leavesData from "./data/leavesData";
import { useSearch } from '@/context/SearchContext';
import { useEffect, useMemo } from 'react';

const Dashboard = () => {
  const { setSearchTerm } = useSearch();

  useEffect(() => {
    setSearchTerm('');
    return () => setSearchTerm('');
  }, [setSearchTerm]);

  const columns = useMemo(() => [
    { key: "type", title: "Leave Type" },
    { key: "appliedOn", title: "Applied on" },
    { key: "dateRange", title: "Date Range" },
    { key: "duration", title: "Duration" },
    { key: "status", title: "Status" },
    { 
      key: "action", 
      title: "Action",
      render: (item) => (
        <Link href={`/leave-details/${item.id}`} className="text-blue-600 hover:underline">
          View
        </Link>
      )
    }
  ], []);

  const recentLeaves = useMemo(() => 
    leavesData.slice(0, 5).map(leave => ({
      ...leave,
      action: { id: leave.id } // This will be used by the render function above
    }))
  , []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Dashboard Overview</h2>
          <p className="text-sm text-gray-600">
            Welcome back Paul, this is your leave overview
          </p>
        </div>
        <CustomButton 
          to="/request-leave" 
          icon={<Plus size={18} />} 
          text="Request Leave" 
        />
      </div>

      <SummaryCards />
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <UpcomingLeaves />
        <DashboardNotifications />
      </div>

      <div className="mb-6 bg-white rounded-lg shadow p-4">
        {/* <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-800">Recent Leave Requests</h3>
          <Link 
            href="/my-leaves" 
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View All
          </Link>
        </div> */}
        <Table
          columns={columns}
          data={recentLeaves}
          showRowNumbers={false}
          enablePagination={false}
          filterTabs={null}
          sortable={false}
          title="Leave History"
          titleClassName="text-blue-800 text-xl" 
          viewMoreLink={{ text: "View More", href: "/my-leaves"  }}
        />
      </div>
    </div>
  );
};

export default Dashboard;