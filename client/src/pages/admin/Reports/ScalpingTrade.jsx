import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminHeader from '../../../components/AdminHeader';

const ScalpingTrade = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const data = [
    { login: '100007689', totalLots: 1.9, scalpingLots: 1.9, netLot: 0 },
    { login: '100007690', totalLots: 7.8, scalpingLots: 2.8, netLot: 5 }
  ];

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">Scalping Data</h1>

        <div className="bg-white rounded shadow">
          <div className="p-4 flex justify-between items-center border-b">
            <div className="flex items-center gap-1.5 text-xs">
              <span>Show</span>
              <select value={entriesPerPage} onChange={(e) => setEntriesPerPage(Number(e.target.value))} className="border border-gray-300 rounded px-1.5 py-0.5">
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span>entries</span>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-2 top-1.5 text-gray-400" />
              <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="border border-gray-300 rounded pl-8 pr-2 py-1 text-xs w-64" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-y border-black bg-gray-50">
                  <th className="py-0.5 px-2 text-left font-semibold">Login</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Total Lots</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Scalping Lots</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Net Lot</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="py-0.5 px-2">{item.login}</td>
                    <td className="py-0.5 px-2">{item.totalLots}</td>
                    <td className="py-0.5 px-2">{item.scalpingLots}</td>
                    <td className="py-0.5 px-2">{item.netLot}</td>
                    <td className="py-0.5 px-2">
                      <button 
                        onClick={() => navigate(`/admin/risk/scalping-report?login=${item.login}`)}
                        className="text-violet-500 text-white px-3 py-1 rounded text-xs"
                      >
                        View Full Scalping Report
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 flex justify-between items-center border-t text-xs">
            <div>Showing 1 to 2 of 2 entries</div>
            <div className="flex gap-1">
              <button disabled className="px-3 py-1 border border-gray-300 rounded bg-gray-100 text-gray-400">Previous</button>
              <button className="px-3 py-1 border border-gray-300 rounded text-violet-500 text-white">1</button>
              <button disabled className="px-3 py-1 border border-gray-300 rounded bg-gray-100 text-gray-400">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScalpingTrade;
