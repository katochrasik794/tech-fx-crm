import { useState } from 'react'
import ResponsiveAdminLayout from '../../../components/ResponsiveAdminLayout'
import { Search, Eye, Settings, TrendingUp } from 'lucide-react'

function MT5UserList() {
  const [search, setSearch] = useState('')
  const accounts = [
    { id: 1, login: '1001234', name: 'John Doe', type: 'Live', balance: 5000, equity: 5200, leverage: '1:500', group: 'Standard', status: 'Active' },
    { id: 2, login: '1001235', name: 'Jane Smith', type: 'Demo', balance: 10000, equity: 10500, leverage: '1:100', group: 'Premium', status: 'Active' },
    { id: 3, login: '1001236', name: 'Mike Johnson', type: 'Live', balance: 3000, equity: 2800, leverage: '1:200', group: 'VIP', status: 'Active' },
  ]

  return (
    <ResponsiveAdminLayout title="MT5 User List">
      <div className="mb-3 sm:mb-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-2.5 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          <input type="text" placeholder="Search MT5 accounts..." className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2.5 text-xs sm:text-sm border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>
      <div className="bg-white rounded-lg sm:rounded-2xl shadow-sm border border-gray-200 mb-4" style={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
        <div className="responsive-table-container" style={{ overflowX: 'auto', overflowY: 'visible', width: '100%', maxWidth: '100%', minWidth: 0 }}>
          <table style={{ minWidth: '1000px', tableLayout: 'fixed', width: '1000px', display: 'table', margin: 0, borderSpacing: 0, borderCollapse: 'collapse' }}>
          <colgroup>
            <col style={{ width: '100px', minWidth: '100px' }} />
            <col style={{ width: '120px', minWidth: '120px' }} />
            <col style={{ width: '80px', minWidth: '80px' }} />
            <col style={{ width: '110px', minWidth: '110px' }} />
            <col style={{ width: '110px', minWidth: '110px' }} />
            <col style={{ width: '90px', minWidth: '90px' }} />
            <col style={{ width: '100px', minWidth: '100px' }} />
            <col style={{ width: '90px', minWidth: '90px' }} />
            <col style={{ width: '120px', minWidth: '120px' }} />
          </colgroup>
          <thead>
            <tr className="border-y border-black bg-gray-50">
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box' }}>Login</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box' }}>Name</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '80px', minWidth: '80px', maxWidth: '80px', boxSizing: 'border-box' }}>Type</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '110px', minWidth: '110px', maxWidth: '110px', boxSizing: 'border-box' }}>Balance</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '110px', minWidth: '110px', maxWidth: '110px', boxSizing: 'border-box' }}>Equity</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '90px', minWidth: '90px', maxWidth: '90px', boxSizing: 'border-box' }}>Leverage</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box' }}>Group</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '90px', minWidth: '90px', maxWidth: '90px', boxSizing: 'border-box' }}>Status</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((acc, index) => (
              <tr key={acc.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box', overflow: 'hidden' }}>{acc.login}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box', overflow: 'hidden' }}>{acc.name}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '80px', minWidth: '80px', maxWidth: '80px', boxSizing: 'border-box', overflow: 'hidden' }}>
                  <span className={`px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] whitespace-nowrap ${acc.type === 'Live' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>{acc.type}</span>
                </td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '110px', minWidth: '110px', maxWidth: '110px', boxSizing: 'border-box', overflow: 'hidden' }}>${acc.balance.toLocaleString()}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '110px', minWidth: '110px', maxWidth: '110px', boxSizing: 'border-box', overflow: 'hidden' }}>${acc.equity.toLocaleString()}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '90px', minWidth: '90px', maxWidth: '90px', boxSizing: 'border-box', overflow: 'hidden' }}>{acc.leverage}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box', overflow: 'hidden' }}>
                  <span className="px-1.5 sm:px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-[9px] sm:text-[10px] whitespace-nowrap">{acc.group}</span>
                </td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '90px', minWidth: '90px', maxWidth: '90px', boxSizing: 'border-box', overflow: 'hidden' }}>
                  <span className="px-1.5 sm:px-2 py-0.5 bg-green-100 text-green-700 rounded text-[9px] sm:text-[10px] whitespace-nowrap">{acc.status}</span>
                </td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box', overflow: 'hidden' }}>
                  <div className="flex gap-0.5 sm:gap-1" style={{ maxWidth: '100%' }}>
                    <button className="p-0.5 sm:p-1 hover:bg-blue-50 rounded flex-shrink-0"><Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600" /></button>
                    <button className="p-0.5 sm:p-1 hover:bg-orange-50 rounded flex-shrink-0"><Settings className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-600" /></button>
                    <button className="p-0.5 sm:p-1 hover:bg-green-50 rounded flex-shrink-0"><TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </ResponsiveAdminLayout>
  )
}

export default MT5UserList
