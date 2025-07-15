import NotificationCard from "@/components/NotificationCard";
import { Bell } from "lucide-react";
import Link from "next/link";

export default function DashboardNotifications() {
  const leaveRequests = [
    {
      status: "approved",
      title: "Leave Request Approved",
      message:
        "Your annual leave request for Dec 23–27 has been approved by your manager.",
      timeAgo: "2 hours ago",
    },
    {
      status: "pending",
      title: "Leave Request Pending",
      message:
        "Your leave request for Feb 3 is pending approval from HR department.",
      timeAgo: "1 day ago",
    },
    {
      status: "rejected",
      title: "Leave Request Rejected",
      message:
        "Your sick leave request for Jan 15 has been rejected. Please contact HR for details.",
      timeAgo: "1 day ago",
    },
    {
      status: "approved",
      title: "Leave Request Approved",
      message:
        "Your annual leave request for Dec 23–27 has been approved by your manager.",
      timeAgo: "2 hours ago",
    },
    {
      status: "pending",
      title: "Leave Request Pending",
      message:
        "Your leave request for Feb 3 is pending approval from HR department.",
      timeAgo: "1 day ago",
    },
    {
      status: "rejected",
      title: "Leave Request Rejected",
      message:
        "Your sick leave request for Jan 15 has been rejected. Please contact HR for details.",
      timeAgo: "1 day ago",
    },
  ];

  const latestNotifications = leaveRequests.slice(0, 2);

  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-4">
      {/* Custom Heading */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl mb-4 flex items-center gap-2 text-gray-900">
          <span>
            <Bell />
          </span>{" "}
          Recent Notifications
        </h2>
      </div>

      {/* Notification Cards */}
      <div className="space-y-3">
        {latestNotifications.map((req, index) => (
          <NotificationCard key={index} {...req} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link
          href="/notifications"
          className="text-sm text-[#4F46E5] hover:underline mt-2"
        >
          View All Notifications
        </Link>
      </div>
    </div>
  );
}
