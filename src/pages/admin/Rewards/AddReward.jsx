import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminHeader from '../../../components/AdminHeader';

const AddReward = () => {
  const [formData, setFormData] = useState({
    title: '',
    targetLots: '',
    image: null,
    category: '',
    withdrawType: 'Wallet',
    amount: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit:', formData);
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">Add Reward</h1>

        <div className="bg-white rounded shadow p-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs mb-1">
                  Reward Title <span className="text-red-500">*</span>
                </label>
                <input type="text" placeholder="Add Reward Title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm" required />
              </div>
              <div>
                <label className="block text-xs mb-1">
                  Target Lots <span className="text-red-500">*</span>
                </label>
                <input type="number" placeholder="Add Target Lot" value={formData.targetLots} onChange={(e) => setFormData({...formData, targetLots: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm" required />
              </div>
              <div>
                <label className="block text-xs mb-1">
                  Reward Image <span className="text-red-500">*</span>
                </label>
                <input type="file" onChange={(e) => setFormData({...formData, image: e.target.files[0]})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm" required />
              </div>
              <div>
                <label className="block text-xs mb-1">
                  Select Category <span className="text-red-500">*</span>
                </label>
                <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm" required>
                  <option value="">Select</option>
                  <option value="Subscriptions">Subscriptions</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Food">Food</option>
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1">
                  Withdraw Type <span className="text-red-500">*</span>
                </label>
                <select value={formData.withdrawType} onChange={(e) => setFormData({...formData, withdrawType: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm" required>
                  <option value="Wallet">Wallet</option>
                  <option value="Voucher">Voucher</option>
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1">
                  Amount <span className="text-red-500">*</span>
                </label>
                <input type="number" placeholder="Add Reward Amount" value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm" required />
              </div>
              <div className="col-span-2">
                <label className="block text-xs mb-1">
                  Reward Description <span className="text-red-500">*</span>
                </label>
                <textarea placeholder="Add Reward Description" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm h-24" required />
              </div>
            </div>
            <button type="submit" className="bg-orange-500 text-white px-4 py-1.5 rounded text-sm mt-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReward;
