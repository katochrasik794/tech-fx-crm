import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'

function UserPasswordList() {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  const [sortField, setSortField] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  
  const users = [
    { id: 1, name: 'demo', email: 'hars3h@FinCRM.com', phone: '+91 09846543210', password: '12345678', userType: 'IB' },
    { id: 2, name: 'moazzam hussain', email: 'moazzamjanjua92@gmail.com', phone: '+92 03468763587', password: 'moazzamjanjua92@gmail.com', userType: 'Client' },
    { id: 3, name: 'real star110', email: 'javoga7582@hh7f.com', phone: '+973 546789169', password: 'javoga7582@hh7f.com', userType: 'Client' },
    { id: 4, name: 'Satish Hirpara', email: 's.k.hirpara@gmail.com', phone: '09726908414', password: '123987', userType: 'Client' },
    { id: 5, name: 'Demo User', email: 'democlient@ts.com', phone: '919854745254', password: 'Demo@12345#', userType: 'IB' },
    { id: 6, name: 'Test11!', email: 'kelana4532@bitfami.com', phone: '+1 85855855855', password: 'Test123!', userType: 'Client' },
    { id: 7, name: 'Client Name', email: 'clientname@testing.com', phone: '9876543210', password: '9qieatLo', userType: 'Client' },
    { id: 8, name: 'Test', email: 'test@gmail.com', phone: '081231231238', password: 'Test123@', userType: 'Client' },
    { id: 9, name: 'Client Name2', email: 'clientname2@testing.com', phone: '9876543212', password: 'cgebKUn0', userType: 'IB' },
    { id: 10, name: 'David', email: 'Info@earnexmarkets.com', phone: '+350 56855000', password: 'Kubera2000*', userType: 'Client' },
  ]

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
  }

  const sortedData = [...users].sort((a, b) => {
    if (!sortField) return 0
    const aVal = sortField === 'id' ? a[sortField] : (a[sortField]?.toLowerCase() || '')
    const bVal = sortField === 'id' ? b[sortField] : (b[sortField]?.toLowerCase() || '')
    if (sortOrder === 'asc') return aVal > bVal ? 1 : -1
    return aVal < bVal ? 1 : -1
  })

  const filteredData = sortedData.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase()) ||
    item.phone.includes(search)
  )

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-xl font-bold mb-6">User Password List</h1>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs">Show</span>
              <select className="border rounded px-1.5 py-0.5 text-xs" value={entries} onChange={(e) => setEntries(Number(e.target.value))}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span className="text-xs">entries</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs">Search:</span>
              <input type="text" className="border rounded px-2 py-0.5 w-48 text-xs" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
          <div className="overflow-x-auto border border-gray-300 rounded-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-y border-black">
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs whitespace-nowrap" onClick={() => handleSort('id')}>ID {sortField === 'id' && sortOrder === 'desc' ? '↓' : '↑'}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs whitespace-nowrap" onClick={() => handleSort('name')}>Name {sortField === 'name' && sortOrder === 'desc' ? '↓' : '↑'}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 cursor-pointer text-xs whitespace-nowrap" onClick={() => handleSort('email')}>Email {sortField === 'email' && sortOrder === 'desc' ? '↓' : '↑'}</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs whitespace-nowrap">Phone</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs whitespace-nowrap">Password</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs whitespace-nowrap">User Type</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.slice(0, entries).map((user, index) => (
                  <tr key={user.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                    <td className="py-0.5 px-2 text-xs whitespace-nowrap">{user.id}</td>
                    <td className="py-0.5 px-2 text-xs whitespace-nowrap">{user.name}</td>
                    <td className="py-0.5 px-2 text-blue-600 text-xs whitespace-nowrap">{user.email}</td>
                    <td className="py-0.5 px-2 text-xs whitespace-nowrap">{user.phone}</td>
                    <td className="py-0.5 px-2 text-xs whitespace-nowrap">{user.password}</td>
                    <td className="py-0.5 px-2 text-xs whitespace-nowrap">{user.userType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-2 pt-2 border-t border-black">
            <div className="text-xs text-gray-600">
              Showing 1 to {Math.min(entries, filteredData.length)} of {filteredData.length} entries
            </div>
            <div className="flex gap-1">
              <button className="px-2 py-0.5 border rounded hover:bg-gray-50 text-xs">Previous</button>
              <button className="px-2 py-0.5 text-violet-500 text-white rounded text-xs">1</button>
              <button className="px-2 py-0.5 border rounded hover:bg-gray-50 text-xs">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPasswordList
