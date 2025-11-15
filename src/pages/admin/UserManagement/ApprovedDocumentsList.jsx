import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'

function ApprovedDocumentsList() {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  const [sortField, setSortField] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  
  const documents = [
    { id: 1, name: 'Demo user', email: 'demouser032@demo.com', phone: '09876543210', registrationDate: '2025-08-24', marketingName: '' },
    { id: 2, name: 'Dev Account', email: 'patelsino1@gmail.com', phone: '+91 9847854865', registrationDate: '2025-06-12', marketingName: 'John Smith' },
    { id: 3, name: 'FinCRM', email: 'crm@FinCRM.com', phone: '+91 09876543210', registrationDate: '2025-06-12', marketingName: 'John Smith' },
  ]

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
  }

  const sortedData = [...documents].sort((a, b) => {
    if (!sortField) return 0
    const aVal = sortField === 'id' ? a[sortField] : (a[sortField]?.toLowerCase() || '')
    const bVal = sortField === 'id' ? b[sortField] : (b[sortField]?.toLowerCase() || '')
    if (sortOrder === 'asc') return aVal > bVal ? 1 : -1
    return aVal < bVal ? 1 : -1
  })

  const filteredData = sortedData.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase()) ||
    item.phone.includes(search)
  )

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-xl font-bold mb-6">Approved Documents List</h1>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <span>Show</span>
              <select className="border rounded px-2 py-1" value={entries} onChange={(e) => setEntries(Number(e.target.value))}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span>entries</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Search:</span>
              <input type="text" className="border rounded px-3 py-1.5 w-64" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
          <div className="overflow-x-auto border border-gray-300 rounded-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-y border-black">
                  <th className="text-left py-1 px-3 font-medium text-gray-600 cursor-pointer text-sm whitespace-nowrap" onClick={() => handleSort('id')}>ID {sortField === 'id' && sortOrder === 'desc' ? '↓' : '↑'}</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 cursor-pointer text-sm whitespace-nowrap" onClick={() => handleSort('name')}>Name {sortField === 'name' && sortOrder === 'desc' ? '↓' : '↑'}</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 cursor-pointer text-sm whitespace-nowrap" onClick={() => handleSort('email')}>Email {sortField === 'email' && sortOrder === 'desc' ? '↓' : '↑'}</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm whitespace-nowrap">Phone</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm whitespace-nowrap">Registration Date</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm whitespace-nowrap">Marketing Name</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.slice(0, entries).map((doc, index) => (
                  <tr key={doc.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                    <td className="py-1 px-3 text-sm whitespace-nowrap">{doc.id}</td>
                    <td className="py-1 px-3 text-sm whitespace-nowrap">{doc.name}</td>
                    <td className="py-1 px-3 text-blue-600 text-sm whitespace-nowrap">{doc.email}</td>
                    <td className="py-1 px-3 text-sm whitespace-nowrap">{doc.phone}</td>
                    <td className="py-1 px-3 text-sm whitespace-nowrap">{doc.registrationDate}</td>
                    <td className="py-1 px-3 text-sm whitespace-nowrap">{doc.marketingName}</td>
                    <td className="py-1 px-3 text-sm">
                      <Link to="/admin/user/documents-details">
                        <button className="px-4 py-1 text-violet-500 text-white rounded hover:bg-orange-600 text-xs">Details</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-black">
            <div className="text-sm text-gray-600">
              Showing 1 to {Math.min(entries, filteredData.length)} of {filteredData.length} entries
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded hover:bg-gray-50">Previous</button>
              <button className="px-3 py-1 text-violet-500 text-white rounded">1</button>
              <button className="px-3 py-1 border rounded hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApprovedDocumentsList
