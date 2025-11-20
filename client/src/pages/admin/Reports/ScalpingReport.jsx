import React, { useState } from 'react';
import { Search } from 'lucide-react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminHeader from '../../../components/AdminHeader';
import { useSearchParams } from 'react-router-dom';

const ScalpingReport = () => {
  const [searchParams] = useSearchParams();
  const login = searchParams.get('login') || '100007689';
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const data = [
    { login: '100007689', date: '2025-06-13', ticket: '9396845', symbol: 'AUDUSD.fix', price: '0.64862', profit: '-3.3', volume: '0.1', entry: 'OUT' },
    { login: '100007689', date: '2025-06-13', ticket: '9396846', symbol: 'EURCHF.fix', price: '0.93627', profit: '-6.27', volume: '0.3', entry: 'OUT' },
    { login: '100007689', date: '2025-06-13', ticket: '9396847', symbol: 'EURGBP.fix', price: '0.84989', profit: '-1.08', volume: '0.2', entry: 'OUT' },
    { login: '100007689', date: '2025-06-13', ticket: '9396849', symbol: 'EURUSD.fix', price: '1.15019', profit: '8.1', volume: '0.15', entry: 'OUT' },
    { login: '100007689', date: '2025-06-13', ticket: '9396850', symbol: 'EURUSD.fix', price: '1.15022', profit: '6', volume: '0.3', entry: 'OUT' },
    { login: '100007689', date: '2025-06-13', ticket: '9396851', symbol: 'GBPUSD.fix', price: '1.35335', profit: '-6.3', volume: '0.15', entry: 'OUT' },
    { login: '100007689', date: '2025-06-13', ticket: '9396852', symbol: 'NZDUSD.fix', price: '0.59973', profit: '0.2', volume: '0.1', entry: 'OUT' },
    { login: '100007689', date: '2025-06-13', ticket: '9396853', symbol: 'USDCHF.fix', price: '0.81394', profit: '4.79', volume: '0.15', entry: 'OUT' },
    { login: '100007689', date: '2025-06-13', ticket: '9396854', symbol: 'USDCHF.fix', price: '0.81386', profit: '-15.85', volume: '0.3', entry: 'OUT' },
    { login: '100007689', date: '2025-06-13', ticket: '9396855', symbol: 'USDJPY.fix', price: '144.347', profit: '-1.77', volume: '0.15', entry: 'OUT' }
  ];

  const totalProfit = data.reduce((sum, item) => sum + parseFloat(item.profit), 0).toFixed(2);
  const totalVolume = data.reduce((sum, item) => sum + parseFloat(item.volume), 0).toFixed(1);

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">Scalping Report</h1>

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
              <button className="ml-2 text-violet-500 text-white px-3 py-1 rounded text-xs">Excel</button>
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
                  <th className="py-0.5 px-2 text-left font-semibold">Date</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Ticket</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Symbol</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Price</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Profit</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Volume</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Entry</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="py-0.5 px-2">{item.login}</td>
                    <td className="py-0.5 px-2">{item.date}</td>
                    <td className="py-0.5 px-2">{item.ticket}</td>
                    <td className="py-0.5 px-2">{item.symbol}</td>
                    <td className="py-0.5 px-2">{item.price}</td>
                    <td className="py-0.5 px-2">{item.profit}</td>
                    <td className="py-0.5 px-2">{item.volume}</td>
                    <td className="py-0.5 px-2">{item.entry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 flex justify-between items-center border-t text-xs">
            <div className="flex gap-4">
              <div>Showing 1 to 10 of 10 entries</div>
              <div>Profit = {totalProfit}</div>
              <div>Volume = {totalVolume}</div>
            </div>
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

export default ScalpingReport;
