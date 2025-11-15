import React, { useState } from 'react';
import { Search, Edit, Trash2 } from 'lucide-react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminHeader from '../../../components/AdminHeader';

const PromotionList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const promotions = [
    { id: 1, title: 'Welcome Bonus 50%', description: 'Get 50% bonus on first deposit', startDate: '2025-01-01', endDate: '2025-12-31', status: 'Active' },
    { id: 2, title: 'Refer & Earn', description: 'Earn $100 for each referral', startDate: '2025-01-01', endDate: '2025-12-31', status: 'Active' },
    { id: 3, title: 'Trading Contest', description: 'Win prizes in monthly contest', startDate: '2025-06-01', endDate: '2025-06-30', status: 'Inactive' }
  ];

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">Promotion List</h1>

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
                  <th className="py-0.5 px-2 text-left font-semibold">ID</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Title</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Description</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Start Date</th>
                  <th className="py-0.5 px-2 text-left font-semibold">End Date</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Status</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {promotions.map((promo, index) => (
                  <tr key={promo.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="py-0.5 px-2">{promo.id}</td>
                    <td className="py-0.5 px-2">{promo.title}</td>
                    <td className="py-0.5 px-2">{promo.description}</td>
                    <td className="py-0.5 px-2">{promo.startDate}</td>
                    <td className="py-0.5 px-2">{promo.endDate}</td>
                    <td className="py-0.5 px-2 text-green-600">{promo.status}</td>
                    <td className="py-0.5 px-2">
                      <div className="flex gap-1">
                        <button className="text-violet-500 text-white px-2 py-0.5 rounded text-xs flex items-center gap-1">
                          <Edit className="w-3 h-3" /> Edit
                        </button>
                        <button className="text-violet-500 text-white px-2 py-0.5 rounded text-xs flex items-center gap-1">
                          <Trash2 className="w-3 h-3" /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 flex justify-between items-center border-t text-xs">
            <div>Showing 1 to {promotions.length} of {promotions.length} entries</div>
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

export default PromotionList;
