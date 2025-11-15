import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import { Link } from 'react-router-dom'
import { Building2, Banknote, Coins, CreditCard, ArrowLeft, MessageCircle, Mail, CheckCircle } from 'lucide-react'

function Deposit() {
  const paymentMethods = [
    { name: 'Bank Transfer', icon: Building2 },
    { name: 'Cash', icon: Banknote },
    { name: 'USDT', icon: Coins },
    { name: 'Neteller', icon: CreditCard },
    { name: 'Paypal', icon: CreditCard },
    { name: 'Skrill', icon: CreditCard },
    { name: 'Sticpay', icon: CreditCard },
    { name: 'UPI', icon: CreditCard }
  ]

  const transactions = [
    { id: '#17', method: 'Cash', mtId: '100007771', status: 'Approved', amount: 100, date: 'Sep 24, 25' },
    { id: '#16', method: 'Cash', mtId: '100007771', status: 'Pending', amount: 100, date: 'Aug 25, 25' }
  ]

  return (
    <>
      <Header />
      <div className="flex w-full min-w-0 overflow-x-hidden">
        <Sidebar />
        <div className="flex-1 lg:ml-80 mt-14 lg:mt-0 px-2 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-6 bg-[#f5f5f5] min-h-screen w-full min-w-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 lg:mb-6 px-1">My Fund</h1>
          
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <div className="flex-1 w-full min-w-0">
              <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
                <Link to="/dashboard" className="inline-block mb-4 sm:mb-5 lg:mb-6">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </Link>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-4 sm:mb-5 lg:mb-6">Deposit</h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon
                    return (
                      <button
                        key={method.name}
                        className="bg-gray-50 hover:bg-gray-100 p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl flex flex-col items-center gap-2 sm:gap-3 transition"
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-600" />
                        <span className="text-xs sm:text-sm font-medium">{method.name}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-96 flex-shrink-0">
              <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Helpline</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-gray-600" />
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">Chat with us</p>
                    <button className="bg-orange-500 text-white px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">Click here</button>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-gray-600" />
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">Email us</p>
                    <button className="bg-green-400 text-white px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">Click here</button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Transactions</h3>
                <div className="space-y-3 sm:space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="pb-3 sm:pb-4 border-b last:border-b-0">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between mb-1">
                            <p className="text-sm sm:text-base font-semibold">Deposit</p>
                            <p className="font-bold text-base sm:text-lg">${transaction.amount}</p>
                          </div>
                          <p className="text-xs text-gray-500">{transaction.id}</p>
                          <p className="text-xs text-gray-500">{transaction.date}</p>
                          <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 text-xs">
                            <div>
                              <p className="text-gray-500">Payment method</p>
                              <p className="font-semibold">{transaction.method}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">MT5-ID</p>
                              <p className="font-semibold">{transaction.mtId}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Status</p>
                              <span className={`px-2 py-1 rounded-full text-xs inline-block ${
                                transaction.status === 'Approved' ? 'bg-green-100 text-green-600' : 'bg-gray-100'
                              }`}>
                                {transaction.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Deposit






