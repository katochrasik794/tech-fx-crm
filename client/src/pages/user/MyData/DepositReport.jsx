import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft, CheckCircle, TrendingUp, TrendingDown, ArrowUpRight, BarChart3 } from 'lucide-react'

function DepositReport() {
  const [fromDate, setFromDate] = useState('2025-10-13')
  const [toDate, setToDate] = useState('2025-11-12')

  const deposits = [
    { id: '#17', date: '24 Sep, 14:19', method: 'Cash', mtId: '100007771', comment: 'test-bank-crypto', status: 'Approved', amount: 100 },
    { id: '#16', date: '25 Aug, 20:05', method: 'Cash', mtId: '100007771', comment: '', status: 'Pending', amount: 100 }
  ]

  return (
    <>
      <Header />
      <div className="flex w-full min-w-0 overflow-x-hidden">
        <Sidebar />
        <div className="flex-1 lg:ml-80 mt-14 lg:mt-0 px-2 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-6 bg-[#f5f5f5] min-h-screen w-full min-w-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 lg:mb-6 px-1">My Data</h1>
          
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <div className="flex-1 w-full min-w-0">
              <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
                <Link to="/dashboard" className="inline-block mb-4 sm:mb-5 lg:mb-6">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </Link>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-4 sm:mb-5 lg:mb-6">Deposit Report</h2>
                
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
                  <button className="text-violet-500 text-white px-4 sm:px-6 lg:px-8 py-2 rounded-lg self-end sm:self-auto hover:bg-orange-600 text-xs sm:text-sm whitespace-nowrap">
                    Search
                  </button>
                </div>

                <div className="overflow-x-auto -mx-3 sm:mx-0">
                  <div className="min-w-full inline-block align-middle">
                    <div className="space-y-3 sm:space-y-4">
                      {deposits.map((deposit) => (
                        <div key={deposit.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 border-b last:border-b-0">
                          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-6 text-green-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm sm:text-base font-semibold">Deposit</p>
                              <p className="text-xs text-gray-500">{deposit.id}</p>
                              <p className="text-xs text-gray-500">{deposit.date}</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-3 sm:gap-4 w-full sm:w-auto">
                            <div className="text-center sm:text-left">
                              <p className="text-xs text-gray-500">Payment method</p>
                              <p className="text-sm sm:text-base font-semibold">{deposit.method}</p>
                            </div>
                            <div className="text-center sm:text-left">
                              <p className="text-xs text-gray-500">MT5 ID</p>
                              <p className="text-sm sm:text-base font-semibold">{deposit.mtId}</p>
                            </div>
                            <div className="text-center sm:text-left">
                              <p className="text-xs text-gray-500">Comment</p>
                              <p className="text-sm sm:text-base font-semibold break-all">{deposit.comment || '-'}</p>
                            </div>
                            <div className="text-center sm:text-left">
                              <p className="text-xs text-gray-500">Status</p>
                              <span className={`px-2 sm:px-3 py-1 rounded-full text-xs inline-block ${
                                deposit.status === 'Approved' ? 'bg-green-100 text-green-600' : 'bg-gray-800 text-white'
                              }`}>
                                {deposit.status}
                              </span>
                            </div>
                            <div className="text-center sm:text-left sm:ml-auto">
                              <p className="font-bold text-base sm:text-lg">${deposit.amount}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mt-4 sm:mt-5 lg:mt-6 pt-4 border-t">
                  <p className="text-xs sm:text-sm text-gray-500">Showing 1 to 2 of 2 entries</p>
                  <div className="flex items-center gap-2">
                    <button className="p-2 border rounded-lg text-xs sm:text-sm hover:bg-gray-100">←</button>
                    <span className="text-xs sm:text-sm">1 of 1</span>
                    <button className="p-2 border rounded-lg text-xs sm:text-sm hover:bg-gray-100">→</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-96 flex-shrink-0">
              <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Insights</h3>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6">
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-gray-600" />
                    <p className="text-xs text-gray-500 mb-1">Biggest Profit</p>
                    <p className="font-bold text-lg sm:text-xl">$0</p>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
                    <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-gray-600" />
                    <p className="text-xs text-gray-500 mb-1">Biggest Loss</p>
                    <p className="font-bold text-lg sm:text-xl">$0</p>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-green-500" />
                    <p className="text-xs text-gray-500 mb-1">Total Deposit</p>
                    <p className="font-bold text-lg sm:text-xl">$100</p>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-violet-500" />
                    <p className="text-xs text-gray-500 mb-1">Total Withdraw</p>
                    <p className="font-bold text-lg sm:text-xl">$0</p>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
                    <p className="text-xs text-gray-500 mb-1">Total Trades</p>
                    <p className="font-bold text-lg sm:text-xl">0</p>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
                    <p className="text-xs text-gray-500 mb-1">Total Volume</p>
                    <p className="font-bold text-lg sm:text-xl">0</p>
                  </div>
                </div>

                <div className="border-t pt-3 sm:pt-4">
                  <h4 className="font-bold mb-2 text-sm sm:text-base">Wins and Losses</h4>
                  <p className="text-xl sm:text-2xl font-bold mb-2">$0</p>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Current Month</p>
                  <div className="text-center py-6 sm:py-8 text-gray-400">
                    <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2" />
                    <p className="text-xs sm:text-sm">No trade this month yet!</p>
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

export default DepositReport






