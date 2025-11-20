import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BarChart3, ArrowDownToLine, ArrowUpFromLine, Settings, CheckCircle } from 'lucide-react'

function Dashboard() {
  const [walletBalance] = useState(0)
  const [accounts] = useState(['#100007814', '#100007786', '#100007771'])
  const [activeAccount, setActiveAccount] = useState(0)
  const [transactions] = useState([
    { id: '#17', method: 'Cash', mtId: '100007771', status: 'Approved', amount: 100, date: 'Sep 24, 25' },
    { id: '#16', method: 'Cash', mtId: '100007771', status: 'Pending', amount: 100, date: 'Aug 25, 25' }
  ])

  return (
    <>
      <Header />
      <div className="flex w-full min-w-0 overflow-x-hidden">
        <Sidebar />
        <div className="flex-1 lg:ml-80 mt-14 lg:mt-0 px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-5 lg:py-6 bg-gradient-to-b from-purple-50 via-purple-50 to-green-50 min-h-screen w-full min-w-0">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <div className="flex-1 w-full min-w-0">
              <div className="mt-6 sm:mt-10 lg:mt-12 mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-2.5 mb-4 sm:mb-5">
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">My Accounts</h2>
                  <div className="text-left sm:text-right">
                    <p className="text-[#52bd47] text-lg sm:text-xl font-semibold">${walletBalance}</p>
                    <p className="text-gray-500 text-[11px] sm:text-xs">Wallet Balance</p>
                  </div>
                </div>
                <button className="bg-black text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full flex items-center gap-2 mb-4 sm:mb-5 text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
                  <span className="text-base">⊕</span>
                  <span>Open new account</span>
                </button>

                {activeAccount === 0 ? (
                  <div className="bg-white rounded-[32px] p-5 sm:p-6 lg:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.08)] max-w-[720px] mx-auto">
                    {/* Top Navigation Bar */}
                    <div className="relative mb-8 sm:mb-10">
                      <div className="bg-white rounded-2xl p-1.5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)]">
                        <div className="bg-white rounded-xl p-0 flex relative justify-center" style={{ gap: 0, margin: '0 auto', padding: 0, width: '80%' }}>
                          <div className="flex-1 max-w-[150px] sm:max-w-[170px]" style={{ margin: 0, padding: 0, minWidth: 0 }}>
                            <button className="w-full h-5 transition-opacity hover:opacity-90 relative overflow-hidden cursor-pointer" style={{ margin: 0, padding: 0, background: 'none', border: 'none', borderRadius: '0.75rem 0.5rem 0.5rem 0.75rem', width: '100%', height: '100%', maxHeight: '100%', display: 'block' }}>
                              <img src="/trade-button.svg" alt="Trade" style={{ display: 'block', borderRadius: '0.75rem 0.5rem 0.5rem 0.75rem', margin: 0, padding: 0, objectFit: 'cover', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%' }} />
                            </button>
                          </div>
                          <div className="flex-1 max-w-[150px] sm:max-w-[170px]" style={{ margin: 0, padding: 0, minWidth: 0 }}>
                            <Link to="/myfund/deposit" className="block w-full h-5 transition-opacity hover:opacity-90 relative overflow-hidden cursor-pointer" style={{ margin: 0, padding: 0, borderRadius: '1rem', width: '100%', height: '100%', maxHeight: '100%' }}>
                              <img src="/deposit-button.svg" alt="Deposit" style={{ display: 'block', borderRadius: '1rem', margin: 0, padding: 0, objectFit: 'cover', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%' }} />
                            </Link>
                          </div>
                          <div className="flex-1 max-w-[150px] sm:max-w-[170px]" style={{ margin: 0, padding: 0, minWidth: 0 }}>
                            <Link to="/myfund/withdrawal" className="block w-full h-5 transition-opacity hover:opacity-90 relative overflow-hidden cursor-pointer" style={{ margin: 0, padding: 0, borderRadius: '0.5rem 0.75rem 0.75rem 0.5rem', width: '100%', height: '100%', maxHeight: '100%' }}>
                              <img src="/withdraw-button.svg" alt="Withdraw" style={{ display: 'block', borderRadius: '0.5rem 0.75rem 0.75rem 0.5rem', margin: 0, padding: 0, objectFit: 'cover', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%' }} />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <button className="absolute top-2 right-2 p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                        <Settings className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>

                    {/* Account Type Selection */}
                    <div className="text-center mb-4 sm:mb-5">
                      <div className="flex justify-center items-center gap-2 text-sm sm:text-base">
                        <span className="text-gray-800 font-medium">MT5</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-800 font-medium">Prime</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-green-600 font-semibold">Real</span>
                      </div>
                    </div>

                    {/* Main Balance */}
                    <div className="text-center mb-4 sm:mb-5">
                      <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">$0</p>
                    </div>

                    {/* Financial Metrics */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-0 sm:divide-x divide-gray-200 pt-4 sm:pt-5 border-t border-gray-200">
                      <div className="px-2 sm:px-3">
                        <p className="text-green-600 text-xl sm:text-2xl font-semibold mb-1.5">$0</p>
                        <p className="text-gray-500 text-xs sm:text-sm">Unrealized P&L</p>
                      </div>
                      <div className="px-2 sm:px-3">
                        <p className="text-gray-900 text-xl sm:text-2xl font-semibold mb-1.5">$0</p>
                        <p className="text-gray-500 text-xs sm:text-sm">Balance</p>
                      </div>
                      <div className="px-2 sm:px-3">
                        <p className="text-gray-900 text-xl sm:text-2xl font-semibold mb-1.5">$0</p>
                        <p className="text-gray-500 text-xs sm:text-sm">Free margin</p>
                      </div>
                      <div className="px-2 sm:px-3">
                        <p className="text-gray-900 text-xl sm:text-2xl font-semibold mb-1.5">1:300</p>
                        <p className="text-gray-500 text-xs sm:text-sm">Actual leverage</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6 text-gray-400">
                    <div className="text-2xl mb-2">📊</div>
                    <p className="text-xs sm:text-sm">No trading activity yet!</p>
                    <p className="text-[10px] sm:text-xs mt-1">Start trading to see your account details</p>
                  </div>
                )}
              </div>

              <div className="mt-6 sm:mt-10">
                <h3 className="text-sm sm:text-base font-bold mb-8 sm:mb-10 text-gray-900">Open Positions</h3>
                <div className="flex flex-col items-center justify-center text-gray-500 py-10 sm:py-16">
                  <BarChart3 className="w-6 h-6 mb-3" />
                  <p className="text-xs sm:text-sm">No open positions yet!</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[528px] xl:w-[572px] flex-shrink-0">
              <div className="bg-gradient-to-b from-violet-50 to-white rounded-[32px] shadow-sm border border-violet-100 p-3 sm:p-4 flex flex-col min-h-[calc(100vh-160px)] overflow-hidden">
                {/* Account list section */}
                <div className="bg-white rounded-2xl px-4 sm:px-5 pt-3 pb-4 sm:pt-4 sm:pb-5 border border-[#f2f2f2] mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gray-900">Account list</h3>
                  <div className="flex flex-wrap gap-2">
                    {accounts.map((account, index) => (
                      <button
                        key={account}
                        onClick={() => setActiveAccount(index)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                          index === activeAccount
                            ? 'bg-violet-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {account}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Transactions section */}
                <div className="bg-white rounded-2xl px-4 sm:px-5 py-3 sm:py-4 border border-[#f2f2f2] w-full flex-1 flex flex-col overflow-hidden">
                  <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gray-900">Transactions</h3>
                  <div className="space-y-3 sm:space-y-4 w-full overflow-y-auto pr-1">
                    {transactions.map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex items-center gap-3 pb-3 sm:pb-4 border-b last:border-b-0 w-full"
                      >
                        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-green-100">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <div className="flex-1 min-w-0 flex items-center gap-4 flex-wrap">
                          <div>
                            <p className="text-xs font-bold text-gray-900">Deposit {transaction.id}</p>
                            <p className="text-[10px] text-gray-500 font-normal">{transaction.date}</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400 font-normal">Payment method</p>
                            <p className="text-xs font-bold text-gray-900">{transaction.method}</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400 font-normal">MT5 ID</p>
                            <p className="text-xs font-bold text-gray-900">{transaction.mtId}</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400 font-normal">Status</p>
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold inline-block ${
                                transaction.status === 'Approved'
                                  ? 'bg-green-600 text-white'
                                  : 'bg-gray-800 text-white'
                              }`}
                            >
                              {transaction.status}
                            </span>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="font-bold text-sm text-gray-900">${transaction.amount}</p>
                        </div>
                      </div>
                    ))}
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

export default Dashboard





