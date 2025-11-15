import { useState } from 'react'
import ResponsiveAdminLayout from '../../../components/ResponsiveAdminLayout'
import { Search } from 'lucide-react'

function MarketingList() {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  
  const marketingData = [
    { serial: 1, name: 'Developer Account', email: 'harsh@techysquad.com', phone: '932883933', walletBalance: 0, incentive: 1, netDeposit: 10000, totalClients: 1, totalDeposit: 0, totalWithdraw: 0, password: '12345678', role: 'Team Manager', managerName: '' },
    { serial: 2, name: 'new marketting', email: 'newmarketinguserdemo@gmail.com', phone: '923932023', walletBalance: 0, incentive: 1, netDeposit: 10000, totalClients: 1, totalDeposit: 0, totalWithdraw: 0, password: '12345678', role: 'Team Manager', managerName: '' },
    { serial: 3, name: 'marketinguser', email: 'demo@marketinguser.com', phone: '09876543210', walletBalance: 0, incentive: 2, netDeposit: 10000, totalClients: 1, totalDeposit: 0, totalWithdraw: 0, password: 'De0e@23je9d932', role: 'Team Manager', managerName: '' },
    { serial: 4, name: 'Paul Wilson', email: 'tsmarketing@techysquad.com', phone: '9999999999', walletBalance: 0, incentive: 3, netDeposit: 2000, totalClients: 0, totalDeposit: 0, totalWithdraw: 0, password: 'Marketing@321', role: 'Team Manager', managerName: '' },
    { serial: 5, name: 'John Smith', email: 'marketing@techysquad.com', phone: '8888888888', walletBalance: 0, incentive: 2, netDeposit: 1000, totalClients: 70, totalDeposit: 24450, totalWithdraw: 6940, password: 'Marketing@321', role: 'Team Manager', managerName: '' },
  ]

  const filteredData = marketingData.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filteredData.length / entries)
  const startIndex = (currentPage - 1) * entries
  const currentData = filteredData.slice(startIndex, startIndex + entries)

  return (
    <ResponsiveAdminLayout title="Marketing List">
      <div className="w-full max-w-full min-w-0 mb-4 sm:mb-5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm w-full sm:w-auto">
            <span className="whitespace-nowrap">Show</span>
            <select className="border rounded px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs sm:text-sm max-w-full" value={entries} onChange={(e) => { setEntries(Number(e.target.value)); setCurrentPage(1); }}>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span className="whitespace-nowrap">entries</span>
          </div>
          <div className="relative w-full sm:w-64 min-w-0">
            <Search className="absolute left-2 sm:left-3 top-1.5 sm:top-2.5 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <input type="text" placeholder="Search..." className="w-full min-w-0 pl-7 sm:pl-9 sm:pl-10 pr-3 sm:pr-4 py-1 sm:py-1.5 text-xs sm:text-sm border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg sm:rounded-2xl shadow-sm border border-gray-200 mb-4" style={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto', overflowY: 'visible', width: '100%', maxWidth: '100%', minWidth: 0 }}>
          <table style={{ minWidth: '1600px', tableLayout: 'fixed', width: '1600px', display: 'table', margin: 0, borderSpacing: 0, borderCollapse: 'collapse' }}>
          <colgroup>
            <col style={{ width: '60px', minWidth: '60px' }} />
            <col style={{ width: '120px', minWidth: '120px' }} />
            <col style={{ width: '180px', minWidth: '180px' }} />
            <col style={{ width: '100px', minWidth: '100px' }} />
            <col style={{ width: '100px', minWidth: '100px' }} />
            <col style={{ width: '80px', minWidth: '80px' }} />
            <col style={{ width: '120px', minWidth: '120px' }} />
            <col style={{ width: '90px', minWidth: '90px' }} />
            <col style={{ width: '100px', minWidth: '100px' }} />
            <col style={{ width: '100px', minWidth: '100px' }} />
            <col style={{ width: '120px', minWidth: '120px' }} />
            <col style={{ width: '100px', minWidth: '100px' }} />
            <col style={{ width: '100px', minWidth: '100px' }} />
            <col style={{ width: '130px', minWidth: '130px' }} />
            <col style={{ width: '120px', minWidth: '120px' }} />
          </colgroup>
          <thead>
            <tr className="border-y border-black bg-gray-50">
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '60px', minWidth: '60px', maxWidth: '60px', boxSizing: 'border-box' }}>Serial No.</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box' }}>Name</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '180px', minWidth: '180px', maxWidth: '180px', boxSizing: 'border-box' }}>Email</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box' }}>Phone</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box' }}>Wallet Balance</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '80px', minWidth: '80px', maxWidth: '80px', boxSizing: 'border-box' }}>Incentive (%)</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box' }}>Net Deposit (Monthly)</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '90px', minWidth: '90px', maxWidth: '90px', boxSizing: 'border-box' }}>Total Clients</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box' }}>Total Deposit</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box' }}>Total Withdraw</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box' }}>Password</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box' }}>Role</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box' }}>Manager Name</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '130px', minWidth: '130px', maxWidth: '130px', boxSizing: 'border-box' }}>Action</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box' }}>Permission</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={item.serial} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '60px', minWidth: '60px', maxWidth: '60px', boxSizing: 'border-box', overflow: 'hidden' }}>{item.serial}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-blue-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box', overflow: 'hidden' }}>{item.name}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '180px', minWidth: '180px', maxWidth: '180px', boxSizing: 'border-box', overflow: 'hidden' }}>{item.email}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box', overflow: 'hidden' }}>{item.phone}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box', overflow: 'hidden' }}>{item.walletBalance}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '80px', minWidth: '80px', maxWidth: '80px', boxSizing: 'border-box', overflow: 'hidden' }}>{item.incentive}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-blue-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box', overflow: 'hidden' }}>{item.netDeposit}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '90px', minWidth: '90px', maxWidth: '90px', boxSizing: 'border-box', overflow: 'hidden' }}>
                  <span className="px-1 sm:px-1.5 py-0.5 bg-orange-500 text-white rounded text-[9px] sm:text-[10px] whitespace-nowrap">{item.totalClients}</span>
                </td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box', overflow: 'hidden' }}>
                  <span className="px-1 sm:px-1.5 py-0.5 bg-orange-500 text-white rounded text-[9px] sm:text-[10px] whitespace-nowrap">{item.totalDeposit}</span>
                </td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box', overflow: 'hidden' }}>
                  <span className="px-1 sm:px-1.5 py-0.5 bg-orange-500 text-white rounded text-[9px] sm:text-[10px] whitespace-nowrap">{item.totalWithdraw}</span>
                </td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box', overflow: 'hidden' }}>{item.password}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box', overflow: 'hidden' }}>{item.role}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box', overflow: 'hidden' }}>{item.managerName || '-'}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '130px', minWidth: '130px', maxWidth: '130px', boxSizing: 'border-box', overflow: 'hidden' }}>
                  <div className="flex gap-0.5 sm:gap-1" style={{ maxWidth: '100%' }}>
                    <button className="px-1.5 sm:px-2 py-0.5 bg-orange-500 text-white rounded hover:bg-orange-600 text-[9px] sm:text-[10px] whitespace-nowrap flex-shrink-0">Edit</button>
                    <button className="px-1.5 sm:px-2 py-0.5 bg-orange-500 text-white rounded hover:bg-orange-600 text-[9px] sm:text-[10px] whitespace-nowrap flex-shrink-0">Delete</button>
                  </div>
                </td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box', overflow: 'hidden' }}>
                  <button className="px-1.5 sm:px-2 py-0.5 bg-orange-500 text-white rounded hover:bg-orange-600 text-[9px] sm:text-[10px] whitespace-nowrap flex-shrink-0">Edit Permission</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      <div className="w-full max-w-full min-w-0 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300 text-xs sm:text-sm text-gray-600">
        <div className="whitespace-nowrap">Showing {startIndex + 1} to {Math.min(startIndex + entries, filteredData.length)} of {filteredData.length} entries</div>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto justify-center sm:justify-end">
          <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="px-2 sm:px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 text-xs sm:text-sm whitespace-nowrap">Previous</button>
          {[...Array(totalPages)].map((_, i) => (
            <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`px-2 sm:px-3 py-1 border rounded text-xs sm:text-sm whitespace-nowrap ${currentPage === i + 1 ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'}`}>{i + 1}</button>
          ))}
          <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="px-2 sm:px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 text-xs sm:text-sm whitespace-nowrap">Next</button>
        </div>
      </div>
    </ResponsiveAdminLayout>
  )
}

export default MarketingList
