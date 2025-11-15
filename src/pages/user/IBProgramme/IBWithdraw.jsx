import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'

function IBWithdraw() {
  const [amount, setAmount] = useState('')
  const [method, setMethod] = useState('')

  return (
    <>
      <Header />
      <div className="flex w-full min-w-0 overflow-x-hidden">
        <Sidebar />
        <div className="flex-1 lg:ml-80 mt-14 lg:mt-0 px-2 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-6 bg-[#f5f5f5] min-h-screen w-full min-w-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 lg:mb-6 px-1">IB Programme</h1>
          
          <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
            <Link to="/ib/dashboard" className="inline-block mb-4 sm:mb-5 lg:mb-6">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </Link>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-4 sm:mb-5 lg:mb-6">IB Withdraw</h2>
            
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl mb-4 sm:mb-5 lg:mb-6 text-center">
                <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Available Balance</p>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600">$0</p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm mb-1 sm:mb-2">Withdrawal Amount</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm mb-1 sm:mb-2">Payment Method</label>
                  <select
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select method</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="wallet">Wallet</option>
                  </select>
                </div>

                <button className="w-full bg-orange-500 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-orange-600 text-xs sm:text-sm">
                  Request Withdrawal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IBWithdraw






