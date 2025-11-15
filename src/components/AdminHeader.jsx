import { Search, Bell, ChevronDown, Menu } from 'lucide-react'
import { useSidebar } from '../context/SidebarContext'

function AdminHeader() {
  const { toggleSidebar } = useSidebar()
  
  return (
    <div className="fixed top-0 right-0 left-0 lg:left-64 h-12 bg-white border-b border-gray-200 z-30 flex items-center justify-between px-3 sm:px-6">
      <button onClick={toggleSidebar} className="lg:hidden p-1.5 hover:bg-gray-100 rounded">
        <Menu className="w-5 h-5" />
      </button>
      <div className="flex items-center gap-2 flex-1 max-w-md mx-2">
        <input type="text" placeholder="Search..." className="flex-1 border rounded-lg px-2 sm:px-3 py-1 text-xs" />
        <button className="p-1.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          <Search className="w-4 h-4" />
        </button>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <span className="text-xs font-medium hidden sm:inline">English</span>
        <button className="relative">
          <Bell className="w-4 h-4 text-gray-600" />
        </button>
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="https://via.placeholder.com/32" alt="Admin" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" />
          <div className="text-xs hidden md:block">
            <div className="font-semibold">Admin</div>
            <div className="text-gray-500 text-[10px]">subadmindemots@demo.com</div>
          </div>
          <ChevronDown className="w-3 h-3 text-gray-600 hidden sm:block" />
        </div>
      </div>
    </div>
  )
}

export default AdminHeader
