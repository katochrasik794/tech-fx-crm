import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'
import { Search } from 'lucide-react'

function GroupList() {
  const [search, setSearch] = useState('')
  const [sortField, setSortField] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [entries, setEntries] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  
  const groupsData = [
    { id: 1, name: 'Prime', mt5GroupName: 'demo\\default', status: 'Active' },
    { id: 2, name: 'ECN', mt5GroupName: 'ECN', status: 'Active' },
    { id: 3, name: 'Asfa', mt5GroupName: 'Test team', status: 'Active' },
    { id: 4, name: 'Testing', mt5GroupName: 'Testing', status: 'Active' },
  ]

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
  }

  const sortedGroups = [...groupsData].sort((a, b) => {
    if (!sortField) return 0
    const aVal = sortField === 'id' ? a[sortField] : (a[sortField]?.toLowerCase() || '')
    const bVal = sortField === 'id' ? b[sortField] : (b[sortField]?.toLowerCase() || '')
    if (sortOrder === 'asc') return aVal > bVal ? 1 : -1
    return aVal < bVal ? 1 : -1
  })

  const filteredGroups = sortedGroups.filter(group => 
    group.name.toLowerCase().includes(search.toLowerCase()) ||
    group.mt5GroupName.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filteredGroups.length / entries)
  const startIndex = (currentPage - 1) * entries
  const endIndex = startIndex + entries
  const currentGroups = filteredGroups.slice(startIndex, endIndex)

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">Group List</h1>
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
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('id')}>ID {sortField === 'id' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('name')}>Name {sortField === 'name' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('mt5GroupName')}>MT5 Group Name {sortField === 'mt5GroupName' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('status')}>Status {sortField === 'status' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentGroups.map((group, index) => (
                  <tr key={group.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="py-0.5 px-2 text-xs">{group.id}</td>
                    <td className="py-0.5 px-2 text-blue-600 text-xs">{group.name}</td>
                    <td className="py-0.5 px-2 text-xs">{group.mt5GroupName}</td>
                    <td className="py-0.5 px-2 text-green-600 text-xs">{group.status}</td>
                    <td className="py-0.5 px-2 text-xs">
                      <button className="px-2 py-0.5 bg-orange-500 text-white rounded hover:bg-orange-600 text-xs">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-between items-center pt-4 border-t border-black text-xs text-gray-600">
            <div>Showing {currentGroups.length > 0 ? startIndex + 1 : 0} to {Math.min(endIndex, filteredGroups.length)} of {filteredGroups.length} entries</div>
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

export default GroupList
