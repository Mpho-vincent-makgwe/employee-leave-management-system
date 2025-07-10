import { FaBell, FaSearch } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm h-16 fixed top-0 right-0 left-64 z-10 border-b border-gray-200">
      <div className="flex items-center justify-between h-full px-6">
        {/* Left: Search input */}
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <FaSearch className="text-sm" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Right: Notification + Profile */}
        <div className="flex items-center gap-6">
          {/* Notification icon */}
          <div className="relative">
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <FaBell className="text-gray-500 text-lg" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </div>

          {/* Profile circle */}
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-sm font-semibold text-indigo-600">
            P
          </div>
        </div>
      </div>
    </header>
  );
}
