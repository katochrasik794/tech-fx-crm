import { useState } from 'react'
import { Link } from 'react-router-dom'
import ResponsiveAdminLayout from '../../../components/ResponsiveAdminLayout'
import { Search, Edit, Trash2, Eye, Settings } from 'lucide-react'

function UserList() {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  
  const usersData = [
    { id: 1, name: 'demo', email: 'har33h@FinCRM.com', phone: '+91 9884543210', country: 'India', walletBalance: 0, ibName: '', registrationDate: '2025-11-06', google2FA: '', marketingName: 'Developer Account' },
    { id: 2, name: 'moazzam hussain', email: 'moazzamjanjua92@gmail.com', phone: '+92 03468783567', country: 'Pakistan', walletBalance: 0, ibName: '', registrationDate: '2025-10-29', google2FA: '', marketingName: '' },
    { id: 3, name: 'real star110', email: 'javaga7582@pih7h.com', phone: '+973 546789169', country: 'Bahrain', walletBalance: 0, ibName: '', registrationDate: '2025-10-28', google2FA: '', marketingName: '' },
    { id: 4, name: 'Satish Hirpara', email: 's.k.hirpara@gmail.com', phone: '09726908414', country: 'India', walletBalance: 0, ibName: '', registrationDate: '2025-10-27', google2FA: '', marketingName: 'John Smith' },
    { id: 5, name: 'Demo User', email: 'democlient@ts.com', phone: '919854745254', country: 'India', walletBalance: 0, ibName: '', registrationDate: '2025-10-10', google2FA: '', marketingName: 'John Smith' },
  ]

  const filteredUsers = usersData.filter(user => 
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.phone.includes(search)
  )

  return (
    <ResponsiveAdminLayout title="User List">
      <div className="w-full max-w-full min-w-0 mb-4 sm:mb-5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm w-full sm:w-auto">
            <span className="whitespace-nowrap">Show</span>
            <select className="border rounded px-2 py-1 text-xs sm:text-sm max-w-full" value={entries} onChange={(e) => setEntries(Number(e.target.value))}>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span className="whitespace-nowrap">entries</span>
          </div>
          <div className="relative w-full sm:w-64 min-w-0">
            <Search className="absolute left-3 top-2.5 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <input type="text" placeholder="Search..." className="w-full min-w-0 pl-9 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 text-xs sm:text-sm border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg sm:rounded-2xl shadow-sm border border-gray-200 mb-4" style={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto', overflowY: 'visible', width: '100%', maxWidth: '100%' }}>
          <table style={{ minWidth: '1400px', width: '100%', tableLayout: 'fixed', display: 'table', margin: 0, borderSpacing: 0, borderCollapse: 'collapse' }}>
          <colgroup>
            <col style={{ width: '50px', minWidth: '50px' }} />
            <col style={{ width: '120px', minWidth: '120px' }} />
            <col style={{ width: '200px', minWidth: '200px' }} />
            <col style={{ width: '120px', minWidth: '120px' }} />
            <col style={{ width: '100px', minWidth: '100px' }} />
            <col style={{ width: '110px', minWidth: '110px' }} />
            <col style={{ width: '100px', minWidth: '100px' }} />
            <col style={{ width: '120px', minWidth: '120px' }} />
            <col style={{ width: '100px', minWidth: '100px' }} />
            <col style={{ width: '120px', minWidth: '120px' }} />
            <col style={{ width: '160px', minWidth: '160px' }} />
            <col style={{ width: '120px', minWidth: '120px' }} />
          </colgroup>
          <thead>
            <tr className="border-y border-black bg-gray-50">
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '50px', minWidth: '50px', maxWidth: '50px', boxSizing: 'border-box' }}>ID</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box' }}>Name</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '200px', minWidth: '200px', maxWidth: '200px', boxSizing: 'border-box' }}>Email</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box' }}>Phone</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box' }}>Country</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '110px', minWidth: '110px', maxWidth: '110px', boxSizing: 'border-box' }}>Wallet Balance</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box' }}>IB Name</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box' }}>Registration Date</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box' }}>Google 2FA</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box' }}>Marketing Name</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '160px', minWidth: '160px', maxWidth: '160px', boxSizing: 'border-box' }}>Action</th>
              <th className="text-left py-1 sm:py-1.5 px-1.5 sm:px-2 font-medium text-gray-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box' }}>Create IB</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.slice(0, entries).map((user, index) => (
              <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '50px', minWidth: '50px', maxWidth: '50px', boxSizing: 'border-box', overflow: 'hidden' }}>{user.id}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box', overflow: 'hidden' }}>{user.name}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-blue-600 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '200px', minWidth: '200px', maxWidth: '200px', boxSizing: 'border-box', overflow: 'hidden' }}>{user.email}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box', overflow: 'hidden' }}>{user.phone}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box', overflow: 'hidden' }}>{user.country}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '110px', minWidth: '110px', maxWidth: '110px', boxSizing: 'border-box', overflow: 'hidden' }}>{user.walletBalance || '-'}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box', overflow: 'hidden' }}>{user.ibName || '-'}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box', overflow: 'hidden' }}>{user.registrationDate}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '100px', minWidth: '100px', maxWidth: '100px', boxSizing: 'border-box', overflow: 'hidden' }}>{user.google2FA || '-'}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box', overflow: 'hidden' }}>{user.marketingName || '-'}</td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '160px', minWidth: '160px', maxWidth: '160px', boxSizing: 'border-box', overflow: 'hidden' }}>
                  <div className="flex gap-0.5 sm:gap-1" style={{ maxWidth: '100%' }}>
                    <Link to="/admin/user/edit" className="p-0.5 sm:p-1 text-violet-500 text-white rounded hover:bg-orange-600 flex-shrink-0"><Edit className="w-2.5 h-2.5 sm:w-3 sm:h-3" /></Link>
                    <Link to="/admin/user/details" className="p-0.5 sm:p-1 text-violet-500 text-white rounded hover:bg-orange-600 flex-shrink-0"><Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3" /></Link>
                    <Link to="/admin/user/settings" className="p-0.5 sm:p-1 text-violet-500 text-white rounded hover:bg-orange-600 flex-shrink-0"><Settings className="w-2.5 h-2.5 sm:w-3 sm:h-3" /></Link>
                    <button className="p-0.5 sm:p-1 text-violet-500 text-white rounded hover:bg-orange-600 flex-shrink-0"><Trash2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" /></button>
                  </div>
                </td>
                <td className="py-1 sm:py-1.5 px-1.5 sm:px-2 text-[10px] sm:text-xs whitespace-nowrap" style={{ width: '120px', minWidth: '120px', maxWidth: '120px', boxSizing: 'border-box', overflow: 'hidden' }}>
                  <button className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-violet-500 text-white rounded hover:bg-orange-600 text-[9px] sm:text-[10px] whitespace-nowrap flex-shrink-0">Promote As IB</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      <div className="w-full max-w-full min-w-0 mt-4 pt-4 border-t border-gray-300 text-xs sm:text-sm text-gray-600">
        Showing 1 to {Math.min(entries, filteredUsers.length)} of {filteredUsers.length} entries
      </div>
    </ResponsiveAdminLayout>
  )
}

export default UserList
