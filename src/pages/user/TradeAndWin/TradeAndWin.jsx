import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft, Grid, Cloud, Gamepad2, Apple, MessageCircle, Mail, Clipboard } from 'lucide-react'

function TradeAndWin() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    { name: 'All', icon: Grid },
    { name: 'Subscriptions', icon: Cloud },
    { name: 'Electronics', icon: Gamepad2 },
    { name: 'Food', icon: Apple }
  ]

  const prizes = [
    { title: 'WSJ, Barron\'s & MarketWatch...', lots: 70, image: '💳' },
    { title: 'Stay ahead in finance...', lots: 30, image: '📊' },
    { title: 'Barron\'s 1-Year Subscription—comprehensive investing...', lots: 35, image: '📰' },
    { title: 'Upgrade your productivity with...', lots: 1050, image: '📱' }
  ]

  return (
    <>
      <Header />
      <div className="flex w-full min-w-0 overflow-x-hidden">
        <Sidebar />
        <div className="flex-1 lg:ml-80 mt-14 lg:mt-0 px-2 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-6 bg-[#f5f5f5] min-h-screen w-full min-w-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 lg:mb-6 px-1">Trade And Win</h1>
          
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <div className="flex-1 w-full min-w-0">
              <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
                <Link to="/dashboard" className="inline-block mb-4 sm:mb-6">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </Link>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-4 sm:mb-6">Categories</h2>
                
                <div className="flex justify-center gap-2 sm:gap-4 lg:p-6 mb-6 sm:mb-8 overflow-x-auto pb-2">
                  {categories.map((category) => {
                    const Icon = category.icon
                    return (
                      <button
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`flex flex-col items-center p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl transition min-w-[70px] sm:min-w-[80px] ${
                          selectedCategory === category.name ? 'bg-orange-100' : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mb-1 sm:mb-2 text-gray-600" />
                        <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{category.name}</span>
                      </button>
                    )
                  })}
                </div>

                <div className="mb-3 sm:mb-4">
                  <p className="text-xs sm:text-sm text-gray-600">Your Price Lots: 0</p>
                  <p className="text-xs sm:text-sm text-gray-600">1 Traded Lot = 1 Price Lot</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {prizes.map((prize, index) => (
                    <div key={index} className="border rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 hover:shadow-lg transition">
                      <div className="flex items-center justify-center h-32 sm:h-40 lg:h-48 bg-gray-100 rounded-lg mb-3 sm:mb-4">
                        <span className="text-4xl sm:text-5xl lg:text-6xl">{prize.image}</span>
                      </div>
                      <h3 className="font-semibold mb-2 text-xs sm:text-sm line-clamp-2">{prize.title}</h3>
                      <p className="text-base sm:text-lg font-bold mb-2">{prize.lots} lots</p>
                      <button className="text-orange-500 text-xs sm:text-sm font-semibold">Trade {prize.lots} lots to order</button>
                    </div>
                  ))}
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
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">Mail us</p>
                    <button className="bg-green-400 text-white px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">Click here</button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Reward History</h3>
                <div className="text-center py-8 sm:py-12 text-gray-400">
                  <Clipboard className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm">No transactions yet!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TradeAndWin






