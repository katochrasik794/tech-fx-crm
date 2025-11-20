import { Search, CheckCircle, XCircle } from 'lucide-react'
import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'

function Withdrawals() {
  const [searchTerm, setSearchTerm] = useState('')

  const withdrawals = [
    { id: '#27', user: 'John Doe', method: 'Bank Transfer', amount: 500, status: 'Pending', date: 'Nov 12, 2025' },
    { id: '#26', user: 'Jane Smith', method: 'Cash', amount: 300, status: 'Approved', date: 'Nov 11, 2025' },
    { id: '#25', user: 'Bob Johnson', method: 'USDT', amount: 1000, status: 'Rejected', date: 'Nov 10, 2025' }
  ]

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 ml-64 p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Withdrawals Management</h1>
      
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search withdrawals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">ID</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">User</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Method</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Amount</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {withdrawals.map((withdrawal) => (
                <tr key={withdrawal.id} className="border-b">
                  <td className="px-4 py-3 font-semibold">{withdrawal.id}</td>
                  <td className="px-4 py-3">{withdrawal.user}</td>
                  <td className="px-4 py-3 text-gray-600">{withdrawal.method}</td>
                  <td className="px-4 py-3 font-bold text-orange-600">${withdrawal.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      withdrawal.status === 'Approved' ? 'bg-green-100 text-green-600' :
                      withdrawal.status === 'Pending' ? 'bg-orange-100 text-orange-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      {withdrawal.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{withdrawal.date}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-green-50 rounded">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </button>
                      <button className="p-1 hover:bg-red-50 rounded">
                        <XCircle className="w-5 h-5 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Withdrawals
