import { useState } from 'react'
import ResponsiveAdminLayout from '../../../components/ResponsiveAdminLayout'

function AddExistingClient() {
  const [formData, setFormData] = useState({ client: '', group: '', mt5Id: '' })

  return (
    <ResponsiveAdminLayout title="Add Existing Client">
      <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-sm max-w-2xl w-full">
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-medium mb-1">Select Client <span className="text-red-500">*</span></label>
            <select className="w-full px-3 py-1.5 text-xs sm:text-sm border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.client} onChange={(e) => setFormData({...formData, client: e.target.value})}>
              <option value="">Please Choose...</option>
              <option value="1">John Doe</option>
              <option value="2">Jane Smith</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Select Group <span className="text-red-500">*</span></label>
            <select className="w-full px-3 py-1.5 text-xs sm:text-sm border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.group} onChange={(e) => setFormData({...formData, group: e.target.value})}>
              <option value="">Please Choose...</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">MT5 ID <span className="text-red-500">*</span></label>
            <input type="text" placeholder="11111,222222" className="w-full px-3 py-1.5 text-xs sm:text-sm border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.mt5Id} onChange={(e) => setFormData({...formData, mt5Id: e.target.value})} />
            <p className="text-[10px] text-gray-500 mt-0.5">Enter comma separated value for multiple account.</p>
          </div>
          <button type="submit" className="px-4 py-1.5 text-xs sm:text-sm text-violet-500 text-white rounded-lg hover:bg-orange-600">Submit</button>
        </form>
      </div>
    </ResponsiveAdminLayout>
  )
}

export default AddExistingClient
