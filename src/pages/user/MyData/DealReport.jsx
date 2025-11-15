import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft, Briefcase, TrendingUp, TrendingDown, CheckCircle, ArrowUpRight, BarChart3 } from 'lucide-react'

function DealReport() {
  const [fromDate, setFromDate] = useState('2025-10-13')
  const [toDate, setToDate] = useState('2025-11-12')

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
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-4 sm:mb-5 lg:mb-6">Deal Report</h2>
                
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

                <div className="text-center py-12 sm:py-16 lg:py-20 text-gray-400">
                  <Briefcase className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4" />
                  <p className="text-lg sm:text-xl">No deals yet!</p>
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
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-orange-500" />
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

export default DealReport






