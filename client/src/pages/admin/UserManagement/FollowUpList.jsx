import { useState } from 'react'
import ResponsiveAdminLayout from '../../../components/ResponsiveAdminLayout'
import { Search } from 'lucide-react'

function FollowUpList() {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  const [sortField, setSortField] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [currentPage, setCurrentPage] = useState(1)
  
  const followUpsData = [
    { id: 1, name: 'demo', email: 'har33h@FinCRM.com', phone: '+91 09884543210', country: 'India', date: '2025-11-06', marketingName: 'Developer Account' },
    { id: 2, name: 'moazzam hussain', email: 'moazzamjanjua92@gmail.com', phone: '+92 03468783587', country: 'Pakistan', date: '2025-10-29', marketingName: '' },
    { id: 3, name: 'real star110', email: 'javaga7582@pih7h.com', phone: '+973 546789169', country: 'Bahrain', date: '2025-10-28', marketingName: '' },
    { id: 4, name: 'Satish Hirpara', email: 's.k.hirpara@gmail.com', phone: '09726908414', country: 'India', date: '2025-10-27', marketingName: 'John Smith' },
    { id: 5, name: 'Demo User', email: 'democlient@ts.com', phone: '919854745254', country: 'India', date: '2025-10-10', marketingName: 'John Smith' },
    { id: 6, name: 'Client Name', email: 'clientname@testing.com', phone: '9876543210', country: 'India', date: '2025-09-24', marketingName: 'John Smith' },
    { id: 7, name: 'Test', email: 'test@gmail.com', phone: '08123123238', country: 'Albania', date: '2025-09-23', marketingName: 'marketinguser' },
    { id: 8, name: 'Client Name2', email: 'clientname2@testing.com', phone: '9876543212', country: 'India', date: '2025-09-08', marketingName: '' },
    { id: 9, name: 'David', email: 'info@earnexmarkets.com', phone: '+350 56855000', country: 'Gibraltar', date: '2025-09-05', marketingName: '' },
    { id: 10, name: 'Ahmed Masroor', email: 'diboy8424i@echoublog.com', phone: '+971 554401234', country: 'United Arab Emirates', date: '2025-08-24', marketingName: '' },
  ]

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
  }

  const sortedFollowUps = [...followUpsData].sort((a, b) => {
    if (!sortField) return 0
    const aVal = sortField === 'id' ? a[sortField] : (a[sortField]?.toLowerCase() || '')
    const bVal = sortField === 'id' ? b[sortField] : (b[sortField]?.toLowerCase() || '')
    if (sortOrder === 'asc') return aVal > bVal ? 1 : -1
    return aVal < bVal ? 1 : -1
  })

  const filteredFollowUps = sortedFollowUps.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filteredFollowUps.length / entries)
  const startIndex = (currentPage - 1) * entries
  const endIndex = startIndex + entries
  const currentData = filteredFollowUps.slice(startIndex, endIndex)

  return (
    <ResponsiveAdminLayout title="Follow Up List">
      <div className="w-full max-w-full min-w-0 mb-4 sm:mb-5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm w-full sm:w-auto">
            <span className="whitespace-nowrap">Show</span>
            <select className="border rounded px-2 py-1 text-xs sm:text-sm max-w-full" value={entries} onChange={(e) => { setEntries(Number(e.target.value)); setCurrentPage(1); }}>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span className="whitespace-nowrap">entries</span>
            <button className="ml-2 sm:ml-4 px-3 sm:px-4 py-1.5 sm:py-2 text-violet-500 text-white rounded hover:bg-orange-600 text-xs sm:text-sm whitespace-nowrap">Excel</button>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto min-w-0">
            <span className="text-xs sm:text-sm whitespace-nowrap flex-shrink-0">Search:</span>
            <div className="relative flex-1 sm:w-64 min-w-0">
              <Search className="absolute left-3 top-2.5 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input type="text" className="w-full min-w-0 pl-9 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 text-xs sm:text-sm border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg sm:rounded-2xl shadow-sm border border-gray-200 mb-4" style={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
        <div className="responsive-table-container" style={{ overflowX: 'auto', overflowY: 'visible', width: '100%', maxWidth: '100%', minWidth: 0 }}>
          <table style={{ minWidth: '1000px', tableLayout: 'fixed', width: '1000px', display: 'table', margin: 0, borderSpacing: 0, borderCollapse: 'collapse' }}>
          <colgroup>
            <col style={{ width: '50px', minWidth: '50px' }} />
            <col style={{ width: '130px', minWidth: '130px' }} />
            <col style={{ width: '240px', minWidth: '240px' }} />
            <col style={{ width: '130px', minWidth: '130px' }} />
            <col style={{ width: '130px', minWidth: '130px' }} />
            <col style={{ width: '100px', minWidth: '100px' }} />
            <col style={{ width: '120px', minWidth: '120px' }} />
          </colgroup>
          <thead>
            <tr className="border-y border-black bg-gray-50">
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 cursor-pointer text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '50px', minWidth: '50px', maxWidth: '50px', boxSizing: 'border-box' }} onClick={() => handleSort('id')}>ID {sortField === 'id' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 cursor-pointer text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '130px', minWidth: '130px', maxWidth: '130px', boxSizing: 'border-box' }} onClick={() => handleSort('name')}>Name {sortField === 'name' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 cursor-pointer text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '240px', minWidth: '240px', maxWidth: '240px', boxSizing: 'border-box' }} onClick={() => handleSort('email')}>Email {sortField === 'email' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '130px', minWidth: '130px', maxWidth: '130px', boxSizing: 'border-box' }}>Phone</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '130px', minWidth: '130px', maxWidth: '130px', boxSizing: 'border-box' }}>Country</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box' }}>Date</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box' }}>Marketing Name</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '50px', minWidth: '50px', maxWidth: '50px', boxSizing: 'border-box', overflow: 'hidden' }}>{item.id}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '130px', minWidth: '130px', maxWidth: '130px', boxSizing: 'border-box', overflow: 'hidden' }}>{item.name}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-blue-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '240px', minWidth: '240px', maxWidth: '240px', boxSizing: 'border-box', overflow: 'hidden' }}>{item.email}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '130px', minWidth: '130px', maxWidth: '130px', boxSizing: 'border-box', overflow: 'hidden' }}>{item.phone}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '130px', minWidth: '130px', maxWidth: '130px', boxSizing: 'border-box', overflow: 'hidden' }}>{item.country}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box', overflow: 'hidden' }}>{item.date}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box', overflow: 'hidden' }}>{item.marketingName || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      <div className="w-full max-w-full min-w-0 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300 text-xs sm:text-sm text-gray-600">
        <div className="whitespace-nowrap">Showing {currentData.length > 0 ? startIndex + 1 : 0} to {Math.min(endIndex, filteredFollowUps.length)} of {filteredFollowUps.length} entries</div>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto justify-center sm:justify-end">
          <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="px-2 sm:px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 text-xs sm:text-sm whitespace-nowrap">Previous</button>
          {[...Array(totalPages)].map((_, i) => {
            const pageNum = i + 1
            if (pageNum === 1 || pageNum === totalPages || (pageNum >= currentPage - 2 && pageNum <= currentPage + 2)) {
              return (
                <button key={pageNum} onClick={() => setCurrentPage(pageNum)} className={`px-2 sm:px-3 py-1 border rounded text-xs sm:text-sm whitespace-nowrap ${currentPage === pageNum ? 'text-violet-500 text-white' : 'hover:bg-gray-100'}`}>{pageNum}</button>
              )
            } else if (pageNum === currentPage - 3 || pageNum === currentPage + 3) {
              return <button key={pageNum} disabled className="px-2 sm:px-3 py-1 border rounded text-xs sm:text-sm opacity-50 whitespace-nowrap">...</button>
            }
            return null
          })}
          <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="px-2 sm:px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 text-xs sm:text-sm whitespace-nowrap">Next</button>
        </div>
      </div>
    </ResponsiveAdminLayout>
  )
}

export default FollowUpList
