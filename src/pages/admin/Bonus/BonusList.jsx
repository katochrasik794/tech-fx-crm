import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'
import { Search } from 'lucide-react'

function BonusList() {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  
  const bonusData = [
    { id: 1, mt5Id: '12345', amount: 100, equity: 1000, type: 'Deposit', comment: 'Welcome bonus', date: '2025-11-01' },
    { id: 2, mt5Id: '12346', amount: 50, equity: 500, type: 'Referral', comment: 'Friend referral', date: '2025-11-02' },
    { id: 3, mt5Id: '12347', amount: 200, equity: 2000, type: 'Trading', comment: 'Volume bonus', date: '2025-11-03' },
  ]

  const filteredBonus = bonusData.filter(bonus => 
    bonus.mt5Id.includes(search) ||
    bonus.type.toLowerCase().includes(search.toLowerCase()) ||
    bonus.comment.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-xl font-bold mb-6">Bonus List</h1>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm">Show</span>
              <select className="border rounded px-2 py-1 text-sm" value={entries} onChange={(e) => setEntries(Number(e.target.value))}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm">entries</span>
              <button className="ml-2 sm:ml-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm whitespace-nowrap">Excel</button>
            </div>
            <div className="relative w-full sm:w-80 min-w-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input type="text" placeholder="Search..." className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm min-w-0" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-y border-black">
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm">ID ↑</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm">MT5 ID ↑</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm">Amount ↑</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm">Equity ↑</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm">Type ↑</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm">Comment ↑</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm">Date ↑</th>
                </tr>
              </thead>
              <tbody>
                {filteredBonus.length > 0 ? (
                  filteredBonus.slice(0, entries).map((bonus, index) => (
                    <tr key={bonus.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                      <td className="py-1 px-3 text-sm">{bonus.id}</td>
                      <td className="py-1 px-3 text-sm">{bonus.mt5Id}</td>
                      <td className="py-1 px-3 text-sm">{bonus.amount}</td>
                      <td className="py-1 px-3 text-sm">{bonus.equity}</td>
                      <td className="py-1 px-3 text-sm">{bonus.type}</td>
                      <td className="py-1 px-3 text-sm">{bonus.comment}</td>
                      <td className="py-1 px-3 text-sm">{bonus.date}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-4 text-gray-500">No data available in table</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-between items-center pt-4 border-t border-black text-sm text-gray-600">
            <div>Showing {filteredBonus.length > 0 ? 1 : 0} to {Math.min(entries, filteredBonus.length)} of {filteredBonus.length} entries</div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded hover:bg-gray-100">Previous</button>
              <button className="px-3 py-1 border rounded hover:bg-gray-100">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BonusList
