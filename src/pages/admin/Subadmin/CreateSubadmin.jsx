import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminHeader from '../../../components/AdminHeader';

const CreateSubadmin = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    type: '',
    selectGroup: ''
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
        <h1 className="text-lg font-bold mb-4">Create Subadmin</h1>

        <div className="bg-white rounded shadow p-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs mb-1">Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm" required />
              </div>
              <div>
                <label className="block text-xs mb-1">Email <span className="text-red-500">*</span></label>
                <input type="email" placeholder="Enter Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm" required />
              </div>
              <div>
                <label className="block text-xs mb-1">Password <span className="text-red-500">*</span></label>
                <input type="password" placeholder="Enter Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm" required />
              </div>
              <div>
                <label className="block text-xs mb-1">Type <span className="text-red-500">*</span></label>
                <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm" required>
                  <option value="">Please Choose...</option>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="Support">Support</option>
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1">Select Group <span className="text-red-500">*</span></label>
                <select value={formData.selectGroup} onChange={(e) => setFormData({...formData, selectGroup: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm" required>
                  <option value="">Please Choose...</option>
                  <option value="PrimeECN">PrimeECN</option>
                  <option value="Asfa">Asfa</option>
                  <option value="Testing">Testing</option>
                </select>
              </div>
            </div>
            <button type="submit" className="text-violet-500 text-white px-4 py-1.5 rounded text-sm mt-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateSubadmin;
