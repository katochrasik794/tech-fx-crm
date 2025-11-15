import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'
import { Search } from 'lucide-react'

function IncentiveReport() {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  
  const reportData = [
    { serial: 1, name: 'John Smith', email: 'john@marketing.com', amount: 5000, incentive: 5, netDepositRequired: 10000, totalNetDeposit: 8500, note: 'Pending target' },
    { serial: 2, name: 'Jane Doe', email: 'jane@marketing.com', amount: 3500, incentive: 7, netDepositRequired: 10000, totalNetDeposit: 12000, note: 'Target achieved' },
  ]

  const filteredData = reportData.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">Incentive List</h1>
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
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Amount</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Incentive (%)</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Net Deposit (Required)</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Total Net Deposit</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Note</th>
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
                    <td className="py-0.5 px-2 text-xs">${item.amount}</td>
                    <td className="py-0.5 px-2 text-xs">{item.incentive}%</td>
                    <td className="py-0.5 px-2 text-xs">${item.netDepositRequired}</td>
                    <td className="py-0.5 px-2 text-xs">${item.totalNetDeposit}</td>
                    <td className="py-0.5 px-2 text-xs">{item.note}</td>
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

export default IncentiveReport
