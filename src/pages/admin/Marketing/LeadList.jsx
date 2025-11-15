import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'
import { Search } from 'lucide-react'

function LeadList() {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    marketingAdmin: '',
    name: '',
    phone: '',
    email: '',
    country: '',
    source: '',
    status: '',
    description: ''
  })
  
  const leadsData = [
    { serial: 1, marketingAdmin: 'Techysquad', name: 'Client Name2', phone: '9876543212', email: 'clientname2@testing.com', country: 'India', source: 'source1', status: 'statys 1', description: 'client description' },
    { serial: 2, marketingAdmin: 'John Smith', name: 'Client Name', phone: '9876543210', email: 'clientname@testing.com', country: 'India', source: '19', status: '5', description: 'client description' },
    { serial: 3, marketingAdmin: 'Techysquad', name: 'demo', phone: '9238298329', email: 'demo2@demo22.com', country: 'India', source: '12', status: '2', description: 'deioew' },
  ]

  const filteredData = leadsData.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase()) ||
    item.marketingAdmin.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filteredData.length / entries)
  const startIndex = (currentPage - 1) * entries
  const currentData = filteredData.slice(startIndex, startIndex + entries)

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-bold">Leads</h1>
          <button onClick={() => setShowForm(true)} className="px-4 py-1.5 text-sm bg-orange-500 text-white rounded hover:bg-orange-600 flex items-center gap-1">
            <span>+</span> Add
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded shadow p-4 mb-4">
            <h2 className="text-sm font-bold mb-4">Add Lead</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              console.log('Submit:', formData);
              setShowForm(false);
              setFormData({ marketingAdmin: '', name: '', phone: '', email: '', country: '', source: '', status: '', description: '' });
            }}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs mb-1">
                    Marketing/Admin <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Marketing/Admin"
                    value={formData.marketingAdmin}
                    onChange={(e) => setFormData({...formData, marketingAdmin: e.target.value})}
                    className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Country"
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">
                    Source <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Source"
                    value={formData.source}
                    onChange={(e) => setFormData({...formData, source: e.target.value})}
                    className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">
                    Status <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Status"
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="Enter Description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm h-20"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button type="submit" className="bg-orange-500 text-white px-4 py-1.5 rounded text-sm">
                  Submit
                </button>
                <button type="button" onClick={() => {
                  setShowForm(false);
                  setFormData({ marketingAdmin: '', name: '', phone: '', email: '', country: '', source: '', status: '', description: '' });
                }} className="bg-gray-500 text-white px-4 py-1.5 rounded text-sm">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-1.5 text-xs">
              <span>Show</span>
              <select className="border rounded px-1.5 py-0.5 text-xs" value={entries} onChange={(e) => { setEntries(Number(e.target.value)); setCurrentPage(1); }}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span>entries</span>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-2 top-1.5 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Search..." className="w-full pl-7 pr-3 py-1 text-xs border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-y border-black">
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Serial No.</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Marketing/Admin</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Name</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Phone</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Email</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Country</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Source</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Status</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Description</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => (
                  <tr key={item.serial} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="py-0.5 px-2 text-xs">{item.serial}</td>
                    <td className="py-0.5 px-2 text-xs">{item.marketingAdmin}</td>
                    <td className="py-0.5 px-2 text-blue-600 text-xs">{item.name}</td>
                    <td className="py-0.5 px-2 text-xs">{item.phone}</td>
                    <td className="py-0.5 px-2 text-blue-600 text-xs">{item.email}</td>
                    <td className="py-0.5 px-2 text-blue-600 text-xs">{item.country}</td>
                    <td className="py-0.5 px-2 text-xs">{item.source}</td>
                    <td className="py-0.5 px-2 text-xs">{item.status}</td>
                    <td className="py-0.5 px-2 text-xs">{item.description}</td>
                    <td className="py-0.5 px-2 text-xs">
                      <div className="flex gap-1 flex-wrap">
                        <button className="px-2 py-0.5 bg-orange-500 text-white rounded hover:bg-orange-600 text-xs">View</button>
                        <button className="px-2 py-0.5 bg-orange-500 text-white rounded hover:bg-orange-600 text-xs">Edit</button>
                        <button className="px-2 py-0.5 bg-orange-500 text-white rounded hover:bg-orange-600 text-xs">Delete</button>
                        <button className="px-2 py-0.5 bg-orange-500 text-white rounded hover:bg-orange-600 text-xs">Assign To</button>
                        <button className="px-2 py-0.5 bg-orange-500 text-white rounded hover:bg-orange-600 text-xs">Convert</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-between items-center pt-4 border-t border-black text-xs text-gray-600">
            <div>Showing {startIndex + 1} to {Math.min(startIndex + entries, filteredData.length)} of {filteredData.length} entries</div>
            <div className="flex gap-2">
              <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 text-xs">Previous</button>
              {[...Array(totalPages)].map((_, i) => (
                <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`px-3 py-1 border rounded text-xs ${currentPage === i + 1 ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'}`}>{i + 1}</button>
              ))}
              <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 text-xs">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeadList
