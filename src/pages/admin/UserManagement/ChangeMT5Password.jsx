import { useState } from 'react'
import ResponsiveAdminLayout from '../../../components/ResponsiveAdminLayout'
import { Key } from 'lucide-react'

function ChangeMT5Password() {
  const [formData, setFormData] = useState({ mt5Id: '', passwordType: 'Both', mainPassword: '', investorPassword: '' })

  return (
    <ResponsiveAdminLayout title="Change MT5 Password">
      <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-sm max-w-2xl w-full">
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-medium mb-1">Select MT5 ID <span className="text-red-500">*</span></label>
            <select className="w-full px-3 py-1.5 text-xs sm:text-sm border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.mt5Id} onChange={(e) => setFormData({...formData, mt5Id: e.target.value})}>
              <option value="">Please Choose...</option>
              <option value="1001234">1001234</option>
              <option value="1001235">1001235</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Password Type <span className="text-red-500">*</span></label>
            <input type="text" className="w-full px-3 py-1.5 text-xs sm:text-sm border rounded-lg bg-gray-50" value={formData.passwordType} readOnly />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Main Password <span className="text-red-500">*</span></label>
            <div className="flex">
              <input type="password" placeholder="Enter Main Password" className="flex-1 px-3 py-1.5 text-xs sm:text-sm border border-r-0 rounded-l-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.mainPassword} onChange={(e) => setFormData({...formData, mainPassword: e.target.value})} />
              <button type="button" className="px-3 text-violet-500 text-white rounded-r-lg hover:bg-orange-600">
                <Key className="w-3 h-3" />
              </button>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Investor Password <span className="text-red-500">*</span></label>
            <div className="flex">
              <input type="password" placeholder="Enter Investor Password" className="flex-1 px-3 py-1.5 text-xs sm:text-sm border border-r-0 rounded-l-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.investorPassword} onChange={(e) => setFormData({...formData, investorPassword: e.target.value})} />
              <button type="button" className="px-3 text-violet-500 text-white rounded-r-lg hover:bg-orange-600">
                <Key className="w-3 h-3" />
              </button>
            </div>
          </div>
          <button type="submit" className="px-4 py-1.5 text-xs sm:text-sm text-violet-500 text-white rounded-lg hover:bg-orange-600">Submit</button>
        </form>
      </div>
    </ResponsiveAdminLayout>
  )
}

export default ChangeMT5Password
