import { Users, DollarSign, FileText, User, Search, Bell, ChevronDown, Wallet } from 'lucide-react'
import ResponsiveAdminLayout from '../../../components/ResponsiveAdminLayout'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function AdminDashboard() {
  const [chartView, setChartView] = useState('transaction')
  const [searchTerm, setSearchTerm] = useState('')
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const unreadCount = 4
  
  const notifications = [
    { id: 1, message: 'New deposit request from John Doe', time: '5 min ago', unread: true },
    { id: 2, message: 'User verification pending', time: '10 min ago', unread: true },
    { id: 3, message: 'Withdrawal approved', time: '1 hour ago', unread: true },
    { id: 4, message: 'New IB request', time: '2 hours ago', unread: true }
  ]
  
  const handleSearch = () => {
    console.log('Searching for:', searchTerm)
  }
  const stats = [
    { label: 'Total Clients', value: '74', icon: User, iconBg: 'bg-gray-100', iconColor: 'text-orange-500', link: '/admin/user/list' },
    { label: 'Total IB', value: '12', icon: Users, iconBg: 'bg-gray-100', iconColor: 'text-orange-500', link: '/admin/ib/users' },
    { label: 'Pending Clients', value: '1', icon: FileText, iconBg: 'bg-gray-100', iconColor: 'text-orange-500', link: '/admin/user/pending-docs' },
    { label: 'Pending Deposit', value: '2', icon: DollarSign, iconBg: 'bg-gray-100', iconColor: 'text-orange-500', link: '/admin/transaction/pending-deposit' },
    { label: 'Pending Withdraw', value: '0', icon: DollarSign, iconBg: 'bg-gray-100', iconColor: 'text-orange-500', link: '/admin/transaction/pending-withdraw' },
    { label: 'Pending IB Withdraw', value: '1', icon: DollarSign, iconBg: 'bg-gray-100', iconColor: 'text-orange-500', link: '/admin/transaction/pending-ib-withdraw' },
    { label: 'Active Traders', value: '9', icon: DollarSign, iconBg: 'bg-gray-100', iconColor: 'text-orange-500', link: '/admin/user/list' },
    { label: 'FTD Users', value: '9', icon: User, iconBg: 'bg-gray-100', iconColor: 'text-orange-500', link: '/admin/user/list' },
    { label: 'Non FTD Users', value: '78', icon: User, iconBg: 'bg-gray-100', iconColor: 'text-orange-500', link: '/admin/user/list' },
    { label: 'Pending IB Request', value: '0', icon: User, iconBg: 'bg-gray-100', iconColor: 'text-orange-500', link: '/admin/ib/requests' },
    { label: 'Pending Bank Details Request', value: '1', icon: User, iconBg: 'bg-gray-100', iconColor: 'text-orange-500', link: '/admin/user/bank-list' }
  ]

  return (
    <ResponsiveAdminLayout title="Dashboard">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">{stat.label}</p>
                      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`${stat.iconBg} p-2 sm:p-3 rounded-full`}>
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.iconColor}`} />
                    </div>
                  </div>
                  <Link to={stat.link} className="text-orange-500 text-xs sm:text-sm font-semibold hover:text-orange-600">View more</Link>
                </div>
              )
            })}
          </div>

          <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200 mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <button 
                onClick={() => setChartView('transaction')}
                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-semibold ${chartView === 'transaction' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Transaction
              </button>
              <button 
                onClick={() => setChartView('clients')}
                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-semibold ${chartView === 'clients' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Clients
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-3 sm:mb-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-500"></div>
                <span>Deposit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-600"></div>
                <span>Withdraw</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-700"></div>
                <span>IB Withdraw</span>
              </div>
            </div>
            <div className="h-48 sm:h-64 flex items-center justify-center border-t border-b border-gray-200">
              <p className="text-sm sm:text-base text-gray-400">{chartView === 'transaction' ? 'Transaction Chart Data' : 'Clients Chart Data'}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Daily Deposit</p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">0</p>
                </div>
                <div className="bg-orange-100 p-2 sm:p-3 rounded-full">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Weekly Deposit</p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">0</p>
                </div>
                <div className="bg-orange-100 p-2 sm:p-3 rounded-full">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Monthly Deposit</p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">3230</p>
                </div>
                <div className="bg-orange-100 p-2 sm:p-3 rounded-full">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Total Deposit</p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">30092</p>
                </div>
                <div className="bg-orange-100 p-2 sm:p-3 rounded-full">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Daily Withdraw</p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">0</p>
                </div>
                <div className="bg-orange-100 p-2 sm:p-3 rounded-full">
                  <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Weekly Withdraw</p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">0</p>
                </div>
                <div className="bg-orange-100 p-2 sm:p-3 rounded-full">
                  <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Monthly Withdraw</p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">0</p>
                </div>
                <div className="bg-orange-100 p-2 sm:p-3 rounded-full">
                  <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Total Withdraw</p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">6960</p>
                </div>
                <div className="bg-orange-100 p-2 sm:p-3 rounded-full">
                  <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Daily IB Withdraw</p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">0</p>
                </div>
                <div className="bg-orange-100 p-2 sm:p-3 rounded-full">
                  <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Weekly IB Withdraw</p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">0</p>
                </div>
                <div className="bg-orange-100 p-2 sm:p-3 rounded-full">
                  <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Monthly IB Withdraw</p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">0</p>
                </div>
                <div className="bg-orange-100 p-2 sm:p-3 rounded-full">
                  <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Total IB Withdraw</p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">65</p>
                </div>
                <div className="bg-orange-100 p-2 sm:p-3 rounded-full">
                  <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                </div>
              </div>
            </div>
          </div>

      <div className="text-center py-4 text-xs sm:text-sm text-gray-600">
        Copyright © 2025 <span className="text-orange-500 font-semibold">Techysquad MT5 CRM</span>, All Rights Reserved.
      </div>
    </ResponsiveAdminLayout>
  )
}

export default AdminDashboard
