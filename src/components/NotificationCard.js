import { CheckCircle, Clock, XCircle } from 'lucide-react';

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
    <div className={`flex justify-between items-start p-4 rounded-lg border ${styles.border} bg-white shadow-sm`}>
      <div className="flex items-start gap-3">
        {styles.icon}
        <div>
          <h4 className="text-md text-black font-semibold">{title}</h4>
          <p className="text-sm text-gray-600">{message}</p>
        </div>
      </div>
      <span className="text-sm text-gray-400 whitespace-nowrap">{timeAgo}</span>
    </div>
  );
};

export default NotificationCard;
