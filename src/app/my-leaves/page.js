export default function MyLeaves() {
  const leaves = [
    { id: 1, type: 'Annual', start: '2023-06-01', end: '2023-06-05', status: 'Approved' },
    { id: 2, type: 'Sick', start: '2023-07-10', end: '2023-07-11', status: 'Approved' },
    { id: 3, type: 'Personal', start: '2023-08-15', end: '2023-08-16', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Leaves</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leaves.map((leave) => (
              <tr key={leave.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{leave.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{leave.start}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{leave.end}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    leave.status === 'Approved' ? 'bg-green-100 text-green-800' :
                    leave.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {leave.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}