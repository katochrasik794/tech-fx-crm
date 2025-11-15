import { useState } from 'react'
import ResponsiveAdminLayout from '../../../components/ResponsiveAdminLayout'
import { Search } from 'lucide-react'

function IBUsers() {
  const [search, setSearch] = useState('')
  const [sortField, setSortField] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [entries, setEntries] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  
  const ibUsersData = [
    { id: 1, name: 'demo', email: 'har33h@FinCRM.com', phone: '+91 09846543210', country: 'India', ibName: '', totalCommission: 0, availableCommission: 0, marketingName: 'Developer Account' },
    { id: 2, name: 'Demo User', email: 'democlient@ts.com', phone: '919854745254', country: 'India', ibName: '', totalCommission: 0, availableCommission: 0, marketingName: 'John Smith' },
    { id: 3, name: 'Client Name2', email: 'clientname2@testing.com', phone: '9876543212', country: 'India', ibName: '', totalCommission: 0, availableCommission: 0, marketingName: '' },
    { id: 4, name: 'Demo user', email: 'demouser032@demo.com', phone: '09876543210', country: 'India', ibName: '', totalCommission: 0, availableCommission: 0, marketingName: '' },
    { id: 5, name: 'Test user', email: 'testus2er9239@demo23sdw2.com', phone: '09876543210', country: 'India', ibName: '', totalCommission: 0, availableCommission: 0, marketingName: '' },
    { id: 6, name: 'Developer Account', email: 'harsh@FinCRM.com', phone: '09876543210', country: 'India', ibName: '', totalCommission: 0, availableCommission: 0, marketingName: '' },
    { id: 7, name: 'Abhishek', email: 'abhilahk5319@gmail.com', phone: '+91 7218808586', country: 'India', ibName: '', totalCommission: 0, availableCommission: 0, marketingName: '' },
    { id: 8, name: 'Asfa', email: 'asfaazeem6@gmail.com', phone: '+92 3353017487', country: 'Pakistan', ibName: 'Abhishek', totalCommission: 0, availableCommission: 0, marketingName: '' },
    { id: 9, name: 'Bijal TS', email: 'bijal@FinCRM.com', phone: '+91 12334455697', country: 'India', ibName: 'Dev Account 2', totalCommission: 0, availableCommission: 0, marketingName: '' },
    { id: 10, name: 'Dev Account 2', email: 'patelsinoli@gmail.com', phone: '+91 9854824183', country: 'India', ibName: 'Dev Account', totalCommission: 0, availableCommission: 0, marketingName: 'John Smith' },
    { id: 11, name: 'Test User 11', email: 'test11@demo.com', phone: '09876543211', country: 'India', ibName: '', totalCommission: 0, availableCommission: 0, marketingName: '' },
    { id: 12, name: 'Test User 12', email: 'test12@demo.com', phone: '09876543212', country: 'India', ibName: '', totalCommission: 0, availableCommission: 0, marketingName: '' },
    { id: 13, name: 'Test User 13', email: 'test13@demo.com', phone: '09876543213', country: 'India', ibName: '', totalCommission: 0, availableCommission: 0, marketingName: '' },
  ]

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
  }

  const sortedUsers = [...ibUsersData].sort((a, b) => {
    if (!sortField) return 0
    const aVal = sortField === 'id' ? a[sortField] : (a[sortField]?.toLowerCase() || '')
    const bVal = sortField === 'id' ? b[sortField] : (b[sortField]?.toLowerCase() || '')
    if (sortOrder === 'asc') return aVal > bVal ? 1 : -1
    return aVal < bVal ? 1 : -1
  })

  const filteredUsers = sortedUsers.filter(user => 
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.phone.includes(search) ||
    user.country.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filteredUsers.length / entries)
  const startIndex = (currentPage - 1) * entries
  const endIndex = startIndex + entries
  const currentUsers = filteredUsers.slice(startIndex, endIndex)

  const handleCopy = (link) => {
    navigator.clipboard.writeText(link)
    alert('Link copied to clipboard!')
  }

  return (
    <ResponsiveAdminLayout title="IB User List">
      <div className="w-full max-w-full min-w-0 mb-4 sm:mb-5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm w-full sm:w-auto">
            <span className="whitespace-nowrap">Show</span>
            <select className="border rounded px-2 py-1 text-xs sm:text-sm max-w-full" value={entries} onChange={(e) => { setEntries(Number(e.target.value)); setCurrentPage(1); }}>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span className="whitespace-nowrap">entries</span>
            <button className="ml-2 sm:ml-4 px-3 sm:px-4 py-1.5 sm:py-2 text-violet-500 text-white rounded hover:bg-orange-600 text-xs sm:text-sm whitespace-nowrap">Excel</button>
          </div>
          <div className="relative w-full sm:w-64 min-w-0">
            <Search className="absolute left-3 top-2.5 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <input type="text" placeholder="Search..." className="w-full min-w-0 pl-9 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 text-xs sm:text-sm border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg sm:rounded-2xl shadow-sm border border-gray-200 mb-4" style={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
        <div className="responsive-table-container" style={{ overflowX: 'auto', overflowY: 'visible', width: '100%', maxWidth: '100%', minWidth: 0 }}>
          <table style={{ width: '100%', tableLayout: 'fixed', display: 'table', margin: 0, borderSpacing: 0, borderCollapse: 'collapse' }}>
          <colgroup>
            <col style={{ width: '4%', minWidth: '40px' }} />
            <col style={{ width: '8%', minWidth: '80px' }} />
            <col style={{ width: '12%', minWidth: '120px' }} />
            <col style={{ width: '8%', minWidth: '80px' }} />
            <col style={{ width: '6%', minWidth: '60px' }} />
            <col style={{ width: '8%', minWidth: '80px' }} />
            <col style={{ width: '9%', minWidth: '90px' }} />
            <col style={{ width: '9%', minWidth: '90px' }} />
            <col style={{ width: '7%', minWidth: '70px' }} />
            <col style={{ width: '9%', minWidth: '90px' }} />
            <col style={{ width: '20%', minWidth: '200px' }} />
          </colgroup>
          <thead>
            <tr className="border-y border-black bg-gray-50">
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 cursor-pointer text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box' }} onClick={() => handleSort('id')}>ID {sortField === 'id' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 cursor-pointer text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box' }} onClick={() => handleSort('name')}>Name {sortField === 'name' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 cursor-pointer text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box' }} onClick={() => handleSort('email')}>Email {sortField === 'email' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 cursor-pointer text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box' }} onClick={() => handleSort('phone')}>Phone {sortField === 'phone' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 cursor-pointer text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box' }} onClick={() => handleSort('country')}>Country {sortField === 'country' && (sortOrder === 'desc' ? '↓' : '↑')}</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box' }}>IB Name</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box' }}>Total Commission</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box' }}>Available Commission</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box' }}>Refferal Link</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box' }}>Marketing Name</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box', overflow: 'hidden' }}>{user.id}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box', overflow: 'hidden' }}>{user.name}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-blue-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box', overflow: 'hidden' }}>{user.email}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box', overflow: 'hidden' }}>{user.phone}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box', overflow: 'hidden' }}>{user.country}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box', overflow: 'hidden' }}>{user.ibName || '-'}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box', overflow: 'hidden' }}>{user.totalCommission}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box', overflow: 'hidden' }}>{user.availableCommission}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box', overflow: 'hidden' }}>
                  <button onClick={() => handleCopy(`https://example.com/ref/${user.id}`)} className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-violet-500 text-white rounded hover:bg-orange-600 text-[9px] sm:text-[10px] whitespace-nowrap">Copy</button>
                </td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box', overflow: 'hidden' }}>{user.marketingName || '-'}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ boxSizing: 'border-box', overflow: 'hidden' }}>
                  <div className="flex gap-0.5 sm:gap-1 flex-wrap" style={{ maxWidth: '100%' }}>
                    <button className="px-1 sm:px-1.5 py-0.5 sm:py-1 text-violet-500 text-white rounded hover:bg-orange-600 text-[9px] sm:text-[10px] whitespace-nowrap flex-shrink-0">View Level</button>
                    <button className="px-1 sm:px-1.5 py-0.5 sm:py-1 text-violet-500 text-white rounded hover:bg-orange-600 text-[9px] sm:text-[10px] whitespace-nowrap flex-shrink-0">View Commission</button>
                    <button className="px-1 sm:px-1.5 py-0.5 sm:py-1 text-violet-500 text-white rounded hover:bg-orange-600 text-[9px] sm:text-[10px] whitespace-nowrap flex-shrink-0">Tree Chart</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      <div className="w-full max-w-full min-w-0 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300 text-xs sm:text-sm text-gray-600">
        <div className="whitespace-nowrap">Showing {startIndex + 1} to {Math.min(endIndex, filteredUsers.length)} of {filteredUsers.length} entries</div>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto justify-center sm:justify-end">
          <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="px-2 sm:px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 text-xs sm:text-sm whitespace-nowrap">Previous</button>
          {[...Array(totalPages)].map((_, i) => (
            <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`px-2 sm:px-3 py-1 border rounded text-xs sm:text-sm whitespace-nowrap ${currentPage === i + 1 ? 'text-violet-500 text-white' : 'hover:bg-gray-100'}`}>{i + 1}</button>
          ))}
          <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="px-2 sm:px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 text-xs sm:text-sm whitespace-nowrap">Next</button>
        </div>
      </div>
    </ResponsiveAdminLayout>
  )
}

export default IBUsers
