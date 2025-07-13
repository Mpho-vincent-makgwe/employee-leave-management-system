import NotificationCard from '../NotificationCard';

export default function NotificationPage() {
  const leaveRequests = [
    {
      status: "approved",
      title: "Leave Request Approved",
      message: "Your annual leave request for Dec 23–27 has been approved by your manager.",
      timeAgo: "2 hours ago",
    },
    {
      status: "pending",
      title: "Leave Request Pending",
      message: "Your leave request for Feb 3 is pending approval from HR department.",
      timeAgo: "1 day ago",
    },
    {
      status: "rejected",
      title: "Leave Request Rejected",
      message: "Your sick leave request for Jan 15 has been rejected. Please contact HR for details.",
      timeAgo: "1 day ago",
    },
    {
      status: "approved",
      title: "Leave Request Approved",
      message: "Your annual leave request for Dec 23–27 has been approved by your manager.",
      timeAgo: "2 hours ago",
    },
    {
      status: "pending",
      title: "Leave Request Pending",
      message: "Your leave request for Feb 3 is pending approval from HR department.",
      timeAgo: "1 day ago",
    },
    {
      status: "rejected",
      title: "Leave Request Rejected",
      message: "Your sick leave request for Jan 15 has been rejected. Please contact HR for details.",
      timeAgo: "1 day ago",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className=" mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800">Notification</h1>
          <p className="text-gray-600">Stay updated with your leave requests and approvals.</p>
        </div>

        {/* Notifications */}
        {/* Notifications Container */}
        <div className="bg-white justify-center items-center center  rounded-lg overflow-y-auto p-4 space-y-4">
            {leaveRequests.map((req, index) => (
            <NotificationCard key={index} {...req} />
            ))}
        </div>

      </div>
    </main>
  );
}
