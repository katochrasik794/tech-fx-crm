import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'

function AddGroup() {
  const [formData, setFormData] = useState({ name: '', mt5GroupName: '', status: 'Active' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">Add Group</h1>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-xs font-medium mb-1">Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter group name" className="w-full px-2 py-1.5 text-sm border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">MT5 Group Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter MT5 Group Name" className="w-full px-2 py-1.5 text-sm border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.mt5GroupName} onChange={(e) => setFormData({...formData, mt5GroupName: e.target.value})} required />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Status <span className="text-red-500">*</span></label>
                <select className="w-full px-2 py-1.5 text-sm border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})}>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            <button type="submit" className="px-4 py-1.5 text-sm text-violet-500 text-white rounded hover:bg-orange-600">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddGroup
