import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useSidebar } from '../context/SidebarContext'

function Header() {
  const { mobileMenuOpen, setMobileMenuOpen } = useSidebar()
  const [showNotifications, setShowNotifications] = useState(false)
  const [showLanguage, setShowLanguage] = useState(false)
  const [language, setLanguage] = useState('EN')

  const notifications = [
    { message: 'MT5 Account Created Successfully', date: '2025-11-03' },
    { message: 'Deposit Approved Successfully', date: '2025-09-24' },
    { message: 'MT5 Account Created Successfully', date: '2025-09-16' },
    { message: 'MT5 Account Created Successfully', date: '2025-08-25' },
    { message: 'Registration Successfully', date: '2025-08-24' }
  ]

  const languages = ['EN', 'AR', 'ZH', 'TH']

  return (
    <div className="fixed top-0 left-0 right-0 lg:top-4 lg:left-4 lg:right-auto lg:w-72 bg-white shadow-md z-[60] px-2 py-2 lg:px-4 lg:py-3 flex items-center justify-between gap-1 lg:gap-2 border-b lg:border lg:border-gray-200 lg:rounded-3xl">
        <Link to="/profile" className="w-8 h-8 lg:w-12 lg:h-12 rounded-full overflow-hidden flex-shrink-0">
          <img src="https://via.placeholder.com/48" alt="Profile" className="w-full h-full object-cover" />
        </Link>

        <div className="flex items-center gap-4">
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 hover:bg-gray-100 rounded-full relative"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border max-h-96 overflow-y-auto">
              <div className="p-4">
                <h3 className="font-bold mb-3">Notifications</h3>
                {notifications.map((notif, index) => (
                  <div key={index} className="py-3 border-b last:border-b-0">
                    <p className="text-sm">{notif.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{notif.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button 
            onClick={() => setShowLanguage(!showLanguage)}
            className="px-4 py-2 bg-gray-100 rounded-lg font-semibold hover:bg-gray-200"
          >
            {language}
          </button>
          {showLanguage && (
            <div className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-xl border">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang)
                    setShowLanguage(false)
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 bg-orange-500 rounded-lg text-white">
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        </div>
    </div>
  )
}

export default Header
