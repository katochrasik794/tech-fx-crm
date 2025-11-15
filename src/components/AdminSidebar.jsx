import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import { LayoutDashboard, Users, Gift, Network, UsersRound, ArrowLeftRight, Mail, Newspaper, Bell, Trophy, BarChart3, AlertTriangle, Ticket, Settings, Shield, ChevronDown, Megaphone, Copy, X } from 'lucide-react'
import { useSidebar } from '../context/SidebarContext'

function AdminSidebar({ logoSrc = '/logo.png', logoAlt = 'FINCRM' }) {
  const location = useLocation()
  const { isSidebarOpen, closeSidebar } = useSidebar()
  
  const activeMenu = useMemo(() => {
    if (location.pathname.startsWith('/admin/user')) return 'user'
    if (location.pathname.startsWith('/admin/bonus')) return 'bonus'
    if (location.pathname.startsWith('/admin/ib')) return 'ib'
    if (location.pathname.startsWith('/admin/group')) return 'group'
    if (location.pathname.startsWith('/admin/transaction')) return 'transaction'
    if (location.pathname.startsWith('/admin/marketing')) return 'marketing'
    if (location.pathname.startsWith('/admin/pamm')) return 'pamm'
    if (location.pathname.startsWith('/admin/notification')) return 'notification'
    if (location.pathname.startsWith('/admin/rewards')) return 'rewards'
    if (location.pathname.startsWith('/admin/reports')) return 'reports'
    if (location.pathname.startsWith('/admin/risk')) return 'risk'
    if (location.pathname.startsWith('/admin/settings')) return 'settings'
    if (location.pathname.startsWith('/admin/subadmin')) return 'subadmin'
    return null
  }, [location.pathname])
  
  const [openMenu, setOpenMenu] = useState(activeMenu)
  
  useEffect(() => {
    setOpenMenu(activeMenu)
  }, [activeMenu])

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu)
  }

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      closeSidebar()
    }
  }

  return (
    <>
    {isSidebarOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={closeSidebar}></div>
    )}
    <div className={`w-64 h-screen bg-white shadow-lg overflow-y-scroll fixed left-0 top-0 z-50 border-r border-gray-200 transition-transform duration-300 ${
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    }`}>
      <button onClick={closeSidebar} className="lg:hidden absolute top-4 right-4 p-1 hover:bg-gray-100 rounded">
        <X className="w-5 h-5" />
      </button>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-6">
          <img src={logoSrc} alt={logoAlt} className="h-8 w-auto" />
        </div>

        <nav className="space-y-1">
          <Link to="/admin/dashboard" onClick={handleLinkClick} className={`flex items-center gap-2 p-2 rounded ${location.pathname === '/admin/dashboard' || location.pathname === '/admin' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white'}`}>
            <LayoutDashboard className="w-4 h-4" />
            <span className="text-xs">Dashboard</span>
          </Link>

          <div>
            <button onClick={() => toggleMenu('user')} className="w-full flex items-center justify-between p-2 hover:text-violet-500 hover:text-white rounded">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span className="text-xs text-gray-900">User Management</span>
              </div>
              <ChevronDown className={`w-3 h-3 transition-transform ${openMenu === 'user' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'user' && (
              <div className="ml-10 space-y-1 mt-1">
                <Link to="/admin/user/add" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/user/add' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Add User</Link>
                <Link to="/admin/user/list" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/user/list' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>User List</Link>
                <Link to="/admin/user/create-mt5" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/user/create-mt5' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Create MT5 Account</Link>
                <Link to="/admin/user/mt5-list" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/user/mt5-list' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>MT5 User List</Link>
                <Link to="/admin/user/followup" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/user/followup' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Follow Up List</Link>
                <Link to="/admin/user/pending-docs" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/user/pending-docs' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Pending Documents List</Link>
                <Link to="/admin/user/approved-docs" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/user/approved-docs' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Approved Documents List</Link>
                <Link to="/admin/user/upload-docs" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/user/upload-docs' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Upload User Documents</Link>
                <Link to="/admin/user/add-bank" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/user/add-bank' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Add Bank Details</Link>
                <Link to="/admin/user/bank-list" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/user/bank-list' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Bank Details List</Link>
                <Link to="/admin/user/password-list" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/user/password-list' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>User Password List</Link>
                <Link to="/admin/user/change-password" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/user/change-password' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Change User Password</Link>
                <Link to="/admin/user/add-existing" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/user/add-existing' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Add Existing Client</Link>
                <Link to="/admin/user/change-mt5-password" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/user/change-mt5-password' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Change MT5 Password</Link>
                <Link to="/admin/user/update-leverage" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/user/update-leverage' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Update MT5 Leverage</Link>
                <Link to="/admin/user/resend-verification" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/user/resend-verification' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Resend Verification Mail</Link>
                <Link to="/admin/user/resend-mt5-data" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/user/resend-mt5-data' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Resend MT5 Data Mail</Link>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleMenu('bonus')} className="w-full flex items-center justify-between p-2 hover:text-violet-500 hover:text-white rounded">
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4" />
                <span className="text-xs text-gray-900">Bonus</span>
              </div>
              <ChevronDown className={`w-3 h-3 transition-transform ${openMenu === 'bonus' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'bonus' && (
              <div className="ml-10 space-y-1 mt-1">
                <Link to="/admin/bonus/give" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/bonus/give' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Give Bonus</Link>
                <Link to="/admin/bonus/remove" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/bonus/remove' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Remove Bonus</Link>
                <Link to="/admin/bonus/list" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/bonus/list' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Bonus List</Link>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleMenu('ib')} className="w-full flex items-center justify-between p-2 hover:text-violet-500 hover:text-white rounded">
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4" />
                <span className="text-xs text-gray-900">IB Management</span>
              </div>
              <ChevronDown className={`w-3 h-3 transition-transform ${openMenu === 'ib' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'ib' && (
              <div className="ml-10 space-y-1 mt-1">
                <Link to="/admin/ib/users" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/ib/users' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>IB Users</Link>
                <Link to="/admin/ib/requests" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/ib/requests' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>IB Requests</Link>
                <Link to="/admin/ib/plan" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/ib/plan' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>IB Plan</Link>
                <Link to="/admin/ib/commission-group" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/ib/commission-group' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Commission Group</Link>
                <Link to="/admin/ib/set-commission" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/ib/set-commission' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Set IB Commission</Link>
                <Link to="/admin/ib/move-client" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/ib/move-client' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Move client to IB</Link>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleMenu('group')} className="w-full flex items-center justify-between p-2 hover:text-violet-500 hover:text-white rounded">
              <div className="flex items-center gap-2">
                <UsersRound className="w-4 h-4" />
                <span className="text-xs text-gray-900">Group Management</span>
              </div>
              <ChevronDown className={`w-3 h-3 transition-transform ${openMenu === 'group' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'group' && (
              <div className="ml-10 space-y-1 mt-1">
                <Link to="/admin/group/add" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/group/add' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Add Group</Link>
                <Link to="/admin/group/list" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/group/list' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Group List</Link>
                <Link to="/admin/group/update-mt5" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/group/update-mt5' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Update MT5 Group</Link>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleMenu('transaction')} className="w-full flex items-center justify-between p-2 hover:text-violet-500 hover:text-white rounded">
              <div className="flex items-center gap-2">
                <ArrowLeftRight className="w-4 h-4" />
                <span className="text-xs text-gray-900">Transaction</span>
              </div>
              <ChevronDown className={`w-3 h-3 transition-transform ${openMenu === 'transaction' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'transaction' && (
              <div className="ml-10 space-y-1 mt-1">
                <Link to="/admin/transaction/client-deposit" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/transaction/client-deposit' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Client Deposit</Link>
                <Link to="/admin/transaction/client-withdraw" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/transaction/client-withdraw' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Client Withdraw</Link>
                <Link to="/admin/transaction/wallet-deposit" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/transaction/wallet-deposit' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Wallet Deposit</Link>
                <Link to="/admin/transaction/wallet-withdraw" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/transaction/wallet-withdraw' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Wallet Withdraw</Link>
                <Link to="/admin/transaction/ib-withdraw" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/transaction/ib-withdraw' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>IB Withdraw</Link>
                <Link to="/admin/transaction/internal-transfer" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/transaction/internal-transfer' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Internal Transfer</Link>
                <Link to="/admin/transaction/pending-deposit" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/transaction/pending-deposit' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Pending Deposit</Link>
                <Link to="/admin/transaction/pending-withdraw" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/transaction/pending-withdraw' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Pending Withdraw</Link>
                <Link to="/admin/transaction/pending-ib-withdraw" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/transaction/pending-ib-withdraw' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Pending IB Withdraw</Link>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleMenu('marketing')} className="w-full flex items-center justify-between p-2 hover:text-violet-500 hover:text-white rounded">
              <div className="flex items-center gap-2">
                <Megaphone className="w-4 h-4" />
                <span className="text-xs text-gray-900">Marketing</span>
              </div>
              <ChevronDown className={`w-3 h-3 transition-transform ${openMenu === 'marketing' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'marketing' && (
              <div className="ml-10 space-y-1 mt-1">
                <Link to="/admin/marketing/add" onClick={handleLinkClick} className="block p-2 hover:text-violet-500 hover:text-white rounded text-xs text-gray-900">Add Marketing</Link>
                <Link to="/admin/marketing/list" onClick={handleLinkClick} className="block p-2 hover:text-violet-500 hover:text-white rounded text-xs text-gray-900">Marketing List</Link>
                <Link to="/admin/marketing/incentive-report" onClick={handleLinkClick} className="block p-2 hover:text-violet-500 hover:text-white rounded text-xs text-gray-900">Incentive Report</Link>
                <Link to="/admin/marketing/withdraw-report" onClick={handleLinkClick} className="block p-2 hover:text-violet-500 hover:text-white rounded text-xs text-gray-900">Marketing Withdraw Report</Link>
                <Link to="/admin/marketing/bulk-lead" onClick={handleLinkClick} className="block p-2 hover:text-violet-500 hover:text-white rounded text-xs text-gray-900">Bulk Lead Upload</Link>
                <Link to="/admin/marketing/lead-list" onClick={handleLinkClick} className="block p-2 hover:text-violet-500 hover:text-white rounded text-xs text-gray-900">Lead List</Link>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleMenu('pamm')} className="w-full flex items-center justify-between p-2 hover:text-violet-500 hover:text-white rounded">
              <div className="flex items-center gap-2">
                <Copy className="w-4 h-4" />
                <span className="text-xs text-gray-900">PAMM/Copier</span>
              </div>
              <ChevronDown className={`w-3 h-3 transition-transform ${openMenu === 'pamm' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'pamm' && (
              <div className="ml-10 space-y-1 mt-1">
                <Link to="/admin/pamm/investor-requests" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/pamm/investor-requests' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>PAMM Investor Requests</Link>
                <Link to="/admin/pamm/mm-requests" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/pamm/mm-requests' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>PAMM MM Requests</Link>
                <Link to="/admin/pamm/slave-copier" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/pamm/slave-copier' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Slave Copier Requests</Link>
                <Link to="/admin/pamm/master-copier" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/pamm/master-copier' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Master Copier Requests</Link>
              </div>
            )}
          </div>

          <Link to="/admin/send-email" onClick={handleLinkClick} className={`flex items-center gap-2 p-2 rounded ${location.pathname === '/admin/send-email' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white'}`}>
            <Mail className="w-4 h-4" />
            <span className="text-xs">Send Email</span>
          </Link>

          <Link to="/admin/news" onClick={handleLinkClick} className={`flex items-center gap-2 p-2 rounded ${location.pathname === '/admin/news' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white'}`}>
            <Newspaper className="w-4 h-4" />
            <span className="text-xs">News</span>
          </Link>

          <div>
            <button onClick={() => toggleMenu('notification')} className="w-full flex items-center justify-between p-2 hover:text-violet-500 hover:text-white rounded">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4" />
                <span className="text-xs text-gray-900">Notification</span>
                <span className="ml-auto mr-1 text-violet-500 text-white text-xs px-1.5 py-0.5 rounded-full">4</span>
              </div>
              <ChevronDown className={`w-3 h-3 transition-transform ${openMenu === 'notification' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'notification' && (
              <div className="ml-10 space-y-1 mt-1">
                <Link to="/admin/notification/unread" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/notification/unread' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Unread Notification</Link>
                <Link to="/admin/notification/read" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/notification/read' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Read Notification</Link>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleMenu('rewards')} className="w-full flex items-center justify-between p-2 hover:text-violet-500 hover:text-white rounded">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span className="text-xs text-gray-900">Rewards Management</span>
              </div>
              <ChevronDown className={`w-3 h-3 transition-transform ${openMenu === 'rewards' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'rewards' && (
              <div className="ml-10 space-y-1 mt-1">
                <Link to="/admin/rewards/category-list" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/rewards/category-list' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Rewards Category List</Link>
                <Link to="/admin/rewards/add-category" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/rewards/add-category' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Add Reward Category</Link>
                <Link to="/admin/rewards/list" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/rewards/list' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Rewards List</Link>
                <Link to="/admin/rewards/add" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/rewards/add' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Add Reward</Link>
                <Link to="/admin/rewards/withdraw-list" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/rewards/withdraw-list' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Reward Withdraw List</Link>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleMenu('reports')} className="w-full flex items-center justify-between p-2 hover:text-violet-500 hover:text-white rounded">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span className="text-xs text-gray-900">All Reports</span>
              </div>
              <ChevronDown className={`w-3 h-3 transition-transform ${openMenu === 'reports' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'reports' && (
              <div className="ml-10 space-y-1 mt-1">
                <Link to="/admin/reports/ib-commission" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/reports/ib-commission' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>IB Commission Report</Link>
                <Link to="/admin/reports/reward-history" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/reports/reward-history' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Reward History Report</Link>
                <Link to="/admin/reports/deposit" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/reports/deposit' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Deposit Report</Link>
                <Link to="/admin/reports/withdraw" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/reports/withdraw' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Withdraw Report</Link>
                <Link to="/admin/reports/ib-withdraw" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/reports/ib-withdraw' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>IB Withdraw Report</Link>
                <Link to="/admin/reports/internal-transfer" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/reports/internal-transfer' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Internal Transfer Report</Link>
                <Link to="/admin/reports/wallet-history" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/reports/wallet-history' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Wallet History Report</Link>
                <Link to="/admin/reports/position" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/reports/position' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Position Report</Link>
                <Link to="/admin/reports/history" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/reports/history' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>History Report</Link>
                <Link to="/admin/reports/login-activity" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/reports/login-activity' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Login Activity</Link>
                <Link to="/admin/reports/lot" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/reports/lot' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Lot Report</Link>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleMenu('risk')} className="w-full flex items-center justify-between p-2 hover:text-violet-500 hover:text-white rounded">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-xs text-gray-900">Risk Management Reports</span>
              </div>
              <ChevronDown className={`w-3 h-3 transition-transform ${openMenu === 'risk' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'risk' && (
              <div className="ml-10 space-y-1 mt-1">
                <Link to="/admin/risk/profit-risk" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/risk/profit-risk' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Profit Risk Report</Link>
                <Link to="/admin/risk/scalping-trade" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/risk/scalping-trade' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Scalping Trade Report</Link>
              </div>
            )}
          </div>

          <Link to="/admin/tickets" onClick={handleLinkClick} className={`flex items-center gap-2 p-2 rounded ${location.pathname === '/admin/tickets' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white'}`}>
            <Ticket className="w-4 h-4" />
            <span className="text-xs">Tickets</span>
          </Link>

          <div>
            <button onClick={() => toggleMenu('settings')} className="w-full flex items-center justify-between p-2 hover:text-violet-500 hover:text-white rounded">
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                <span className="text-xs text-gray-900">Settings</span>
              </div>
              <ChevronDown className={`w-3 h-3 transition-transform ${openMenu === 'settings' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'settings' && (
              <div className="ml-10 space-y-1 mt-1">
                <Link to="/admin/settings/deposit-bank" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/settings/deposit-bank' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Deposit Bank Details</Link>
                <Link to="/admin/settings/promotion" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/settings/promotion' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Promotion List</Link>
                <Link to="/admin/settings/psp" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/settings/psp' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>PSP Setting</Link>
                <Link to="/admin/settings/default" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/settings/default' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Default Setting</Link>
                <Link to="/admin/settings/ib-terms" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/settings/ib-terms' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>IB Request Terms</Link>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleMenu('subadmin')} className="w-full flex items-center justify-between p-2 hover:text-violet-500 hover:text-white rounded">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span className="text-xs text-gray-900">Sub Admin</span>
              </div>
              <ChevronDown className={`w-3 h-3 transition-transform ${openMenu === 'subadmin' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'subadmin' && (
              <div className="ml-10 space-y-1 mt-1">
                <Link to="/admin/subadmin/create" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/subadmin/create' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Create Sub Admin</Link>
                <Link to="/admin/subadmin/list" onClick={handleLinkClick} className={`block p-2 rounded text-xs ${location.pathname === '/admin/subadmin/list' ? 'bg-violet-500 text-white' : 'hover:text-violet-500 hover:text-white text-gray-900'}`}>Sub Admin List</Link>
              </div>
            )}
          </div>
        </nav>

        <div className="mt-6 p-4 bg-gray-50 rounded-xl text-center">
          <div className="w-10 h-10 text-violet-500 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-white font-bold">?</span>
          </div>
          <p className="text-sm font-semibold mb-2">Need Help ?</p>
          <button className="text-violet-500 text-sm font-semibold hover:text-orange-600">Go to help desk</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminSidebar
