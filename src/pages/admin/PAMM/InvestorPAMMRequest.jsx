import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'
import { Search } from 'lucide-react'

function InvestorPAMMRequest() {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  
  const requestsData = []

  const filteredData = requestsData.filter(item => 
    item.name?.toLowerCase().includes(search.toLowerCase()) ||
    item.email?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">Investor PAMM Request</h1>
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
              <button className="ml-2 px-2.5 py-0.5 bg-orange-500 text-white rounded hover:bg-orange-600 text-xs">Excel</button>
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
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">User Type</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Registration Date</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.slice(0, entries).map((item, index) => (
                    <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                      <td className="py-0.5 px-2 text-xs">{item.id}</td>
                      <td className="py-0.5 px-2 text-xs">{item.name}</td>
                      <td className="py-0.5 px-2 text-blue-600 text-xs">{item.email}</td>
                      <td className="py-0.5 px-2 text-xs">{item.userType}</td>
                      <td className="py-0.5 px-2 text-xs">{item.registrationDate}</td>
                      <td className="py-0.5 px-2 text-xs">
                        <div className="flex gap-1">
                          <button className="px-2 py-0.5 bg-green-500 text-white rounded hover:bg-green-600 text-xs">Approve</button>
                          <button className="px-2 py-0.5 bg-red-500 text-white rounded hover:bg-red-600 text-xs">Reject</button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-500 text-xs">No data available in table</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-between items-center pt-4 border-t border-black text-xs text-gray-600">
            <div>Showing 0 to 0 of 0 entries</div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded hover:bg-gray-100 text-xs">Previous</button>
              <button className="px-3 py-1 border rounded hover:bg-gray-100 text-xs">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestorPAMMRequest
