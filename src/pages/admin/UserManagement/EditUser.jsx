import { useState } from 'react'
import ResponsiveAdminLayout from '../../../components/ResponsiveAdminLayout'
import ResponsiveForm from '../../../components/ResponsiveForm'
import { User, Mail, Phone, Globe, Tag } from 'lucide-react'

function EditUser() {
  const [formData, setFormData] = useState({
    name: 'demo', email: 'har33h@FinCRM.com', phone: '+91 9884543210', country: 'India', marketingName: 'Developer Account'
  })

  return (
    <ResponsiveAdminLayout title="Edit User">
      <ResponsiveForm onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium mb-2">Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input type="text" className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email <span className="text-red-500">*</span></label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input type="email" className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Country <span className="text-red-500">*</span></label>
              <div className="relative">
                <Globe className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})}>
                  <option value="India">India</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Pakistan">Pakistan</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone <span className="text-red-500">*</span></label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input type="tel" className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Marketing Name</label>
              <div className="relative">
                <Tag className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input type="text" className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.marketingName} onChange={(e) => setFormData({...formData, marketingName: e.target.value})} />
              </div>
            </div>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button type="submit" className="px-6 py-2.5 text-violet-500 text-white rounded-lg hover:bg-orange-600 transition-colors">Update User</button>
          <button type="button" className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">Cancel</button>
        </div>
      </ResponsiveForm>
    </ResponsiveAdminLayout>
  )
}

export default EditUser
