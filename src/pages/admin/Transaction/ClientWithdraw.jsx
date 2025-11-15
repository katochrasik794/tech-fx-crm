import { useState } from 'react'
import ResponsiveAdminLayout from '../../../components/ResponsiveAdminLayout'

function ClientWithdraw() {
  const [formData, setFormData] = useState({ client: '', mt5Id: '', amount: '', comment: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Withdraw:', formData)
  }

  return (
    <ResponsiveAdminLayout title="Client Withdraw">
      <div className="bg-white rounded-2xl p-4 shadow-sm w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium mb-1">Select Client <span className="text-red-500">*</span></label>
            <select className="w-full px-2 py-1.5 text-sm border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.client} onChange={(e) => setFormData({...formData, client: e.target.value})} required>
              <option value="">Please Choose...</option>
              <option value="1">John Doe - john@example.com</option>
              <option value="2">Jane Smith - jane@example.com</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Select MT5 ID <span className="text-red-500">*</span></label>
            <select className="w-full px-2 py-1.5 text-sm border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.mt5Id} onChange={(e) => setFormData({...formData, mt5Id: e.target.value})} required>
              <option value="">Please Choose...</option>
              <option value="1001234">1001234</option>
              <option value="1001235">1001235</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Amount <span className="text-red-500">*</span></label>
            <input type="number" placeholder="Enter amount" className="w-full px-2 py-1.5 text-sm border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} required />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Comment <span className="text-red-500">*</span></label>
            <input type="text" placeholder="Enter comment" className="w-full px-2 py-1.5 text-sm border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.comment} onChange={(e) => setFormData({...formData, comment: e.target.value})} required />
          </div>
          <button type="submit" className="px-4 py-1.5 text-sm bg-orange-500 text-white rounded hover:bg-orange-600">Submit</button>
        </form>
      </div>
    </ResponsiveAdminLayout>
  )
}

export default ClientWithdraw
