import React, { useState } from 'react';
import { Search, Edit, Trash2 } from 'lucide-react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminHeader from '../../../components/AdminHeader';

const DepositBankDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [formData, setFormData] = useState({
    accountName: '',
    accountNo: '',
    bankName: '',
    ifscCode: ''
  });

  const bankDetails = [
    { id: 1, bankName: 'HDFC Bank', accountNumber: '1234567890', accountName: 'TechSquad Trading', ifsc: 'HDFC0001234', status: 'Active' },
    { id: 2, bankName: 'ICICI Bank', accountNumber: '9876543210', accountName: 'TechSquad Trading', ifsc: 'ICIC0009876', status: 'Active' },
    { id: 3, bankName: 'Axis Bank', accountNumber: '5555666677', accountName: 'TechSquad Trading', ifsc: 'UTIB0005555', status: 'Inactive' }
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
        <h1 className="text-lg font-bold mb-4">Deposit Bank Details</h1>

        <div className="bg-white rounded shadow p-4 mb-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs mb-1">Account Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="XXXXXXXXXXX" value={formData.accountName} onChange={(e) => setFormData({...formData, accountName: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm" required />
              </div>
              <div>
                <label className="block text-xs mb-1">Account No. <span className="text-red-500">*</span></label>
                <input type="text" placeholder="XXXXXXXXXXX" value={formData.accountNo} onChange={(e) => setFormData({...formData, accountNo: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm" required />
              </div>
              <div>
                <label className="block text-xs mb-1">Bank Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="XXXXXXXXXXX" value={formData.bankName} onChange={(e) => setFormData({...formData, bankName: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm" required />
              </div>
              <div>
                <label className="block text-xs mb-1">IFSC Code <span className="text-red-500">*</span></label>
                <input type="text" placeholder="XXXXXXXXXXX" value={formData.ifscCode} onChange={(e) => setFormData({...formData, ifscCode: e.target.value})} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm" required />
              </div>
            </div>
            <button type="submit" className="bg-orange-500 text-white px-4 py-1.5 rounded text-sm mt-4">Submit</button>
          </form>
        </div>

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
                  <th className="py-0.5 px-2 text-left font-semibold">Bank Name</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Account Number</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Account Name</th>
                  <th className="py-0.5 px-2 text-left font-semibold">IFSC Code</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Status</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {bankDetails.map((bank, index) => (
                  <tr key={bank.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="py-0.5 px-2">{bank.id}</td>
                    <td className="py-0.5 px-2">{bank.bankName}</td>
                    <td className="py-0.5 px-2">{bank.accountNumber}</td>
                    <td className="py-0.5 px-2">{bank.accountName}</td>
                    <td className="py-0.5 px-2">{bank.ifsc}</td>
                    <td className="py-0.5 px-2 text-green-600">{bank.status}</td>
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
            <div>Showing 1 to {bankDetails.length} of {bankDetails.length} entries</div>
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

export default DepositBankDetails;
