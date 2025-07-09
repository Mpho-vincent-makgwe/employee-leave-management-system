export default function Notifications() {
  const notifications = [
    { id: 1, message: 'Your leave request has been approved', date: '2023-05-15', read: true },
    { id: 2, message: 'New company policy update available', date: '2023-05-10', read: false },
    { id: 3, message: 'Upcoming holiday: Labor Day on May 1', date: '2023-04-25', read: true },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Notifications</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <ul className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <li key={notification.id} className={`py-4 ${!notification.read ? 'bg-blue-50' : ''}`}>
              <div className="flex items-center justify-between">
                <p className={`text-sm ${notification.read ? 'text-gray-600' : 'font-medium text-gray-900'}`}>
                  {notification.message}
                </p>
                <p className="text-xs text-gray-500">{notification.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}