import React, { useState } from 'react';
import { Search, Edit } from 'lucide-react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminHeader from '../../../components/AdminHeader';

const SubadminList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const subadmins = [
    { id: 1, name: 'Admin', email: 'subadmindemots@demo.com', password: 'Admin@23r4dni3@@#', type: 'Menu Wise', group: '', date: '2025-11-03' },
    { id: 2, name: 'Techysquad', email: 'tscompe@techysquad.com', password: 'T$@dmin#999', type: 'Menu Wise', group: '', date: '2025-11-04' },
    { id: 3, name: 'subadmin 1', email: 'subadmin1@demo.com', password: 'Demo@212213', type: 'MT5 Group Wise', group: '', date: '2025-11-06' },
    { id: 4, name: 'newtest', email: 'newtestdemo@demo.com', password: 'bceiew#@4', type: 'Menu Wise', group: '', date: '2025-11-06' }
  ];

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">Sub Admin List</h1>

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
                  <th className="py-0.5 px-2 text-left font-semibold">Name</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Email</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Password</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Type</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Group</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Date</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {subadmins.map((admin, index) => (
                  <tr key={admin.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="py-0.5 px-2">{admin.id}</td>
                    <td className="py-0.5 px-2">{admin.name}</td>
                    <td className="py-0.5 px-2">{admin.email}</td>
                    <td className="py-0.5 px-2">{admin.password}</td>
                    <td className="py-0.5 px-2">{admin.type}</td>
                    <td className="py-0.5 px-2">{admin.group || '-'}</td>
                    <td className="py-0.5 px-2">{admin.date}</td>
                    <td className="py-0.5 px-2">
                      <button className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs">
                        Edit Permission
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 flex justify-between items-center border-t text-xs">
            <div>Showing 1 to {subadmins.length} of {subadmins.length} entries</div>
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

export default SubadminList;
