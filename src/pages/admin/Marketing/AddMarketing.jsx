import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'

function AddMarketing() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '', incentive: '', netDeposit: '', role: 'Team Manager' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Add Marketing:', formData)
  }

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">Add Marketing</h1>
        <div className="bg-white rounded-2xl p-4 shadow-sm max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium mb-1">Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Name" className="w-full px-2 py-1.5 text-sm border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Email <span className="text-red-500">*</span></label>
              <input type="email" placeholder="Email" className="w-full px-2 py-1.5 text-sm border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Phone <span className="text-red-500">*</span></label>
              <input type="tel" placeholder="Phone" className="w-full px-2 py-1.5 text-sm border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Password <span className="text-red-500">*</span></label>
              <input type="password" placeholder="Password" className="w-full px-2 py-1.5 text-sm border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} required />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Incentive (%) <span className="text-red-500">*</span></label>
              <input type="number" placeholder="Incentive" className="w-full px-2 py-1.5 text-sm border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.incentive} onChange={(e) => setFormData({...formData, incentive: e.target.value})} required />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Net Deposit (Monthly) <span className="text-red-500">*</span></label>
              <input type="number" placeholder="Net Deposit" className="w-full px-2 py-1.5 text-sm border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.netDeposit} onChange={(e) => setFormData({...formData, netDeposit: e.target.value})} required />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Select Role</label>
              <select className="w-full px-2 py-1.5 text-sm border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})}>
                <option value="Team Manager">Team Manager</option>
                <option value="Marketing Executive">Marketing Executive</option>
                <option value="Sales Manager">Sales Manager</option>
              </select>
            </div>
            <button type="submit" className="px-4 py-1.5 text-sm bg-orange-500 text-white rounded hover:bg-orange-600">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddMarketing
