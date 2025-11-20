import { Search, Filter } from 'lucide-react'
import { useState } from 'react'
import ResponsiveAdminLayout from '../../../components/ResponsiveAdminLayout'
import ResponsiveTable from '../../../components/ResponsiveTable'

function Users() {
  const [searchTerm, setSearchTerm] = useState('')

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', balance: '$1,234' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active', balance: '$5,678' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Inactive', balance: '$890' }
  ]

  return (
    <ResponsiveAdminLayout title="Users Management">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 sm:pl-10 pr-4 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 text-xs sm:text-sm border rounded-lg hover:bg-gray-50 whitespace-nowrap">
          <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
          Filter
        </button>
      </div>

      <ResponsiveTable>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold">Name</th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold">Email</th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold">Status</th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold">Balance</th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="px-2 sm:px-4 py-3 font-semibold text-xs sm:text-sm">{user.name}</td>
                <td className="px-2 sm:px-4 py-3 text-gray-600 text-xs sm:text-sm">{user.email}</td>
                <td className="px-2 sm:px-4 py-3">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs ${
                    user.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-2 sm:px-4 py-3 font-bold text-xs sm:text-sm">{user.balance}</td>
                <td className="px-2 sm:px-4 py-3">
                  <button className="text-violet-500 hover:text-orange-600 text-xs sm:text-sm font-semibold">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ResponsiveTable>
    </ResponsiveAdminLayout>
  )
}

export default Users
