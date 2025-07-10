"use client";
import { useState } from 'react';

export default function LeaveRequestForm() {
  const [formData, setFormData] = useState({
    leaveType: 'Personal Leave',
    duration: '5 days',
    startDate: '',
    endDate: '',
    reason: 'ftt',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div>

    <div>
          <h2 className="text-2xl font-semibold text-gray-800">My Leaves</h2>
          <p className="text-sm text-gray-600">
            View and manage your leave requests.
          </p>
        </div>
    <div className=" mx-auto p-8 pt-8 mt-8 bg-white shadow rounded-md">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
        {/* Leave Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Leave Type</label>
          <select
            name="leaveType"
            value={formData.leaveType}
            onChange={handleChange}
            className="w-full border rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option>Personal Leave</option>
            <option>Sick Leave</option>
            <option>Vacation</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full border rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full border rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* End Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full border rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Reason for Leave */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Leave</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            rows="4"
            className="w-full border rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-start">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}
