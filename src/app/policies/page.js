export default function Policies() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Company Policies</h1>
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <div>
          <h2 className="text-lg font-medium">Leave Policy</h2>
          <p className="text-gray-600 mt-2">Details about leave entitlements and procedures...</p>
        </div>
        <div>
          <h2 className="text-lg font-medium">Attendance Policy</h2>
          <p className="text-gray-600 mt-2">Rules regarding work hours and attendance...</p>
        </div>
      </div>
    </div>
  );
}