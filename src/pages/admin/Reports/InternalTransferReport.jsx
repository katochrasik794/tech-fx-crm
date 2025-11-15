import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminHeader from '../../../components/AdminHeader';

const InternalTransferReport = () => {
  const [fromDate, setFromDate] = useState('2025-11-13');
  const [toDate, setToDate] = useState('2025-11-13');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Filter:', { fromDate, toDate });
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">Internal Transfer Report</h1>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex gap-4 items-end">
            <div>
              <label className="block text-xs mb-1">From :</label>
              <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="border border-gray-300 rounded px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="block text-xs mb-1">To :</label>
              <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className="border border-gray-300 rounded px-2 py-1.5 text-sm" />
            </div>
            <button type="submit" className="text-violet-500 text-white px-4 py-1.5 rounded text-sm">Submit</button>
          </div>
        </form>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded shadow p-6 text-center">
            <div className="text-3xl font-bold mb-2">0</div>
            <div className="text-sm text-gray-600 border-t border-orange-500 pt-2">Total Transfers</div>
          </div>
          <div className="bg-white rounded shadow p-6 text-center">
            <div className="text-3xl font-bold mb-2">0</div>
            <div className="text-sm text-gray-600 border-t border-orange-500 pt-2">Total Amount</div>
          </div>
        </div>

        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-y border-black bg-gray-50">
                <th className="py-0.5 px-2 text-left font-semibold">ID</th>
                <th className="py-0.5 px-2 text-left font-semibold">User Name</th>
                <th className="py-0.5 px-2 text-left font-semibold">From MT5 ID</th>
                <th className="py-0.5 px-2 text-left font-semibold">To MT5 ID</th>
                <th className="py-0.5 px-2 text-left font-semibold">Amount</th>
                <th className="py-0.5 px-2 text-left font-semibold">Comment</th>
                <th className="py-0.5 px-2 text-left font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="7" className="py-4 px-2 text-center text-gray-500">No data available</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InternalTransferReport;
