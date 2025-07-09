export default function Profile() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-xl font-medium text-gray-600">P</span>
          </div>
          <div>
            <h2 className="text-lg font-medium">Paul</h2>
            <p className="text-gray-600">Employee</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="mt-1 text-sm text-gray-900">paul@example.com</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Department</label>
            <p className="mt-1 text-sm text-gray-900">Engineering</p>
          </div>
        </div>
      </div>
    </div>
  );
}