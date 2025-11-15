import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft, Banknote } from 'lucide-react'

function TeamWithdrawReport() {
  const [fromDate, setFromDate] = useState('2025-10-13')
  const [toDate, setToDate] = useState('2025-11-12')
  const withdrawals = []

  return (
    <>
      <Header />
      <div className="flex w-full min-w-0 overflow-x-hidden">
        <Sidebar />
        <div className="flex-1 lg:ml-80 mt-14 lg:mt-0 px-2 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-6 bg-[#f5f5f5] min-h-screen w-full min-w-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 lg:mb-6 px-1">IB Programme</h1>
          
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <div className="flex-1 w-full min-w-0">
              <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
                <Link to="/ib/dashboard" className="inline-block mb-4 sm:mb-5 lg:mb-6">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </Link>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-4 sm:mb-5 lg:mb-6">Team Withdraw Report</h2>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6">
                  <div className="flex-1 min-w-0">
                    <label className="block text-xs sm:text-sm mb-1 sm:mb-2">From :</label>
                    <input
                      type="date"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="block text-xs sm:text-sm mb-1 sm:mb-2">To :</label>
                    <input
                      type="date"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <button className="bg-orange-500 text-white px-4 sm:px-6 lg:px-8 py-2 rounded-lg self-end sm:self-auto hover:bg-orange-600 text-xs sm:text-sm whitespace-nowrap">
                    Search
                  </button>
                </div>

                {withdrawals.length === 0 ? (
                  <div className="text-center py-12 sm:py-16 lg:py-20 text-gray-400">
                    <Banknote className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4" />
                    <p className="text-lg sm:text-xl">No team withdrawals yet!</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto -mx-3 sm:mx-0">
                    <div className="min-w-full inline-block align-middle px-3 sm:px-0">
                      <table className="w-full text-xs sm:text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold">Client</th>
                            <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold">MT5 ID</th>
                            <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold">Amount</th>
                            <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold">Date</th>
                            <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {withdrawals.map((withdrawal) => (
                            <tr key={withdrawal.id} className="border-b">
                              <td className="px-2 sm:px-4 py-2 sm:py-3">{withdrawal.client}</td>
                              <td className="px-2 sm:px-4 py-2 sm:py-3">{withdrawal.mtId}</td>
                              <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-orange-600">${withdrawal.amount}</td>
                              <td className="px-2 sm:px-4 py-2 sm:py-3">{withdrawal.date}</td>
                              <td className="px-2 sm:px-4 py-2 sm:py-3">
                                <span className="px-2 sm:px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs">
                                  {withdrawal.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="w-full lg:w-96 flex-shrink-0">
              <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Team Stats</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">Total Withdrawals</p>
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-600">$0</p>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">This Month</p>
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold">$0</p>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">Active Clients</p>
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold">0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamWithdrawReport






