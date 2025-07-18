import { CheckCircle, Clock, XCircle } from "lucide-react";

const statusStyles = {
  approved: {
    icon: <CheckCircle className="text-green-500 w-6 h-6" />,
    border: "border-green-100",
  },
  pending: {
    icon: <Clock className="text-yellow-500 w-6 h-6" />,
    border: "border-yellow-100",
  },
  rejected: {
    icon: <XCircle className="text-red-500 w-6 h-6" />,
    border: "border-red-100",
  },
};

const NotificationCard = ({ status, title, message, timeAgo }) => {
  const styles = statusStyles[status];

  return (
    <div className="flex justify-between items-start w-[1046px] h-[106px] px-4 py-8 border-[0.6px] border-[#D0D5DD] rounded-[4px] bg-white gap-3 shadow-sm">
      <div className="flex items-start gap-[12px]">
        {styles.icon}
        <div>
          <h4 className="w-[249px] h-[22px] text-[14px] leading-[22px] font-semibold text-[#2C2C2E]">
            {title}
          </h4>
          <p className="w-[570px] h-[24px] text-[12px] leading-[20px] font-normal text-[#2C2C2E]">
            {message}
          </p>
        </div>
      </div>
      <span className="text-[12px] text-gray-400 whitespace-nowrap">
        {timeAgo}
      </span>
    </div>
  );
};

export default NotificationCard;
