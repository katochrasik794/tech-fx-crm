import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import { Building2, TrendingUp, Rocket, Trophy, MessageCircle, Mail, BarChart3 } from 'lucide-react'

function News() {
  const newsArticles = [
    {
      title: 'Zero interest rate policy: The SNB reopens the door, will the ECB and the Fed follow?',
      description: 'The Swiss National Bank (SNB) struck a blow last week when it cut its key interest rate to 0%.',
      icon: Building2
    },
    {
      title: 'Bitcoin, crypto market begin recovery as Israel and Iran agree to a ceasefire',
      description: 'The cryptocurrency market made a comeback on Monday, rebounding from a weekend',
      icon: TrendingUp
    },
    {
      title: 'Tron Price Forecast: Tether\'s USDT supply on Tron surpasses $80 billion',
      description: 'Tron (TRX) stabilizes around $0.270 at the time of writing on Tuesday, following a 3.5% recovery the previous day.',
      icon: Rocket
    },
    {
      title: 'Gold price bears seem reluctant as a weaker USD offsets Iran-Israel ceasefire',
      description: 'Gold price extends the previous day\'s slide amid the Israel-Iran ceasefire announcement.',
      icon: Trophy
    }
  ]

  return (
    <>
      <Header />
      <div className="flex w-full min-w-0 overflow-x-hidden">
        <Sidebar />
        <div className="flex-1 lg:ml-80 mt-14 lg:mt-0 px-2 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-6 bg-[#f5f5f5] min-h-screen w-full min-w-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 lg:mb-6 px-1">News</h1>
          
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <div className="flex-1 w-full min-w-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {newsArticles.map((article, index) => {
                  const Icon = article.icon
                  return (
                    <div key={index} className="bg-white rounded-lg sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
                      <div className="h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                        <Icon className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-orange-600" />
                      </div>
                    <div className="p-3 sm:p-4 lg:p-6">
                      <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 line-clamp-2">{article.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-3">{article.description}</p>
                      <button className="text-orange-500 font-semibold text-xs sm:text-sm hover:text-orange-600">view more</button>
                    </div>
                  </div>
                  )
                })}
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
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Trending</h3>
                <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <div className="h-32 sm:h-36 lg:h-40 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <BarChart3 className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-xs sm:text-sm mb-2 line-clamp-2">GBP/USD attracts some buyers above 1.3550 after Middle East ceasefire</h4>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-3">The GBP/USD pair gains traction to around 1.3560 during the early European session on Tuesday, bolstered by the weaker US...</p>
                  <button className="text-orange-500 font-semibold text-xs sm:text-sm hover:text-orange-600">view more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default News






