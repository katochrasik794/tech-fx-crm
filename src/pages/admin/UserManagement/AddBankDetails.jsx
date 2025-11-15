import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'

function AddBankDetails() {
  const [formData, setFormData] = useState({
    client: '',
    accountName: '',
    accountNo: '',
    ifscSwift: '',
    iban: '',
    bankName: '',
    bankAddress: '',
    country: '',
    bookBank: null
  })

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-xl font-bold mb-6">Add Bank Details</h1>
        <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Select Client <span className="text-red-500">*</span></label>
              <select className="w-full border rounded-lg px-4 py-2.5 text-xs placeholder:text-xs" value={formData.client} onChange={(e) => setFormData({...formData, client: e.target.value})}>
                <option value="">Please Choose...</option>
                <option value="1">John Doe</option>
                <option value="2">Jane Smith</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Account Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Enter account holder name" className="w-full border rounded-lg px-4 py-2.5 text-xs placeholder:text-xs" value={formData.accountName} onChange={(e) => setFormData({...formData, accountName: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Account No. <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Enter account number" className="w-full border rounded-lg px-4 py-2.5 text-xs placeholder:text-xs" value={formData.accountNo} onChange={(e) => setFormData({...formData, accountNo: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">IFSC/Swift Code <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Enter ifsc/swift code" className="w-full border rounded-lg px-4 py-2.5 text-xs placeholder:text-xs" value={formData.ifscSwift} onChange={(e) => setFormData({...formData, ifscSwift: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">IBAN No.</label>
              <input type="text" placeholder="Enter iban number" className="w-full border rounded-lg px-4 py-2.5 text-xs placeholder:text-xs" value={formData.iban} onChange={(e) => setFormData({...formData, iban: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Bank Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Enter bank name" className="w-full border rounded-lg px-4 py-2.5 text-xs placeholder:text-xs" value={formData.bankName} onChange={(e) => setFormData({...formData, bankName: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Bank address</label>
              <input type="text" placeholder="Enter bank address" className="w-full border rounded-lg px-4 py-2.5 text-xs placeholder:text-xs" value={formData.bankAddress} onChange={(e) => setFormData({...formData, bankAddress: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Country <span className="text-red-500">*</span></label>
              <select className="w-full border rounded-lg px-4 py-2.5 text-xs placeholder:text-xs" value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})}>
                <option value="">Please Choose...</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Book Bank <span className="text-red-500">*</span></label>
              <input type="file" className="w-full border rounded-lg px-4 py-2.5 text-xs" onChange={(e) => setFormData({...formData, bookBank: e.target.files[0]})} />
            </div>
            <div className="col-span-1 md:col-span-3">
              <button type="submit" className="text-violet-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddBankDetails
