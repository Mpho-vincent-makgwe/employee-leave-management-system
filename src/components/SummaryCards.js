import { Users, BadgeCheck, CircleEllipsis, FolderX } from "lucide-react";
import leavesData from "@/app/data/leavesData";
const SummaryCards = () => {
  const approved = leavesData.filter((l) => l.status === "Approved").length;
  const pending = leavesData.filter((l) => l.status === "Pending").length;
  const rejected = leavesData.filter((l) => l.status === "Rejected").length;
  const total = leavesData.length;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {[
        {
          label: "Annual Leave",
          value: total,
          icon: <Users className="w-6 h-6 text-white" />,
        },
        {
          label: "Approved",
          value: approved,
          icon: <BadgeCheck className="w-6 h-6 text-white" />,
        },
        {
          label: "Pending",
          value: pending,
          icon: <CircleEllipsis className="w-6 h-6 text-white" />,
        },
        {
          label: "Rejected",
          value: rejected,
          icon: <FolderX className="w-6 h-6 text-white" />,
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-10 shadow flex flex-col sm:flex-row items-center gap-8"
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
            {item.icon}
          </div>
          <div className="text-center sm:text-left">
            <div className="text-sm text-gray-600 mb-2">{item.label}</div>
            <div className="text-2xl font-bold text-[#3A3A3C]">
              {item.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SummaryCards;
