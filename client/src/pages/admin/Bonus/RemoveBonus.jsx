import { useState } from 'react'
import ResponsiveAdminLayout from '../../../components/ResponsiveAdminLayout'

function RemoveBonus() {
  const [formData, setFormData] = useState({ mt5Id: '', amount: '', comment: '' })

  return (
    <ResponsiveAdminLayout title="Remove Bonus">
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
            <label className="block text-xs font-medium mb-1">Amount <span className="text-red-500">*</span></label>
            <input type="number" placeholder="Enter amount" className="w-full px-3 py-1.5 text-xs sm:text-sm border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Comment</label>
            <input type="text" placeholder="Enter comment" className="w-full px-3 py-1.5 text-xs sm:text-sm border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.comment} onChange={(e) => setFormData({...formData, comment: e.target.value})} />
          </div>
          <button type="submit" className="px-4 py-1.5 text-xs sm:text-sm text-violet-500 text-white rounded-lg hover:bg-orange-600">Submit</button>
        </form>
      </div>
    </ResponsiveAdminLayout>
  )
}

export default RemoveBonus
