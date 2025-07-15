"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { useSearch } from '@/context/SearchContext';

const Table = ({
  title,
  subtitle,
  columns,
  data,
  limit,
  viewMoreLink,
  statusColorMap = {
    Approved: "text-green-500",
    Pending: "text-yellow-500",
    Rejected: "text-red-500"
  },
  showRowNumbers = true,
  stripedRows = true,
  shadow = true,
  rounded = true,
  filterTabs = null,
  sortable = false,
  enablePagination = false, // New prop to enable pagination
}) => {
  const [currentLimit, setCurrentLimit] = useState(limit || data.length);
  const [activeTab, setActiveTab] = useState(filterTabs?.[0] || null);
  const [sortConfig, setSortConfig] = useState(null);
  const [filteredData, setFilteredData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1); // New state for pagination
  const { searchTerm, setSearchHandler } = useSearch();

  const itemsPerPage = 5;
  const showAllData = !limit;
  const hasMoreData = filteredData.length > currentLimit;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  
  // Calculate display data based on pagination or view more
  const displayData = enablePagination 
    ? filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : showAllData 
      ? filteredData 
      : filteredData.slice(0, currentLimit);

  useEffect(() => {
    // Initialize with all data
    setFilteredData(data);
    setCurrentPage(1); // Reset to first page when data changes
  }, [data]);

  useEffect(() => {
    const handler = (term = '') => {
      let result = [...data];
      
      // Apply tab filtering if active
      if (filterTabs && activeTab && activeTab !== "All") {
        result = result.filter(item => item.status === activeTab);
      }
      
      // Apply search if term exists
      if (term) {
        const searchTerm = String(term).toLowerCase();
        result = result.filter(item => 
          columns.some(col => {
            const value = item[col.key];
            return value !== undefined && 
                   value !== null && 
                   String(value).toLowerCase().includes(searchTerm);
          })
        );
      }
      
      // Apply sorting if configured
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
      setCurrentPage(1); // Reset to first page when filtering changes
    };

    // Set the handler
    setSearchHandler(() => handler);
    
    // Apply initial filtering
    handler(searchTerm);

    return () => setSearchHandler(() => () => {});
  }, [data, activeTab, sortConfig, filterTabs, limit, columns, searchTerm, setSearchHandler]);

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={`bg-gray-50 ${title || subtitle ? "p-6" : ""}`}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>}
          {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        </div>
      )}

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

      <div className={`bg-white ${shadow ? "shadow" : ""} ${rounded ? "rounded-md" : ""} overflow-x-auto`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          {viewMoreLink?.text && !enablePagination && (
            <h3 className="text-[#4f46e5] text-sm font-semibold">
              {viewMoreLink.text}
            </h3>
          )}
          
          {!showAllData && !enablePagination && hasMoreData && (
            <button
              onClick={() => setCurrentLimit(currentLimit + (limit || 5))}
              className="text-[#4f46e5] text-sm font-medium hover:underline"
            >
              View More
            </button>
          )}
          
          {!showAllData && !enablePagination && !hasMoreData && viewMoreLink?.href && (
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
                  <td className="px-6 py-4 text-gray-500">
                    {enablePagination 
                      ? (currentPage - 1) * itemsPerPage + rowIndex + 1 
                      : rowIndex + 1}
                  </td>
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

        {/* Pagination controls */}
        {enablePagination && totalPages > 1 && (
          <div className="flex justify-between items-center p-4 border-t border-gray-100">
            <div>
              <span className="text-sm text-gray-600">
                Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
                {Math.min(currentPage * itemsPerPage, filteredData.length)} of{' '}
                {filteredData.length} entries
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-md ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-[#4f46e5] text-white hover:bg-indigo-700'
                }`}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === page
                      ? 'bg-[#4f46e5] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-md ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-[#4f46e5] text-white hover:bg-indigo-700'
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;