import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'
import { Search } from 'lucide-react'

function IBPlan() {
  const [search, setSearch] = useState('')
  const [sortField, setSortField] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [entries, setEntries] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  
  const plansData = [
    { id: 1, planName: 'Common', date: '2024-09-13' },
    { id: 2, planName: 'Default', date: '2024-09-13' },
    { id: 3, planName: 'plan 1', date: '2024-09-30' },
    { id: 4, planName: 'master', date: '2025-08-26' },
    { id: 5, planName: 'subib-1', date: '2025-09-17' },
    { id: 6, planName: 'subib-2', date: '2025-09-17' },
    { id: 7, planName: 'ABC', date: '2025-09-24' },
    { id: 8, planName: 'ABC 2', date: '2025-09-24' },
  ]

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
  }

  const sortedPlans = [...plansData].sort((a, b) => {
    if (!sortField) return 0
    const aVal = sortField === 'id' ? a[sortField] : (a[sortField]?.toLowerCase() || '')
    const bVal = sortField === 'id' ? b[sortField] : (b[sortField]?.toLowerCase() || '')
    if (sortOrder === 'asc') return aVal > bVal ? 1 : -1
    return aVal < bVal ? 1 : -1
  })

  const filteredPlans = sortedPlans.filter(plan => 
    plan.planName.toLowerCase().includes(search.toLowerCase()) ||
    plan.date.includes(search)
  )

  const totalPages = Math.ceil(filteredPlans.length / entries)
  const startIndex = (currentPage - 1) * entries
  const endIndex = startIndex + entries
  const currentPlans = filteredPlans.slice(startIndex, endIndex)

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">IB Plan List</h1>
          <Link to="/admin/ib/plan/add" className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm">Add IB Plan</Link>
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
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs" onClick={() => handleSort('date')}>Date {sortField === 'date' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
                </tr>
              </thead>
              <tbody>
                {currentPlans.map((plan, index) => (
                  <tr key={plan.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="py-0.5 px-2 text-xs">{plan.id}</td>
                    <td className="py-0.5 px-2 text-xs">{plan.planName}</td>
                    <td className="py-0.5 px-2 text-xs">{plan.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-between items-center pt-4 border-t border-black text-xs text-gray-600">
            <div>Showing {currentPlans.length > 0 ? startIndex + 1 : 0} to {Math.min(endIndex, filteredPlans.length)} of {filteredPlans.length} entries</div>
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

export default IBPlan
