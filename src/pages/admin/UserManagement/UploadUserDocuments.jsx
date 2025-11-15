import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'

function UploadUserDocuments() {
  const [selectedClient, setSelectedClient] = useState('')

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-xl font-bold mb-6">Upload User Documents</h1>
        <div className="bg-white rounded-2xl p-8 shadow-sm max-w-3xl">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Select Client <span className="text-red-500">*</span></label>
              <select className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={selectedClient} onChange={(e) => setSelectedClient(e.target.value)}>
                <option value="">Please Choose...</option>
                <option value="1">John Doe</option>
                <option value="2">Jane Smith</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Proof of Identity (POI) <span className="text-red-500">*</span></label>
              <input type="file" className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Proof of Address (POA) <span className="text-red-500">*</span></label>
              <input type="file" className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
            </div>
            <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 font-medium">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UploadUserDocuments
