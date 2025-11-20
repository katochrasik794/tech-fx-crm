import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'
import { Search } from 'lucide-react'

function PendingWithdraw() {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  
  const pendingData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', mt5Id: '1001234', amount: 500, method: 'Bank Transfer', date: '2025-11-10' },
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
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">Pending Withdraw</h1>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-1.5 text-xs">
              <span>Show</span>
              <select className="border rounded px-1.5 py-0.5 text-xs" value={entries} onChange={(e) => setEntries(Number(e.target.value))}>
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
          </div>
          <div className="mt-4 pt-4 border-t border-black text-xs text-gray-600">
            Showing 1 to {Math.min(entries, filteredData.length)} of {filteredData.length} entries
          </div>
        </div>
      </div>
    </div>
  )
}

export default PendingWithdraw
