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
import { useEffect } from 'react';

const Dashboard = () => {
  const { setSearchTerm } = useSearch();

  useEffect(() => {
    setSearchTerm('');
    return () => setSearchTerm('');
  }, [setSearchTerm]);

  const columns = [
    { key: "type", title: "Leave Type" },
    { key: "appliedOn", title: "Applied on" },
    { key: "dateRange", title: "Date Range" },
    { key: "status", title: "Status" }
  ];

  const recentLeaves = leavesData.slice(0, 5); // Show only 5 most recent leaves

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

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">My Recent Leaves</h3>
          <Link 
            href="/my-leaves" 
            className="text-[#4f46e5] text-sm font-medium hover:underline"
          >
            View All Leaves
          </Link>
          {/* <CustomButton 
          to="/my-leaves" 
          icon={<Plus size={18} />} 
          text="Request Leave" 
        /> */}
        </div>
        <Table
          columns={columns}
          data={recentLeaves}
          showRowNumbers={false}
          viewMoreLink={{ href: "/my-leaves", text: "Leaves History" }}
          enablePagination={false}
          filterTabs={null}
          sortable={false}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <UpcomingLeaves />
        <DashboardNotifications />
      </div>
    </div>
  );
};

export default Dashboard;