import React, { useState } from 'react';
import { Search, Edit, Trash2 } from 'lucide-react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminHeader from '../../../components/AdminHeader';

const RewardsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const rewards = [
    { id: 1, title: 'WSJ, Barron\'s & MarketWatch Bundle', image: '', description: 'Unlock the full potential of your trading and investment strategies...', targetedLot: 70, withdrawType: 'voucher', category: 'Subscriptions', amount: '', status: 'Active' },
    { id: 2, title: 'Stay ahead in finance with a MarketWatch 1-Year Digital Subscription', image: '', description: 'The MarketWatch 1-Year Digital Subscription gives you full access...', targetedLot: 30, withdrawType: 'voucher', category: 'Subscriptions', amount: '', status: 'Active' },
    { id: 3, title: 'Barron\'s 1-Year Subscription', image: '', description: 'A Barron\'s 1-Year Digital Subscription provides access to expert analysis...', targetedLot: 35, withdrawType: 'voucher', category: 'Subscriptions', amount: '', status: 'Active' },
    { id: 4, title: 'Upgrade your productivity with Redmi Pad Pro', image: '', description: 'Take your work and entertainment wherever you go with the Redmi Pad Pro...', targetedLot: 1050, withdrawType: 'voucher', category: 'Electronics', amount: '', status: 'Active' },
    { id: 5, title: 'Apple Watch series 10', image: '', description: 'Step into the future of personal technology with the Apple Watch Series 10...', targetedLot: 1860, withdrawType: 'voucher', category: 'Electronics', amount: '', status: 'Active' },
    { id: 6, title: 'iPhone 16 128 GB', image: '', description: 'Experience the next level of innovation with the iPhone 16...', targetedLot: 2800, withdrawType: 'voucher', category: 'Electronics', amount: '', status: 'Active' },
    { id: 7, title: 'Pizza Hut e-gift card ₹100', image: '', description: 'Known for its cheesy, mouth-watering pizzas...', targetedLot: 3, withdrawType: 'voucher', category: 'Food', amount: '', status: 'Active' },
    { id: 8, title: 'KFC digital gift card ₹250', image: '', description: 'Finger-licking chicken is just a few traded lots away...', targetedLot: 6, withdrawType: 'voucher', category: 'Food', amount: '', status: 'Active' },
    { id: 9, title: 'Domino\'s e-gift card ₹250', image: '', description: 'Treat yourself to the irresistible taste of Domino\'s...', targetedLot: 6, withdrawType: 'voucher', category: 'Food', amount: '', status: 'Active' },
    { id: 10, title: 'Apple Watch series 10', image: '', description: 'Step into the future of personal technology with the Apple Watch Series 10...', targetedLot: 1860, withdrawType: 'voucher', category: 'Electronics', amount: '5000', status: 'In Active' }
  ];

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">Rewards List</h1>

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
                  <th className="py-0.5 px-2 text-left font-semibold">Image</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Description</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Targeted Lot</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Withdraw Type</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Category</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Amount (For Wallet Withdraw Type)</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Status</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {rewards.map((reward, index) => (
                  <tr key={reward.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="py-0.5 px-2">{reward.id}</td>
                    <td className="py-0.5 px-2">{reward.title}</td>
                    <td className="py-0.5 px-2">{reward.image || '-'}</td>
                    <td className="py-0.5 px-2">{reward.description}</td>
                    <td className="py-0.5 px-2">{reward.targetedLot}</td>
                    <td className="py-0.5 px-2">{reward.withdrawType}</td>
                    <td className="py-0.5 px-2">{reward.category}</td>
                    <td className="py-0.5 px-2">{reward.amount || '-'}</td>
                    <td className="py-0.5 px-2 text-green-600">{reward.status}</td>
                    <td className="py-0.5 px-2">
                      <div className="flex gap-1">
                        <button className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs flex items-center gap-1">
                          <Edit className="w-3 h-3" /> Edit
                        </button>
                        <button className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs flex items-center gap-1">
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
            <div>Showing 1 to {rewards.length} of {rewards.length} entries</div>
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

export default RewardsList;
