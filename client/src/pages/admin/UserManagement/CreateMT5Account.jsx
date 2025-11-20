import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'

function CreateMT5Account() {
  const [formData, setFormData] = useState({
    client: '', group: '', leverage: ''
  })

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-xl font-bold mb-6">Create MT5 Account</h1>
        <div className="bg-white rounded-2xl p-8 shadow-sm max-w-2xl">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Select Client <span className="text-red-500">*</span></label>
              <select className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.client} onChange={(e) => setFormData({...formData, client: e.target.value})}>
                <option value="">Please Choose...</option>
                <option value="1">John Doe (john@example.com)</option>
                <option value="2">Jane Smith (jane@example.com)</option>
                <option value="3">Mike Johnson (mike@example.com)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Select Group <span className="text-red-500">*</span></label>
              <select className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.group} onChange={(e) => setFormData({...formData, group: e.target.value})}>
                <option value="">Please Choose...</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="vip">VIP</option>
                <option value="pro">Pro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Select Leverage <span className="text-red-500">*</span></label>
              <select className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.leverage} onChange={(e) => setFormData({...formData, leverage: e.target.value})}>
                <option value="">Please Choose...</option>
                <option value="1:50">1:50</option>
                <option value="1:100">1:100</option>
                <option value="1:200">1:200</option>
                <option value="1:500">1:500</option>
                <option value="1:1000">1:1000</option>
              </select>
            </div>
            <div className="pt-4">
              <button type="submit" className="px-6 py-2.5 text-violet-500 text-white rounded-lg hover:bg-orange-600 transition-colors">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateMT5Account
