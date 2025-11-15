import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'
import { Check } from 'lucide-react'

function BankDetailsList() {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  const [status, setStatus] = useState('All')
  
  const bankDetails = [
    { id: 1, accountName: 'test', accountNo: 'test', ifscSwift: 'test', iban: 'test', bankName: 'test', bankAddress: 'test', country: 'Albania', bookBank: '/placeholder.jpg', comment: '', status: 'Pending', date: '2025-09-24' },
    { id: 2, accountName: 'asdf', accountNo: '23345', ifscSwift: 'asdff1234', iban: '', bankName: 'asdf', bankAddress: '', country: 'India', bookBank: '/placeholder.jpg', comment: 'Unreal information', status: 'Rejected', date: '2025-07-11' },
    { id: 3, accountName: 'Bank Holder Name', accountNo: '145178654521', ifscSwift: 'FDRL0002124', iban: 'IBAN015424', bankName: 'Federal Bank', bankAddress: 'Chennai', country: 'India', bookBank: '/placeholder.jpg', comment: 'Approved', status: 'Approved', date: '2025-06-13' },
    { id: 4, accountName: 'Account Name', accountNo: '124545785698', ifscSwift: 'MPCBMUMU', iban: 'IBAN45412450', bankName: 'MauBank Ltd', bankAddress: 'Pune', country: 'India', bookBank: '/placeholder.jpg', comment: 'Rejected', status: 'Rejected', date: '2025-06-12' },
    { id: 5, accountName: 'Bank Holder', accountNo: '987654321O', ifscSwift: 'IFSC0012341', iban: 'IBAN0000123', bankName: 'Federal Bank', bankAddress: 'Gujarat', country: 'India', bookBank: '/placeholder.jpg', comment: 'Approved', status: 'Approved', date: '2025-06-12' },
  ]

  const filteredData = bankDetails.filter(item => 
    (status === 'All' || item.status === status) &&
    (item.accountName.toLowerCase().includes(search.toLowerCase()) ||
    item.bankName.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-xl font-bold mb-6">Bank Details List</h1>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="mb-3">
            <label className="block text-xs font-medium mb-1">Status :</label>
            <select className="border rounded px-2 py-1 w-32 text-xs" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs">Show</span>
              <select className="border rounded px-1.5 py-0.5 text-xs" value={entries} onChange={(e) => setEntries(Number(e.target.value))}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span className="text-xs">entries</span>
              <button className="ml-2 px-3 py-0.5 text-violet-500 text-white rounded text-xs">Excel</button>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto min-w-0">
              <span className="text-xs whitespace-nowrap">Search:</span>
              <input type="text" className="border rounded px-2 py-0.5 flex-1 sm:w-48 max-w-full text-xs min-w-0" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
          <div className="overflow-x-auto border border-gray-300 rounded-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-y border-black">
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs whitespace-nowrap">ID</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs whitespace-nowrap">Account Name</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs whitespace-nowrap">Account No.</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs whitespace-nowrap">IFSC/Swift Code</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs whitespace-nowrap">IBAN No.</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs whitespace-nowrap">Bank Name</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs whitespace-nowrap">Bank address</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs whitespace-nowrap">Country</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs whitespace-nowrap">Book Bank</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs whitespace-nowrap">Comment</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs whitespace-nowrap">Status</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs whitespace-nowrap">Date</th>
                  <th className="text-left py-0.5 px-2 font-medium text-gray-600 text-xs whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.slice(0, entries).map((item, index) => (
                  <tr key={item.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                    <td className="py-0.5 px-2 text-xs whitespace-nowrap">{item.id}</td>
                    <td className="py-0.5 px-2 text-xs whitespace-nowrap">{item.accountName}</td>
                    <td className="py-0.5 px-2 text-xs whitespace-nowrap">{item.accountNo}</td>
                    <td className="py-0.5 px-2 text-xs whitespace-nowrap">{item.ifscSwift}</td>
                    <td className="py-0.5 px-2 text-xs whitespace-nowrap">{item.iban}</td>
                    <td className="py-0.5 px-2 text-xs whitespace-nowrap">{item.bankName}</td>
                    <td className="py-0.5 px-2 text-xs whitespace-nowrap">{item.bankAddress}</td>
                    <td className="py-0.5 px-2 text-xs whitespace-nowrap">{item.country}</td>
                    <td className="py-0.5 px-2 text-xs">
                      <img src={item.bookBank} alt="book" className="w-6 h-6 object-cover" />
                    </td>
                    <td className="py-0.5 px-2 text-xs text-blue-600 whitespace-nowrap">{item.comment}</td>
                    <td className="py-0.5 px-2 text-xs">
                      <span className={`px-1.5 py-0.5 rounded text-xs ${
                        item.status === 'Approved' ? 'bg-green-100 text-green-700' :
                        item.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>{item.status}</span>
                    </td>
                    <td className="py-0.5 px-2 text-xs whitespace-nowrap">{item.date}</td>
                    <td className="py-0.5 px-2 text-xs">
                      <div className="flex gap-1">
                        <button className="p-1 bg-green-500 text-white rounded hover:bg-green-600"><Check className="w-3 h-3" /></button>
                        <button className="px-2 py-0.5 text-violet-500 text-white rounded hover:bg-orange-600 text-xs">Reject</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-black">
            <div className="text-sm text-gray-600">
              Showing 1 to {Math.min(entries, filteredData.length)} of {filteredData.length} entries
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded hover:bg-gray-50">Previous</button>
              <button className="px-3 py-1 text-violet-500 text-white rounded">1</button>
              <button className="px-3 py-1 border rounded hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankDetailsList
