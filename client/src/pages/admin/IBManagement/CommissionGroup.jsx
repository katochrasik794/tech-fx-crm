import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'
import { Search } from 'lucide-react'

function CommissionGroup() {
  const [search, setSearch] = useState('')
  const [sortField, setSortField] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [entries, setEntries] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  
  const groupsData = [
    { id: 1, planName: 'Common', groupName: 'demo\default', level1: 30, level2: 20, level3: 15, level4: 10, level5: 8, level6: 7, level7: 6 },
    { id: 2, planName: 'Common', groupName: 'ECN', level1: 8, level2: 5, level3: 3, level4: 2, level5: 1, level6: 1, level7: 1 },
    { id: 3, planName: 'plan 1', groupName: 'ECN', level1: 5, level2: 4, level3: 3, level4: 2, level5: 1, level6: 1, level7: 1 },
    { id: 4, planName: 'master', groupName: 'demo\default', level1: 5, level2: 3, level3: 0, level4: 0, level5: 0, level6: 0, level7: 0 },
    { id: 5, planName: 'subib-1', groupName: 'demo\default', level1: 9, level2: 1, level3: 0, level4: 0, level5: 0, level6: 0, level7: 0 },
    { id: 6, planName: 'subib-2', groupName: 'demo\default', level1: 8, level2: 2, level3: 0, level4: 0, level5: 0, level6: 0, level7: 0 },
    { id: 7, planName: 'ABC', groupName: 'ECN', level1: 2, level2: 0, level3: 0, level4: 0, level5: 0, level6: 0, level7: 0 },
    { id: 8, planName: 'ABC', groupName: 'Testing', level1: 1, level2: 1, level3: 0, level4: 0, level5: 0, level6: 0, level7: 0 },
    { id: 9, planName: 'ABC 2', groupName: 'ECN', level1: 1, level2: 1, level3: 0, level4: 0, level5: 0, level6: 0, level7: 0 },
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
    const aVal = ['id', 'level1', 'level2', 'level3', 'level4', 'level5', 'level6', 'level7'].includes(sortField) ? a[sortField] : (a[sortField]?.toLowerCase() || '')
    const bVal = ['id', 'level1', 'level2', 'level3', 'level4', 'level5', 'level6', 'level7'].includes(sortField) ? b[sortField] : (b[sortField]?.toLowerCase() || '')
    if (sortOrder === 'asc') return aVal > bVal ? 1 : -1
    return aVal < bVal ? 1 : -1
  })

  const filteredGroups = sortedGroups.filter(group => 
    group.planName.toLowerCase().includes(search.toLowerCase()) ||
    group.groupName.toLowerCase().includes(search.toLowerCase())
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
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Commission Group List</h1>
          <Link to="/admin/ib/commission-group/add" className="px-4 py-2 text-violet-500 text-white rounded hover:bg-orange-600 text-sm">Add Commission Group</Link>
        </div>
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
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('planName')}>Plan Name {sortField === 'planName' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('groupName')}>Group Name {sortField === 'groupName' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('level1')}>Level1 Commission {sortField === 'level1' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('level2')}>Level2 Commission {sortField === 'level2' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('level3')}>Level3 Commission {sortField === 'level3' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('level4')}>Level4 Commission {sortField === 'level4' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('level5')}>Level5 Commission {sortField === 'level5' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('level6')}>Level6 Commission {sortField === 'level6' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('level7')}>Level7 Commission {sortField === 'level7' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentGroups.map((group, index) => (
                  <tr key={group.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="py-0.5 px-2 text-xs">{group.id}</td>
                    <td className="py-0.5 px-2 text-xs">{group.planName}</td>
                    <td className="py-0.5 px-2 text-blue-600 text-xs">{group.groupName}</td>
                    <td className="py-0.5 px-2 text-xs">{group.level1}</td>
                    <td className="py-0.5 px-2 text-xs">{group.level2}</td>
                    <td className="py-0.5 px-2 text-blue-600 text-xs">{group.level3}</td>
                    <td className="py-0.5 px-2 text-blue-600 text-xs">{group.level4}</td>
                    <td className="py-0.5 px-2 text-blue-600 text-xs">{group.level5}</td>
                    <td className="py-0.5 px-2 text-xs">{group.level6}</td>
                    <td className="py-0.5 px-2 text-xs">{group.level7}</td>
                    <td className="py-0.5 px-2 text-xs">
                      <button className="px-2 py-0.5 text-violet-500 text-white rounded hover:bg-orange-600 text-xs">Edit</button>
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

export default CommissionGroup
