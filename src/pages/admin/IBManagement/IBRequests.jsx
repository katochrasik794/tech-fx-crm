import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'
import { Search } from 'lucide-react'

function IBRequests() {
  const [search, setSearch] = useState('')
  const [sortField, setSortField] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [entries, setEntries] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  
  const requestsData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+91 9876543210', country: 'India', registrationDate: '2025-11-10' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+92 3456789012', country: 'Pakistan', registrationDate: '2025-11-09' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', phone: '+1 2345678901', country: 'USA', registrationDate: '2025-11-08' },
  ]

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
  }

  const sortedRequests = [...requestsData].sort((a, b) => {
    if (!sortField) return 0
    const aVal = sortField === 'id' ? a[sortField] : (a[sortField]?.toLowerCase() || '')
    const bVal = sortField === 'id' ? b[sortField] : (b[sortField]?.toLowerCase() || '')
    if (sortOrder === 'asc') return aVal > bVal ? 1 : -1
    return aVal < bVal ? 1 : -1
  })

  const filteredRequests = sortedRequests.filter(req => 
    req.name.toLowerCase().includes(search.toLowerCase()) ||
    req.email.toLowerCase().includes(search.toLowerCase()) ||
    req.phone.includes(search) ||
    req.country.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filteredRequests.length / entries)
  const startIndex = (currentPage - 1) * entries
  const endIndex = startIndex + entries
  const currentRequests = filteredRequests.slice(startIndex, endIndex)

  const handleApprove = (name) => {
    if (window.confirm(`Approve IB request for ${name}?`)) {
      console.log('Approved:', name)
    }
  }

  const handleReject = (name) => {
    if (window.confirm(`Reject IB request for ${name}?`)) {
      console.log('Rejected:', name)
    }
  }

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-xl font-bold mb-6">IB Request User List</h1>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
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
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('id')}>ID {sortField === 'id' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('name')}>Name {sortField === 'name' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('email')}>Email {sortField === 'email' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('phone')}>Phone {sortField === 'phone' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('country')}>Country {sortField === 'country' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('registrationDate')}>Registration Date {sortField === 'registrationDate' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentRequests.length > 0 ? (
                  currentRequests.map((req, index) => (
                    <tr key={req.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                      <td className="py-0.5 px-2 text-xs">{req.id}</td>
                      <td className="py-0.5 px-2 text-xs">{req.name}</td>
                      <td className="py-0.5 px-2 text-blue-600 text-xs">{req.email}</td>
                      <td className="py-0.5 px-2 text-xs">{req.phone}</td>
                      <td className="py-0.5 px-2 text-xs">{req.country}</td>
                      <td className="py-0.5 px-2 text-xs">{req.registrationDate}</td>
                      <td className="py-0.5 px-2 text-xs">
                        <div className="flex gap-1">
                          <button onClick={() => handleApprove(req.name)} className="px-2 py-0.5 bg-green-500 text-white rounded hover:bg-green-600 text-xs">Approve</button>
                          <button onClick={() => handleReject(req.name)} className="px-2 py-0.5 bg-red-500 text-white rounded hover:bg-red-600 text-xs">Reject</button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-4 text-gray-500 text-xs">No data available in table</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-between items-center pt-4 border-t border-black text-xs text-gray-600">
            <div>Showing {currentRequests.length > 0 ? startIndex + 1 : 0} to {Math.min(endIndex, filteredRequests.length)} of {filteredRequests.length} entries</div>
            <div className="flex gap-2">
              <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 text-xs">Previous</button>
              {[...Array(totalPages)].map((_, i) => (
                <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`px-3 py-1 border rounded text-xs ${currentPage === i + 1 ? 'text-violet-500 text-white' : 'hover:bg-gray-100'}`}>{i + 1}</button>
              ))}
              <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 text-xs">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IBRequests
