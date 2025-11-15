import { useState } from 'react'
import ResponsiveAdminLayout from '../../../components/ResponsiveAdminLayout'

function ChangeUserPassword() {
  const [formData, setFormData] = useState({ client: '', password: '' })

  return (
    <ResponsiveAdminLayout title="Change User Password">
      <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm max-w-3xl w-full">
        <form className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Select Client <span className="text-red-500">*</span></label>
            <select className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.client} onChange={(e) => setFormData({...formData, client: e.target.value})}>
              <option value="">Please Choose...</option>
              <option value="1">John Doe</option>
              <option value="2">Jane Smith</option>
            </select>
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Password <span className="text-red-500">*</span></label>
            <input type="password" placeholder="Enter Password" className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
          </div>
          <button type="submit" className="px-4 sm:px-6 py-2 text-xs sm:text-sm text-violet-500 text-white rounded-lg hover:bg-orange-600">Submit</button>
        </form>
      </div>
    </ResponsiveAdminLayout>
  )
}

export default ChangeUserPassword
