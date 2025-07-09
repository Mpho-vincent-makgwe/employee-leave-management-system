export default function Holidays() {
  const holidays = [
    { date: '2023-01-01', name: 'New Year' },
    { date: '2023-04-07', name: 'Good Friday' },
    { date: '2023-04-10', name: 'Easter Monday' },
    { date: '2023-05-01', name: 'Labor Day' },
    { date: '2023-12-25', name: 'Christmas' },
    { date: '2023-12-26', name: 'Boxing Day' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Company Holidays</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <ul className="divide-y divide-gray-200">
          {holidays.map((holiday, index) => (
            <li key={index} className="py-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">{holiday.name}</p>
                <p className="text-sm text-gray-500">{holiday.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}