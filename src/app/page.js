"use client";

import SummaryCards from "@/components/SummaryCards";
import UpcomingLeaves from "@/components/UpcomingLeaves";
import DashboardNotifications from "@/components/DashboardNotifications";
import CustomButton from "@/components/Buttons/CustomButton";
import { Plus } from "lucide-react";
import Table from "@/components/Table";
import Link from "next/link";
import leavesData from "./data/leavesData";
import { useSearch } from "@/context/SearchContext";
import { useEffect, useMemo } from "react";
import Heading from "@/components/Heading";
import { useUser } from "@/context/UserContext";

const Dashboard = () => {
  const { setSearchTerm } = useSearch();
  const { user, loading } = useUser();

  useEffect(() => {
    setSearchTerm("");
    return () => setSearchTerm("");
  }, [setSearchTerm]);

  const columns = useMemo(
    () => [
      { key: "type", title: "Leave Type" },
      { key: "appliedOn", title: "Applied on" },
      { key: "dateRange", title: "Date Range" },
      { key: "duration", title: "Duration" },
      { key: "status", title: "Status" },
      {
        key: "action",
        title: "Action",
        render: (item) => (
          <Link
            href={`/leave-details/${item.id}`}
            className="text-blue-600 hover:underline"
          >
            View
          </Link>
        ),
      },
    ],
    []
  );

  const recentLeaves = useMemo(
    () =>
      leavesData.slice(0, 5).map((leave) => ({
        ...leave,
        action: { id: leave.id }, // This will be used by the render function above
      })),
    []
  );

  if (loading) {
    return (
      <header className="bg-white shadow-sm h-16 fixed top-0 right-0 left-0 lg:left-64 z-10 border-b border-gray-200">
        <div className="flex items-center justify-between h-full px-4 lg:px-6 w-full">
          {/* Loading skeleton */}
          <div className="animate-pulse flex items-center space-x-4">
            <div className="rounded-full bg-gray-200 h-8 w-8"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
      </header>
    );
  }
  return (
    <div className="bg-gray-100">
      <div className="flex justify-between items-center">
        <div>
          <Heading
            title="Dashboard"
            subtitle="Welcome back {`${user.name}`}, this is your leave overview"
          />
        </div>
        <CustomButton
          to="/request-leave"
          icon={<Plus size={18} />}
          text="Request Leave"
        />
      </div>

      <SummaryCards />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="md:col-span-1">
          <UpcomingLeaves />
        </div>
        <div className="md:col-span-2">
          <DashboardNotifications />
        </div>
      </div>

      <div className="mb-6 bg-white rounded-lg shadow p-4">
        <Table
          columns={columns}
          data={recentLeaves}
          showRowNumbers={false}
          enablePagination={false}
          filterTabs={null}
          sortable={false}
          title="Leave History"
          titleClassName="text-blue-800 text-xl"
          viewMoreLink={{ text: "View More", href: "/my-leaves" }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
