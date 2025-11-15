import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'

function UpdateMT5Group() {
  const [formData, setFormData] = useState({ mt5Id: '', group: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">Update MT5 Group</h1>
        <div className="bg-white rounded-2xl p-4 shadow-sm max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium mb-1">Select MT5 ID <span className="text-red-500">*</span></label>
              <select className="w-full px-2 py-1.5 text-sm border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.mt5Id} onChange={(e) => setFormData({...formData, mt5Id: e.target.value})} required>
                <option value="">Please Choose...</option>
                <option value="1001234">1001234</option>
                <option value="1001235">1001235</option>
                <option value="1001236">1001236</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Select Group <span className="text-red-500">*</span></label>
              <select className="w-full px-2 py-1.5 text-sm border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.group} onChange={(e) => setFormData({...formData, group: e.target.value})} required>
                <option value="">Please Choose...</option>
                <option value="Prime">Prime</option>
                <option value="ECN">ECN</option>
                <option value="Standard">Standard</option>
                <option value="VIP">VIP</option>
              </select>
            </div>
            <button type="submit" className="px-4 py-1.5 text-sm text-violet-500 text-white rounded hover:bg-orange-600">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateMT5Group
