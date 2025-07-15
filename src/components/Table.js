"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaSort, FaSortUp, FaSortDown, FaSearch  } from "react-icons/fa";
import { useSearch } from '@/context/SearchContext';

const statusColors = {
  Approved: "text-green-500",
  Pending: "text-yellow-500",
  Rejected: "text-red-500",
};

const Table = ({
  title,
  subtitle,
  columns,
  data,
  limit,
  viewMoreLink,
  statusColorMap = statusColors,
  showRowNumbers = true,
  stripedRows = true,
  shadow = true,
  rounded = true,
  filterTabs = null,
  sortable = false,
}) => {
  const [currentLimit, setCurrentLimit] = useState(limit || data.length);
  const [activeTab, setActiveTab] = useState(filterTabs?.[0] || null);
  const [sortConfig, setSortConfig] = useState(null);
  const [filteredData, setFilteredData] = useState(data);
  const { searchTerm, setSearchHandler } = useSearch();

  // Set the search handler when component mounts
  useEffect(() => {
    setSearchHandler((term) => {
      let result = [...data];
      
      if (filterTabs && activeTab && activeTab !== "All") {
        result = result.filter(item => item.status === activeTab);
      }
      
      if (term) {
        const searchTerm = term.toLowerCase();
        result = result.filter(item => 
          columns.some(col => 
            String(item[col.key]).toLowerCase().includes(searchTerm)
        ));
      }
      
      if (sortConfig) {
        result.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      
      setFilteredData(result);
      setCurrentLimit(limit || result.length);
    });

    return () => setSearchHandler(() => () => {}); // Cleanup
  }, [data, activeTab, sortConfig, filterTabs, limit, columns, setSearchHandler]);

  const requestSort = (key) => {
    if (!sortable) return;
    
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (!sortConfig || sortConfig.key !== key) return <FaSort className="ml-1 opacity-30" />;
    return sortConfig.direction === 'ascending' 
      ? <FaSortUp className="ml-1" /> 
      : <FaSortDown className="ml-1" />;
  };

  return (
    <div className={`bg-gray-50 ${title || subtitle ? "p-6" : ""}`}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>}
          {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        </div>
      )}

      {/* Filter Tabs */}
      {filterTabs && (
        <div className="bg-white shadow mt-4 mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4 p-2">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded ${
                  activeTab === tab
                    ? "bg-[#4f46e5] text-white shadow"
                    : "bg-white text-gray-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Input */}
      {/* {searchable && (
        <div className="mb-4 relative max-w-md">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (onSearch) onSearch(e.target.value);
            }}
          />
        </div>
      )} */}

      <div className={`bg-white ${shadow ? "shadow" : ""} ${rounded ? "rounded-md" : ""} overflow-x-auto`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          {viewMoreLink?.text && (
            <h3 className="text-[#4f46e5] text-sm font-semibold">
              {viewMoreLink.text}
            </h3>
          )}
          
          {!showAllData && hasMoreData && (
            <button
              onClick={() => setCurrentLimit(currentLimit + (limit || 5))}
              className="text-[#4f46e5] text-sm font-medium hover:underline"
            >
              View More
            </button>
          )}
          
          {!showAllData && !hasMoreData && viewMoreLink?.href && (
            <Link
              href={viewMoreLink.href}
              className="text-[#4f46e5] text-sm font-medium hover:underline"
            >
              View All
            </Link>
          )}
        </div>

        <table className="min-w-full text-sm text-gray-700">
          <thead>
            <tr className="bg-white text-left">
              {showRowNumbers && <th className="px-6 py-3">#</th>}
              {columns.map((column) => (
                <th 
                  key={column.key} 
                  className="px-6 py-3"
                  onClick={() => sortable && requestSort(column.key)}
                >
                  <div className={`flex items-center ${sortable ? 'cursor-pointer hover:text-indigo-600' : ''}`}>
                    {column.title}
                    {sortable && getSortIcon(column.key)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${stripedRows && rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"} border-t border-gray-100`}
              >
                {showRowNumbers && (
                  <td className="px-6 py-4 text-gray-500">{rowIndex + 1}</td>
                )}
                {columns.map((column) => {
                  if (column.key === "status" && statusColorMap[row[column.key]]) {
                    return (
                      <td
                        key={`${rowIndex}-${column.key}`}
                        className={`px-6 py-4 ${statusColorMap[row[column.key]]}`}
                      >
                        {row[column.key]}
                      </td>
                    );
                  }
                  if (column.key === "action" && row[column.key]) {
                    return (
                      <td
                        key={`${rowIndex}-${column.key}`}
                        className="px-6 py-4 text-indigo-500 font-medium"
                      >
                        <Link
                          href={row[column.key].link}
                          className="hover:underline"
                        >
                          {row[column.key].text || "View"}
                        </Link>
                      </td>
                    );
                  }
                  return (
                    <td key={`${rowIndex}-${column.key}`} className="px-6 py-4">
                      {row[column.key]}
                    </td>
                  );
                })}
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length + (showRowNumbers ? 1 : 0)}
                  className="text-center py-6 text-gray-400"
                >
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;