import { useState } from 'react'
import ResponsiveAdminLayout from '../../../components/ResponsiveAdminLayout'
import ResponsiveForm from '../../../components/ResponsiveForm'

function ClientDeposit() {
  const [formData, setFormData] = useState({ client: '', mt5Id: '', amount: '', comment: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Deposit:', formData)
  }

  return (
    <ResponsiveAdminLayout title="Client Deposit">
      <div className="w-full">
        <ResponsiveForm onSubmit={handleSubmit}>
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
        </ResponsiveForm>
      </div>
    </ResponsiveAdminLayout>
  )
}

export default ClientDeposit
