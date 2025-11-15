import React, { useState } from 'react';
import { Edit, Trash2 } from 'lucide-react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminHeader from '../../../components/AdminHeader';

const PSPSetting = () => {
  const [formData, setFormData] = useState({
    paymentGateway: 'cash',
    countryType: 'All',
    status: 'Active',
    type: 'Deposit',
    orderNo: ''
  });

  const pspData = [
    { id: 1, paymentGateway: 'bank transfer', country: 'all', status: 'Active', type: 'deposit', orderNo: 1, date: '2024-10-22' },
    { id: 2, paymentGateway: 'cash', country: 'all', status: 'Active', type: 'deposit', orderNo: 2, date: '2024-10-22' },
    { id: 3, paymentGateway: 'bank transfer', country: 'all', status: 'Active', type: 'withdraw', orderNo: 1, date: '2024-10-22' },
    { id: 4, paymentGateway: 'cash', country: 'all', status: 'Active', type: 'withdraw', orderNo: 2, date: '2024-10-22' },
    { id: 5, paymentGateway: 'usdt', country: 'all', status: 'Active', type: 'deposit', orderNo: 3, date: '2025-01-10' },
    { id: 6, paymentGateway: 'usdt', country: 'all', status: 'Active', type: 'withdraw', orderNo: 3, date: '2025-01-10' },
    { id: 7, paymentGateway: 'neteller', country: 'all', status: 'Active', type: 'deposit', orderNo: 4, date: '2025-01-10' },
    { id: 8, paymentGateway: 'neteller', country: 'all', status: 'Active', type: 'withdraw', orderNo: 4, date: '2025-01-10' },
    { id: 9, paymentGateway: 'paypal', country: 'all', status: 'Active', type: 'deposit', orderNo: 5, date: '2025-01-10' },
    { id: 10, paymentGateway: 'paypal', country: 'all', status: 'Active', type: 'withdraw', orderNo: 5, date: '2025-01-10' },
    { id: 11, paymentGateway: 'skrill', country: 'all', status: 'Active', type: 'deposit', orderNo: 6, date: '2025-01-10' },
    { id: 12, paymentGateway: 'skrill', country: 'all', status: 'Active', type: 'withdraw', orderNo: 6, date: '2025-01-10' },
    { id: 13, paymentGateway: 'sticpay', country: 'all', status: 'Active', type: 'deposit', orderNo: 7, date: '2025-01-10' },
    { id: 14, paymentGateway: 'sticpay', country: 'all', status: 'Active', type: 'withdraw', orderNo: 7, date: '2025-01-10' },
    { id: 15, paymentGateway: 'upi', country: 'all', status: 'Active', type: 'deposit', orderNo: 8, date: '2025-01-10' },
    { id: 16, paymentGateway: 'upi', country: 'all', status: 'Active', type: 'withdraw', orderNo: 8, date: '2025-01-10' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit:', formData);
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">PSP Setting</h1>

        <div className="bg-white rounded shadow p-4 mb-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs mb-1">Select PaymentGateway <span className="text-red-500">*</span></label>
                <select value={formData.paymentGateway} onChange={(e) => setFormData({...formData, paymentGateway: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
                  <option value="cash">cash</option>
                  <option value="bank transfer">bank transfer</option>
                  <option value="usdt">usdt</option>
                  <option value="neteller">neteller</option>
                  <option value="paypal">paypal</option>
                  <option value="skrill">skrill</option>
                  <option value="sticpay">sticpay</option>
                  <option value="upi">upi</option>
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1">Select Country Type <span className="text-red-500">*</span></label>
                <select value={formData.countryType} onChange={(e) => setFormData({...formData, countryType: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
                  <option value="All">All</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1">Status <span className="text-red-500">*</span></label>
                <select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1">Type <span className="text-red-500">*</span></label>
                <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
                  <option value="Deposit">Deposit</option>
                  <option value="Withdraw">Withdraw</option>
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1">Order No. <span className="text-red-500">*</span></label>
                <input type="number" placeholder="Enter Order No." value={formData.orderNo} onChange={(e) => setFormData({...formData, orderNo: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm" required />
              </div>
            </div>
            <button type="submit" className="text-violet-500 text-white px-4 py-1.5 rounded text-sm mt-4">Submit</button>
          </form>
        </div>

        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-y border-black bg-gray-50">
                <th className="py-0.5 px-2 text-left font-semibold">Id</th>
                <th className="py-0.5 px-2 text-left font-semibold">Payment Gateway</th>
                <th className="py-0.5 px-2 text-left font-semibold">Country</th>
                <th className="py-0.5 px-2 text-left font-semibold">Status</th>
                <th className="py-0.5 px-2 text-left font-semibold">Type</th>
                <th className="py-0.5 px-2 text-left font-semibold">Order no.</th>
                <th className="py-0.5 px-2 text-left font-semibold">Date</th>
                <th className="py-0.5 px-2 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {pspData.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="py-0.5 px-2">{item.id}</td>
                  <td className="py-0.5 px-2">{item.paymentGateway}</td>
                  <td className="py-0.5 px-2">{item.country}</td>
                  <td className="py-0.5 px-2 text-green-600">{item.status}</td>
                  <td className="py-0.5 px-2">{item.type}</td>
                  <td className="py-0.5 px-2">{item.orderNo}</td>
                  <td className="py-0.5 px-2">{item.date}</td>
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
      </div>
    </div>
  );
};

export default PSPSetting;
