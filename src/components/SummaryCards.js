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
          className="w-full h-[124px] p-4 border-[0.4px] border-gray-200 rounded-[8px] bg-white flex flex-col sm:flex-row items-center gap-[10px] shadow"
        >
          {/* Icon */}
          <div className="w-[40px] h-[40px] bg-indigo-600 rounded-full flex items-center justify-center">
            {item.icon}
          </div>

          {/* Text Block */}
          <div className="text-center sm:text-left">
            {/* Label */}
            <div className="text-[10px] font-normal leading-[16px] text-gray-600 w-[110px] h-[16px] mb-1">
              {item.label}
            </div>

            {/* Value */}
            <div className="w-[110px] h-[24px] text-[20px] font-semibold leading-[32px] text-[#3A3A3C]">
              {item.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SummaryCards;
