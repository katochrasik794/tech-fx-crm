import { useState } from 'react'
import ResponsiveAdminLayout from '../../../components/ResponsiveAdminLayout'
import ResponsiveForm from '../../../components/ResponsiveForm'
import { User, Mail, Phone, Lock, Globe, Tag } from 'lucide-react'

function AddUser() {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', country: '', phone: '', marketingName: ''
  })

  return (
    <ResponsiveAdminLayout title="Add User">
      <div className="max-w-2xl">
        <ResponsiveForm onSubmit={(e) => e.preventDefault()} compact>
          <div>
            <label className="block text-xs font-medium mb-1">Name <span className="text-red-500">*</span></label>
            <div className="relative">
              <User className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
              <input type="text" className="w-full pl-8 pr-3 py-1.5 text-xs border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Enter Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Email <span className="text-red-500">*</span></label>
            <div className="relative">
              <Mail className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
              <input type="email" className="w-full pl-8 pr-3 py-1.5 text-xs border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Enter Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Password <span className="text-red-500">*</span></label>
            <div className="relative">
              <Lock className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
              <input type="password" className="w-full pl-8 pr-3 py-1.5 text-xs border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Enter Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Country <span className="text-red-500">*</span></label>
            <div className="relative">
              <Globe className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
              <select className="w-full pl-8 pr-3 py-1.5 text-xs border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})}>
                <option value="">Please Choose...</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="IN">India</option>
                <option value="AU">Australia</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Phone <span className="text-red-500">*</span></label>
            <div className="relative">
              <Phone className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
              <input type="tel" className="w-full pl-8 pr-3 py-1.5 text-xs border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Enter Phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Marketing Name</label>
            <div className="relative">
              <Tag className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
              <select className="w-full pl-8 pr-3 py-1.5 text-xs border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.marketingName} onChange={(e) => setFormData({...formData, marketingName: e.target.value})}>
                <option value="">Please Choose...</option>
                <option value="marketing1">Marketing Campaign 1</option>
                <option value="marketing2">Marketing Campaign 2</option>
                <option value="marketing3">Marketing Campaign 3</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <button type="submit" className="px-4 py-1.5 text-xs bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">Add User</button>
            <button type="button" className="px-4 py-1.5 text-xs border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">Cancel</button>
          </div>
        </ResponsiveForm>
      </div>
    </ResponsiveAdminLayout>
  )
}

export default AddUser
