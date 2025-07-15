import SummaryCards from "@/components/SummaryCards";
import NotificationPage from "@/components/PageComponents/NotificationPage";
import MyLeaves from "./my-leaves/page";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Dashboard Overview</h2>
          <p className="text-sm text-gray-600">
            Welcome back Paul, this is your leave overview
          </p>
        </div>
        <Link href="/request-leave" className="inline-block">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            + Request Leave
          </button>
        </Link>
      </div>

      {/* Summary Cards */}
      <SummaryCards />
    </div>
  );
};

export default Dashboard;
