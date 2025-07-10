"use client";

import holidayData from "../data/holidayData";

const Holidays = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Holidays</h2>
        <p className="text-sm text-gray-600 mb-4">
          Manage public holidays and company-specific holidays
        </p>
        <div className="bg-white shadow rounded-md overflow-x-auto">
          <table className="min-w-full text-sm text-gray-700">
            <thead>
              <tr className="bg-white text-left">
                <th className="px-6 py-3">Holiday Name</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Day of the Week</th>
              </tr>
            </thead>
            <tbody>
              {holidayData.map((holiday, index) => (
                <tr key={index} className="border-t border-gray-100">
                  <td className="px-6 py-4">{holiday.holidayName}</td>
                  <td className="px-6 py-4">{holiday.type}</td>
                  <td className="px-6 py-4">{holiday.date}</td>
                  <td className="px-6 py-4">{holiday.dayOfWeek}</td>
                </tr>
              ))}
              {holidayData.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-400">
                    No holiday data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Holidays;
