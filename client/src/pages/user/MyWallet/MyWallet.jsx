import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CreditCard, ArrowDownToLine, ArrowUpFromLine, ArrowDown, ArrowUp, MessageCircle, Mail } from 'lucide-react'

function MyWallet() {
  const [walletBalance] = useState(0)
  const transactions = [
    { id: '#17', type: 'Deposit', method: 'Cash', amount: 100, status: 'Approved', date: 'Sep 24, 25' },
    { id: '#16', type: 'Deposit', method: 'Cash', amount: 100, status: 'Pending', date: 'Aug 25, 25' }
  ]

  return (
    <>
      <Header />
      <div className="flex w-full min-w-0 overflow-x-hidden">
        <Sidebar />
        <div className="flex-1 lg:ml-80 mt-14 lg:mt-0 px-2 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-6 bg-[#f5f5f5] min-h-screen w-full min-w-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 lg:mb-6 px-1">My Wallet</h1>
          
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <div className="flex-1 w-full min-w-0">
              <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm mb-4 sm:mb-6">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mb-3 sm:mb-4">
                    <CreditCard className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Wallet Balance</h2>
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-600">${walletBalance}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <Link to="/myfund/deposit" className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl text-center transition">
                    <ArrowDownToLine className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mx-auto mb-2" />
                    <p className="text-sm sm:text-base font-semibold">Deposit</p>
                  </Link>
                  <Link to="/myfund/withdrawal" className="text-violet-500 hover:bg-orange-600 text-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl text-center transition">
                    <ArrowUpFromLine className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mx-auto mb-2" />
                    <p className="text-sm sm:text-base font-semibold">Withdraw</p>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Recent Transactions</h3>
                <div className="space-y-3 sm:space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 border-b last:border-b-0">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 ${
                          transaction.type === 'Deposit' ? 'bg-green-100' : 'bg-orange-100'
                        }`}>
                          {transaction.type === 'Deposit' ? (
                            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                          ) : (
                            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm sm:text-base font-semibold">{transaction.type}</p>
                          <p className="text-xs text-gray-500">{transaction.id}</p>
                          <p className="text-xs text-gray-500">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
                        <div className="text-left sm:text-center">
                          <p className="text-xs text-gray-500">Method</p>
                          <p className="text-sm sm:text-base font-semibold">{transaction.method}</p>
                        </div>
                        <div className="text-left sm:text-center">
                          <p className="text-xs text-gray-500">Status</p>
                          <span className={`px-2 sm:px-3 py-1 rounded-full text-xs inline-block ${
                            transaction.status === 'Approved' ? 'bg-green-100 text-green-600' : 'bg-gray-800 text-white'
                          }`}>
                            {transaction.status}
                          </span>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold text-base sm:text-lg ${
                            transaction.type === 'Deposit' ? 'text-green-600' : 'text-orange-600'
                          }`}>
                            {transaction.type === 'Deposit' ? '+' : '-'}${transaction.amount}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-96 flex-shrink-0">
              <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Stats</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">Total Deposits</p>
                    <p className="text-xl sm:text-2xl font-bold text-green-600">$100</p>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">Total Withdrawals</p>
                    <p className="text-xl sm:text-2xl font-bold text-orange-600">$0</p>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">Pending Transactions</p>
                    <p className="text-xl sm:text-2xl font-bold">1</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Helpline</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-gray-600" />
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">Chat with us</p>
                    <button className="text-violet-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs">Click here</button>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-gray-600" />
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">Mail us</p>
                    <button className="bg-green-400 text-white px-3 sm:px-4 py-1 rounded-full text-xs">Click here</button>
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

export default MyWallet






