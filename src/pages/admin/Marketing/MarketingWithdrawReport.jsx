import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'
import { Search } from 'lucide-react'

function MarketingWithdrawReport() {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  
  const withdrawData = [
    { serial: 1, name: 'John Smith', email: 'john@marketing.com', withdrawFrom: 'Incentive Wallet', withdrawTo: 'Bank Account', amount: 1250, note: 'Monthly payout', comment: 'Approved by admin', status: 'Completed', date: '2025-11-10' },
    { serial: 2, name: 'Jane Doe', email: 'jane@marketing.com', withdrawFrom: 'Commission Wallet', withdrawTo: 'PayPal', amount: 840, note: 'Bonus withdrawal', comment: 'Verified', status: 'Pending', date: '2025-11-08' },
  ]

  const filteredData = withdrawData.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">Marketing Withdraw Report</h1>
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
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Serial No.</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Name/Email</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Withdraw From</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Withdraw To</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Amount</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Note</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Comment</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Status</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Date</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.slice(0, entries).map((item, index) => (
                  <tr key={item.serial} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="py-0.5 px-2 text-xs">{item.serial}</td>
                    <td className="py-0.5 px-2 text-xs">
                      <div>{item.name}</div>
                      <div className="text-blue-600">{item.email}</div>
                    </td>
                    <td className="py-0.5 px-2 text-xs">{item.withdrawFrom}</td>
                    <td className="py-0.5 px-2 text-xs">{item.withdrawTo}</td>
                    <td className="py-0.5 px-2 text-xs">${item.amount}</td>
                    <td className="py-0.5 px-2 text-xs">{item.note}</td>
                    <td className="py-0.5 px-2 text-xs">{item.comment}</td>
                    <td className="py-0.5 px-2 text-xs"><span className={`px-1.5 py-0.5 rounded text-xs ${item.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{item.status}</span></td>
                    <td className="py-0.5 px-2 text-xs">{item.date}</td>
                    <td className="py-0.5 px-2 text-xs">
                      <button className="px-2 py-0.5 bg-orange-500 text-white rounded hover:bg-orange-600 text-xs">View</button>
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

export default MarketingWithdrawReport
