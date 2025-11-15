import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminHeader from '../../../components/AdminHeader';

const IBRequestTerms = () => {
  const [formData, setFormData] = useState({
    minClients: '',
    minDeposit: '',
    minVolume: '',
    termsConditions: ''
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
        <h1 className="text-lg font-bold mb-4">IB Request Terms</h1>

        <div className="bg-white rounded shadow p-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs mb-1">Minimum Clients <span className="text-red-500">*</span></label>
                <input type="number" placeholder="Enter Minimum Clients" value={formData.minClients} onChange={(e) => setFormData({...formData, minClients: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm" required />
              </div>
              <div>
                <label className="block text-xs mb-1">Minimum Deposit <span className="text-red-500">*</span></label>
                <input type="number" placeholder="Enter Minimum Deposit" value={formData.minDeposit} onChange={(e) => setFormData({...formData, minDeposit: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm" required />
              </div>
              <div>
                <label className="block text-xs mb-1">Minimum Volume (Lots) <span className="text-red-500">*</span></label>
                <input type="number" placeholder="Enter Minimum Volume" value={formData.minVolume} onChange={(e) => setFormData({...formData, minVolume: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm" required />
              </div>
              <div className="col-span-2">
                <label className="block text-xs mb-1">Terms & Conditions <span className="text-red-500">*</span></label>
                <textarea placeholder="Enter Terms & Conditions" value={formData.termsConditions} onChange={(e) => setFormData({...formData, termsConditions: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm h-32" required />
              </div>
            </div>
            <button type="submit" className="bg-orange-500 text-white px-4 py-1.5 rounded text-sm mt-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IBRequestTerms;
