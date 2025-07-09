import { FaBell, FaSearch } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm h-16 fixed top-0 right-0 left-64 z-10 border-b border-gray-200">
      <div className="flex items-center justify-end h-full px-6 gap-6">
        <div className="relative flex-1 max-w-2xl">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button className="p-1.5 rounded-full hover:bg-gray-100 transition-colors">
              <FaBell className="text-lg text-gray-500" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
              P
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}