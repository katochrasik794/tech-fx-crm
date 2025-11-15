import React, { useState } from 'react';
import { Search, FileDown } from 'lucide-react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminHeader from '../../../components/AdminHeader';

const SlaveCopierRequest = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const data = [];

  const handleApprove = (id) => {
    console.log('Approve:', id);
  };

  const handleReject = (id) => {
    console.log('Reject:', id);
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
      <h1 className="text-lg font-bold mb-4">Slave Copier Request</h1>

      <div className="bg-white rounded shadow">
        <div className="p-4 flex justify-between items-center border-b">
          <div className="flex items-center gap-1.5 text-xs">
            <span>Show</span>
            <select
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(Number(e.target.value))}
              className="border border-gray-300 rounded px-1.5 py-0.5"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span>entries</span>
            <button className="ml-2 bg-orange-500 text-white px-3 py-1 rounded text-xs flex items-center gap-1">
              <FileDown className="w-3 h-3" />
              Excel
            </button>
          </div>

          <div className="relative">
            <Search className="w-4 h-4 absolute left-2 top-1.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded pl-8 pr-2 py-1 text-xs w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-y border-black bg-gray-50">
                <th className="py-0.5 px-2 text-left font-semibold">ID</th>
                <th className="py-0.5 px-2 text-left font-semibold">Name</th>
                <th className="py-0.5 px-2 text-left font-semibold">Email</th>
                <th className="py-0.5 px-2 text-left font-semibold">User Type</th>
                <th className="py-0.5 px-2 text-left font-semibold">Registration Date</th>
                <th className="py-0.5 px-2 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-4 px-2 text-center text-gray-500">
                    No data available in table
                  </td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="py-0.5 px-2">{item.id}</td>
                    <td className="py-0.5 px-2">{item.name}</td>
                    <td className="py-0.5 px-2">{item.email}</td>
                    <td className="py-0.5 px-2">{item.userType}</td>
                    <td className="py-0.5 px-2">{item.registrationDate}</td>
                    <td className="py-0.5 px-2">
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleApprove(item.id)}
                          className="bg-green-500 text-white px-2 py-0.5 rounded text-xs"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(item.id)}
                          className="bg-red-500 text-white px-2 py-0.5 rounded text-xs"
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="p-4 flex justify-between items-center border-t text-xs">
          <div>
            Showing 0 to 0 of 0 entries
          </div>
          <div className="flex gap-1">
            <button
              disabled
              className="px-3 py-1 border border-gray-300 rounded bg-gray-100 text-gray-400"
            >
              Previous
            </button>
            <button
              disabled
              className="px-3 py-1 border border-gray-300 rounded bg-gray-100 text-gray-400"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SlaveCopierRequest;
