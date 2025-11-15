import { Search } from 'lucide-react'
import { useState } from 'react'
import ResponsiveAdminLayout from '../../../components/ResponsiveAdminLayout'
import ResponsiveTable from '../../../components/ResponsiveTable'

function Accounts() {
  const [searchTerm, setSearchTerm] = useState('')

  const accounts = [
    { id: '#100007814', user: 'John Doe', type: 'MT5', platform: 'Prime', balance: '$1,234', leverage: '1:300' },
    { id: '#100007786', user: 'Jane Smith', type: 'MT5', platform: 'Prime', balance: '$5,678', leverage: '1:500' },
    { id: '#100007771', user: 'Bob Johnson', type: 'MT5', platform: 'Prime', balance: '$890', leverage: '1:100' }
  ]

  return (
    <ResponsiveAdminLayout title="Accounts Management">
      <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search accounts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      <ResponsiveTable>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold">Account ID</th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold">User</th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold">Type</th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold">Platform</th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold">Balance</th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold">Leverage</th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr key={account.id} className="border-b">
                <td className="px-2 sm:px-4 py-3 font-semibold text-xs sm:text-sm">{account.id}</td>
                <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm">{account.user}</td>
                <td className="px-2 sm:px-4 py-3 text-gray-600 text-xs sm:text-sm">{account.type}</td>
                <td className="px-2 sm:px-4 py-3 text-gray-600 text-xs sm:text-sm">{account.platform}</td>
                <td className="px-2 sm:px-4 py-3 font-bold text-xs sm:text-sm">{account.balance}</td>
                <td className="px-2 sm:px-4 py-3 text-gray-600 text-xs sm:text-sm">{account.leverage}</td>
                <td className="px-2 sm:px-4 py-3">
                  <button className="text-orange-500 hover:text-orange-600 text-xs sm:text-sm font-semibold">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ResponsiveTable>
    </ResponsiveAdminLayout>
  )
}

export default Accounts
