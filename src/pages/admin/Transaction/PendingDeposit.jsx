import { useState } from 'react'
import ResponsiveAdminLayout from '../../../components/ResponsiveAdminLayout'
import ResponsiveTable from '../../../components/ResponsiveTable'
import { Search } from 'lucide-react'

function PendingDeposit() {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  
  const pendingData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', mt5Id: '1001234', amount: 1000, method: 'Bank Transfer', date: '2025-11-10' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', mt5Id: '1001235', amount: 500, method: 'Credit Card', date: '2025-11-09' },
  ]

  const filteredData = pendingData.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase())
  )

  const handleApprove = (id) => {
    console.log('Approve:', id)
  }

  const handleReject = (id) => {
    console.log('Reject:', id)
  }

  return (
    <ResponsiveAdminLayout title="Pending Deposit">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div className="flex items-center gap-1.5 text-xs sm:text-sm">
          <span>Show</span>
          <select className="border rounded px-1.5 py-0.5 text-xs sm:text-sm" value={entries} onChange={(e) => setEntries(Number(e.target.value))}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <span>entries</span>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-1.5 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Search..." className="w-full pl-7 pr-3 py-1 text-xs sm:text-sm border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>
      <ResponsiveTable>
        <table className="w-full">
              <thead>
                <tr className="border-y border-black">
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">ID</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Name</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Email</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">MT5 ID</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Amount</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Method</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Date</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.slice(0, entries).map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="py-0.5 px-2 text-xs">{item.id}</td>
                    <td className="py-0.5 px-2 text-xs">{item.name}</td>
                    <td className="py-0.5 px-2 text-blue-600 text-xs">{item.email}</td>
                    <td className="py-0.5 px-2 text-xs">{item.mt5Id}</td>
                    <td className="py-0.5 px-2 text-xs">${item.amount}</td>
                    <td className="py-0.5 px-2 text-xs">{item.method}</td>
                    <td className="py-0.5 px-2 text-xs">{item.date}</td>
                    <td className="py-0.5 px-2 text-xs">
                      <div className="flex gap-1">
                        <button onClick={() => handleApprove(item.id)} className="px-2 py-0.5 bg-green-500 text-white rounded hover:bg-green-600 text-xs">Approve</button>
                        <button onClick={() => handleReject(item.id)} className="px-2 py-0.5 bg-red-500 text-white rounded hover:bg-red-600 text-xs">Reject</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
        </table>
      </ResponsiveTable>
      <div className="mt-4 pt-4 border-t border-black text-xs sm:text-sm text-gray-600">
        Showing 1 to {Math.min(entries, filteredData.length)} of {filteredData.length} entries
      </div>
    </ResponsiveAdminLayout>
  )
}

export default PendingDeposit
