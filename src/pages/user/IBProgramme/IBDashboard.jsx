import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import { Link } from 'react-router-dom'
import { Users, CheckCircle, DollarSign, Calendar, Banknote, BarChart3 } from 'lucide-react'

function IBDashboard() {
  const stats = [
    { label: 'Total Clients', value: '0', icon: Users, color: 'blue' },
    { label: 'Active Clients', value: '0', icon: CheckCircle, color: 'green' },
    { label: 'Total Commission', value: '$0', icon: DollarSign, color: 'orange' },
    { label: 'This Month', value: '$0', icon: Calendar, color: 'purple' }
  ]

  return (
    <>
      <Header />
      <div className="flex w-full min-w-0 overflow-x-hidden">
        <Sidebar />
        <div className="flex-1 lg:ml-80 mt-14 lg:mt-0 px-2 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-6 bg-[#f5f5f5] min-h-screen w-full min-w-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 lg:mb-6 px-1">IB Programme</h1>
          
          <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm mb-4 sm:mb-5 lg:mb-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-5 lg:mb-6">IB Dashboard</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 lg:p-6 rounded-xl">
                    <Icon className="w-10 h-10 mb-2 text-gray-600" />
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                )
              })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <Link to="/ib/clients" className="bg-blue-500 hover:bg-blue-600 text-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl text-center transition">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2" />
                <p className="font-semibold text-sm sm:text-base">My Clients</p>
              </Link>
              <Link to="/ib/commission" className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl text-center transition">
                <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2" />
                <p className="font-semibold text-sm sm:text-base">My Commission</p>
              </Link>
              <Link to="/ib/withdraw" className="bg-orange-500 hover:bg-orange-600 text-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl text-center transition">
                <Banknote className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2" />
                <p className="font-semibold text-sm sm:text-base">IB Withdraw</p>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Recent Activity</h3>
            <div className="text-center py-8 sm:py-10 lg:py-12 text-gray-400">
              <BarChart3 className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4" />
              <p className="text-lg sm:text-xl">No activity yet!</p>
              <p className="text-xs sm:text-sm mt-2">Start referring clients to see your IB activity</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IBDashboard






