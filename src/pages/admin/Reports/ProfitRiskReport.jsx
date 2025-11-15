import React, { useState } from 'react';
import { Search } from 'lucide-react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminHeader from '../../../components/AdminHeader';

const ProfitRiskReport = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const data = [
    { name: 'Demo user', login: '100007814', balance: 0, credit: 0, equityPrevDay: 0, equity: 0, floating: 0, netDeposit: 0, currentProfit: 0, totalProfit: 0 },
    { name: 'Demo User', login: '100007798', balance: 0, credit: 0, equityPrevDay: 0, equity: 0, floating: 0, netDeposit: 0, currentProfit: 0, totalProfit: 0 },
    { name: 'Maira', login: '100007817', balance: 0, credit: 0, equityPrevDay: 0, equity: 0, floating: 0, netDeposit: 0, currentProfit: 0, totalProfit: 0 },
    { name: 'Maira', login: '100007816', balance: 3230, credit: 0, equityPrevDay: 3230, equity: 3230, floating: 0, netDeposit: 3230, currentProfit: 0, totalProfit: 0 },
    { name: 'Techysquad', login: '100007802', balance: 0, credit: 0, equityPrevDay: 0, equity: 0, floating: 0, netDeposit: 0, currentProfit: 0, totalProfit: 0 }
  ];

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">Risk Management Profit Record</h1>

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
                  <th className="py-0.5 px-2 text-left font-semibold">Name</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Login</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Balance</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Credit</th>
                  <th className="py-0.5 px-2 text-left font-semibold">EquityPrevDay</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Equity</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Floating</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Net Deposit</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Current Profit</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Total Profit</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="py-0.5 px-2">{item.name}</td>
                    <td className="py-0.5 px-2">{item.login}</td>
                    <td className="py-0.5 px-2">{item.balance}</td>
                    <td className="py-0.5 px-2">{item.credit}</td>
                    <td className="py-0.5 px-2">{item.equityPrevDay}</td>
                    <td className="py-0.5 px-2">{item.equity}</td>
                    <td className="py-0.5 px-2">{item.floating}</td>
                    <td className="py-0.5 px-2">{item.netDeposit}</td>
                    <td className="py-0.5 px-2">{item.currentProfit}</td>
                    <td className="py-0.5 px-2">{item.totalProfit}</td>
                    <td className="py-0.5 px-2">
                      <div className="flex flex-col gap-1">
                        <button className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs">Open Positions</button>
                        <button className="bg-yellow-400 text-black px-2 py-0.5 rounded text-xs">Close Deals</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 flex justify-between items-center border-t text-xs">
            <div>Showing 1 to 5 of 5 entries</div>
            <div className="flex gap-1">
              <button disabled className="px-3 py-1 border border-gray-300 rounded bg-gray-100 text-gray-400">Previous</button>
              <button className="px-3 py-1 border border-gray-300 rounded bg-orange-500 text-white">1</button>
              <button disabled className="px-3 py-1 border border-gray-300 rounded bg-gray-100 text-gray-400">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitRiskReport;
