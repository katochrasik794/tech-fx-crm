import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminHeader from '../../../components/AdminHeader';

const DefaultSetting = () => {
  const [formData, setFormData] = useState({
    disableAccount: 'No',
    disableDeposit: 'No',
    disableWithdraw: 'No',
    disableTransfer: 'No',
    disableIBWithdraw: 'No',
    disableMT5ToWallet: 'No',
    disableWalletToMT5: 'No',
    disableIbToSubclientMT5: 'No'
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
        <h1 className="text-lg font-bold mb-4">Default Setting</h1>

        <div className="bg-white rounded shadow p-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs mb-1">Disable Account <span className="text-red-500">*</span></label>
                <select value={formData.disableAccount} onChange={(e) => setFormData({...formData, disableAccount: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1">Disable Deposit <span className="text-red-500">*</span></label>
                <select value={formData.disableDeposit} onChange={(e) => setFormData({...formData, disableDeposit: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1">Disable Withdraw <span className="text-red-500">*</span></label>
                <select value={formData.disableWithdraw} onChange={(e) => setFormData({...formData, disableWithdraw: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1">Disable Transfer <span className="text-red-500">*</span></label>
                <select value={formData.disableTransfer} onChange={(e) => setFormData({...formData, disableTransfer: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1">Disable IB Withdraw <span className="text-red-500">*</span></label>
                <select value={formData.disableIBWithdraw} onChange={(e) => setFormData({...formData, disableIBWithdraw: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1">Disable MT5 To Wallet <span className="text-red-500">*</span></label>
                <select value={formData.disableMT5ToWallet} onChange={(e) => setFormData({...formData, disableMT5ToWallet: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1">Disable Wallet To MT5 <span className="text-red-500">*</span></label>
                <select value={formData.disableWalletToMT5} onChange={(e) => setFormData({...formData, disableWalletToMT5: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1">Disable Ib To Subclient MT5 <span className="text-red-500">*</span></label>
                <select value={formData.disableIbToSubclientMT5} onChange={(e) => setFormData({...formData, disableIbToSubclientMT5: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
            </div>
            <button type="submit" className="bg-orange-500 text-white px-4 py-1.5 rounded text-sm mt-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DefaultSetting;
