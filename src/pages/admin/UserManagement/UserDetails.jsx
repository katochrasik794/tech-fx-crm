import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'
import { DollarSign, TrendingUp, CreditCard, Search } from 'lucide-react'

function UserDetails() {
  const [activeTab, setActiveTab] = useState('deposit')
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 ml-64 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">User Details</h1>
        
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Deposit</p>
                <p className="text-2xl font-bold">$0</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <TrendingUp className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Withdraw</p>
                <p className="text-2xl font-bold">$0</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total MT5 Account</p>
                <p className="text-2xl font-bold">0</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex gap-2 mb-6 border-b">
            <button onClick={() => setActiveTab('deposit')} className={`px-6 py-3 font-medium transition-colors ${activeTab === 'deposit' ? 'text-violet-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}>Deposit List</button>
            <button onClick={() => setActiveTab('withdraw')} className={`px-6 py-3 font-medium transition-colors ${activeTab === 'withdraw' ? 'text-violet-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}>Withdraw List</button>
            <button onClick={() => setActiveTab('mt5')} className={`px-6 py-3 font-medium transition-colors ${activeTab === 'mt5' ? 'text-violet-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}>MT5 Account</button>
            <button onClick={() => setActiveTab('bank')} className={`px-6 py-3 font-medium transition-colors ${activeTab === 'bank' ? 'text-violet-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}>Bank Details</button>
            <button onClick={() => setActiveTab('login')} className={`px-6 py-3 font-medium transition-colors ${activeTab === 'login' ? 'text-violet-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}>Login Activity</button>
            <button onClick={() => setActiveTab('referral')} className={`px-6 py-3 font-medium transition-colors ${activeTab === 'referral' ? 'text-violet-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}>Refferal By</button>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <span>Show</span>
              <select className="border rounded px-2 py-1" value={entries} onChange={(e) => setEntries(Number(e.target.value))}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span>entries</span>
            </div>
            <div className="relative w-80">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">ID</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">MT5 ID</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Payment Method</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Note</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Comment</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="8" className="py-8 text-center text-gray-500">No data available in table</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
