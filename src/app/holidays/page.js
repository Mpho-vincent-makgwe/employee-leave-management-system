"use client";

import Table from "@/components/Table";
import holidayData from "../data/holidayData";

const Holidays = () => {
  const columns = [
    { key: "holidayName", title: "Holiday Name" },
    { key: "type", title: "Type" },
    { key: "date", title: "Date" },
    { key: "dayOfWeek", title: "Day of the Week" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Holidays</h2>
        <p className="text-sm text-gray-600 mb-4">
          Manage public holidays and company-specific holidays
        </p>
        <Table
          columns={columns}
          data={holidayData}
          viewMoreLink={{ text: "Holiday List" }}
        />
      </div>
    </div>
  );
};

export default Holidays;