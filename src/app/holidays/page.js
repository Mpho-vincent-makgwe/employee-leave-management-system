"use client";

import Table from "@/components/Table";
import holidayData from "../data/holidayData";
import { useEffect } from "react";
import { useSearch } from "@/context/SearchContext";
import Heading from "@/components/Heading";

const Holidays = () => {
  const columns = [
    { key: "holidayName", title: "Holiday Name" },
    { key: "type", title: "Type" },
    { key: "date", title: "Date" },
    { key: "dayOfWeek", title: "Day of the Week" },
  ];

  const { setSearchTerm } = useSearch();

  useEffect(() => {
    setSearchTerm("");
    return () => setSearchTerm("");
  }, [setSearchTerm]);

  return (
    <div className="bg-gray-100">
      <div>
        <Heading
          title="Holidays"
          subtitle=" Manage public holidays and company-specific holidays"
        />
        <Table
          columns={columns}
          data={holidayData}
          title="Holidays"
          titleClassName="text-[#4F46E5]" // Custom title styling
          // subtitle="Manage public holidays and company-specific holidays"
          viewMoreLink={{ text: "Holiday List" }}
          enablePagination={holidayData.length > 5}
        />
      </div>
    </div>
  );
};

export default Holidays;
