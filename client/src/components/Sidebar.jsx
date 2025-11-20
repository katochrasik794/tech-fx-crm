import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { LayoutDashboard, Shield, Wallet, Users, Copy, BarChart3, Trophy, CreditCard, Newspaper, Headphones, LogOut } from 'lucide-react'
import { useSidebar } from '../context/SidebarContext'

function Sidebar({ logoSrc = '/logo.png', logoAlt = 'FINCRM' }) {
  const { mobileMenuOpen, setMobileMenuOpen } = useSidebar()
  const location = useLocation()
  const [openMenu, setOpenMenu] = useState(null)

  useEffect(() => {
    if (location.pathname.startsWith('/myfund')) {
      setOpenMenu('myfund')
    } else if (location.pathname.startsWith('/ib')) {
      setOpenMenu('ib')
    } else if (location.pathname.startsWith('/mydata')) {
      setOpenMenu('data')
    }
  }, [location.pathname])

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu)
  }

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <div className={`${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 transition-transform duration-300 w-72 h-screen lg:h-[calc(100vh-7rem)] bg-white/95 backdrop-blur-sm shadow-lg overflow-y-auto fixed right-0 lg:right-auto top-0 lg:left-4 lg:top-24 lg:rounded-2xl z-40 border border-gray-200`}>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-6">
          <img src={logoSrc} alt={logoAlt} className="h-8 w-auto" />
        </div>

        <nav className="space-y-2">
          <Link to="/dashboard" onClick={handleLinkClick} className={`flex items-center gap-3 p-3 rounded-lg ${location.pathname === '/dashboard' || location.pathname === '/' ? '' : 'hover:bg-violet-50'}`}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${location.pathname === '/dashboard' || location.pathname === '/' ? 'bg-violet-500' : 'bg-gray-100 hover:bg-violet-100'}`}>
              <LayoutDashboard className={`w-5 h-5 ${location.pathname === '/dashboard' || location.pathname === '/' ? 'text-white' : 'text-gray-700'}`} />
            </div>
            <span className={`font-medium ${location.pathname === '/dashboard' || location.pathname === '/' ? 'text-violet-600' : 'text-gray-900 hover:text-violet-600'}`}>Dashboard</span>
          </Link>

          <Link to="/regulations" onClick={handleLinkClick} className={`flex items-center gap-3 p-3 rounded-lg ${location.pathname === '/regulations' ? '' : 'hover:bg-violet-50'}`}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${location.pathname === '/regulations' ? 'bg-violet-500' : 'bg-gray-100 hover:bg-violet-100'}`}>
              <Shield className={`w-5 h-5 ${location.pathname === '/regulations' ? 'text-white' : 'text-gray-700'}`} />
            </div>
            <span className={`font-medium ${location.pathname === '/regulations' ? 'text-violet-600' : 'text-gray-900 hover:text-violet-600'}`}>Regulations</span>
          </Link>

          <div>
            <button onClick={() => toggleMenu('myfund')} className="w-full flex items-center justify-between p-3 hover:bg-violet-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <Wallet className="w-5 h-5 text-gray-700" />
                </div>
                <span className="font-medium text-gray-900 hover:text-violet-600">My Fund</span>
              </div>
              <span className="text-xl text-gray-900">{openMenu === 'myfund' ? '−' : '+'}</span>
            </button>
            {openMenu === 'myfund' && (
              <div className="ml-14 space-y-1 mt-1">
                <Link to="/myfund/deposit" onClick={handleLinkClick} className={`block p-2 rounded text-sm ${location.pathname === '/myfund/deposit' ? 'text-violet-600 font-semibold' : 'text-gray-600 hover:text-violet-600'}`}>Deposit</Link>
                <Link to="/myfund/withdrawal" onClick={handleLinkClick} className={`block p-2 rounded text-sm ${location.pathname === '/myfund/withdrawal' ? 'text-violet-600 font-semibold' : 'text-gray-600 hover:text-violet-600'}`}>Withdrawal</Link>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleMenu('ib')} className="w-full flex items-center justify-between p-3 hover:bg-violet-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-gray-700" />
                </div>
                <span className="font-medium text-gray-900 hover:text-violet-600">IB Programme</span>
              </div>
              <span className="text-xl text-gray-900">{openMenu === 'ib' ? '−' : '+'}</span>
            </button>
            {openMenu === 'ib' && (
              <div className="ml-14 space-y-1 mt-1">
                <Link to="/ib/dashboard" onClick={handleLinkClick} className={`block p-2 rounded text-sm ${location.pathname === '/ib/dashboard' ? 'text-violet-600 font-semibold' : 'text-gray-600 hover:text-violet-600'}`}>IB Dashboard</Link>
                <Link to="/ib/clients" onClick={handleLinkClick} className={`block p-2 rounded text-sm ${location.pathname === '/ib/clients' ? 'text-violet-600 font-semibold' : 'text-gray-600 hover:text-violet-600'}`}>My Clients</Link>
                <Link to="/ib/tree" onClick={handleLinkClick} className={`block p-2 rounded text-sm ${location.pathname === '/ib/tree' ? 'text-violet-600 font-semibold' : 'text-gray-600 hover:text-violet-600'}`}>IB Tree Chart</Link>
                <Link to="/ib/commission" onClick={handleLinkClick} className={`block p-2 rounded text-sm ${location.pathname === '/ib/commission' ? 'text-violet-600 font-semibold' : 'text-gray-600 hover:text-violet-600'}`}>My Commission</Link>
                <Link to="/ib/withdraw" onClick={handleLinkClick} className={`block p-2 rounded text-sm ${location.pathname === '/ib/withdraw' ? 'text-violet-600 font-semibold' : 'text-gray-600 hover:text-violet-600'}`}>IB Withdraw</Link>
                <Link to="/ib/team-deposit" onClick={handleLinkClick} className={`block p-2 rounded text-sm ${location.pathname === '/ib/team-deposit' ? 'text-violet-600 font-semibold' : 'text-gray-600 hover:text-violet-600'}`}>Team Deposit Report</Link>
                <Link to="/ib/team-withdraw" onClick={handleLinkClick} className={`block p-2 rounded text-sm ${location.pathname === '/ib/team-withdraw' ? 'text-violet-600 font-semibold' : 'text-gray-600 hover:text-violet-600'}`}>Team Withdraw Report</Link>
              </div>
            )}
          </div>

          <Link to="/copier" onClick={handleLinkClick} className={`flex items-center gap-3 p-3 rounded-lg ${location.pathname === '/copier' ? '' : 'hover:bg-violet-50'}`}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${location.pathname === '/copier' ? 'bg-violet-500' : 'bg-gray-100 hover:bg-violet-100'}`}>
              <Copy className={`w-5 h-5 ${location.pathname === '/copier' ? 'text-white' : 'text-gray-700'}`} />
            </div>
            <span className={`font-medium ${location.pathname === '/copier' ? 'text-violet-600' : 'text-gray-900 hover:text-violet-600'}`}>Copier</span>
          </Link>

          <div>
            <button onClick={() => toggleMenu('data')} className="w-full flex items-center justify-between p-3 hover:bg-violet-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-gray-700" />
                </div>
                <span className="font-medium text-gray-900 hover:text-violet-600">My Data</span>
              </div>
              <span className="text-xl text-gray-900">{openMenu === 'data' ? '−' : '+'}</span>
            </button>
            {openMenu === 'data' && (
              <div className="ml-14 space-y-1 mt-1">
                <Link to="/mydata/deposit-report" onClick={handleLinkClick} className={`block p-2 rounded text-sm ${location.pathname === '/mydata/deposit-report' ? 'text-violet-600 font-semibold' : 'text-gray-600 hover:text-violet-600'}`}>Deposit Report</Link>
                <Link to="/mydata/withdraw-report" onClick={handleLinkClick} className={`block p-2 rounded text-sm ${location.pathname === '/mydata/withdraw-report' ? 'text-violet-600 font-semibold' : 'text-gray-600 hover:text-violet-600'}`}>Withdraw Report</Link>
                <Link to="/mydata/internal-transfers" onClick={handleLinkClick} className={`block p-2 rounded text-sm ${location.pathname === '/mydata/internal-transfers' ? 'text-violet-600 font-semibold' : 'text-gray-600 hover:text-violet-600'}`}>Internal Transfers</Link>
                <Link to="/mydata/deal-report" onClick={handleLinkClick} className={`block p-2 rounded text-sm ${location.pathname === '/mydata/deal-report' ? 'text-violet-600 font-semibold' : 'text-gray-600 hover:text-violet-600'}`}>Deal Report</Link>
                <Link to="/mydata/summary-report" onClick={handleLinkClick} className={`block p-2 rounded text-sm ${location.pathname === '/mydata/summary-report' ? 'text-violet-600 font-semibold' : 'text-gray-600 hover:text-violet-600'}`}>Summary Report</Link>
              </div>
            )}
          </div>

          <Link to="/trade-and-win" onClick={handleLinkClick} className={`flex items-center gap-3 p-3 rounded-lg ${location.pathname === '/trade-and-win' ? '' : 'hover:bg-violet-50'}`}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${location.pathname === '/trade-and-win' ? 'bg-violet-500' : 'bg-gray-100 hover:bg-violet-100'}`}>
              <Trophy className={`w-5 h-5 ${location.pathname === '/trade-and-win' ? 'text-white' : 'text-gray-700'}`} />
            </div>
            <span className={`font-medium ${location.pathname === '/trade-and-win' ? 'text-violet-600' : 'text-gray-900 hover:text-violet-600'}`}>Trade And Win</span>
          </Link>

          <Link to="/wallet" onClick={handleLinkClick} className={`flex items-center gap-3 p-3 rounded-lg ${location.pathname === '/wallet' ? '' : 'hover:bg-violet-50'}`}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${location.pathname === '/wallet' ? 'bg-violet-500' : 'bg-gray-100 hover:bg-violet-100'}`}>
              <CreditCard className={`w-5 h-5 ${location.pathname === '/wallet' ? 'text-white' : 'text-gray-700'}`} />
            </div>
            <span className={`font-medium ${location.pathname === '/wallet' ? 'text-violet-600' : 'text-gray-900 hover:text-violet-600'}`}>My Wallet</span>
          </Link>

          <Link to="/news" onClick={handleLinkClick} className={`flex items-center gap-3 p-3 rounded-lg ${location.pathname === '/news' ? '' : 'hover:bg-violet-50'}`}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${location.pathname === '/news' ? 'bg-violet-500' : 'bg-gray-100 hover:bg-violet-100'}`}>
              <Newspaper className={`w-5 h-5 ${location.pathname === '/news' ? 'text-white' : 'text-gray-700'}`} />
            </div>
            <span className={`font-medium ${location.pathname === '/news' ? 'text-violet-600' : 'text-gray-900 hover:text-violet-600'}`}>News</span>
          </Link>

          <Link to="/support" onClick={handleLinkClick} className={`flex items-center gap-3 p-3 rounded-lg ${location.pathname === '/support' ? '' : 'hover:bg-violet-50'}`}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${location.pathname === '/support' ? 'bg-violet-500' : 'bg-gray-100 hover:bg-violet-100'}`}>
              <Headphones className={`w-5 h-5 ${location.pathname === '/support' ? 'text-white' : 'text-gray-700'}`} />
            </div>
            <span className={`font-medium ${location.pathname === '/support' ? 'text-violet-600' : 'text-gray-900 hover:text-violet-600'}`}>Support</span>
          </Link>
        </nav>

        <div className="mt-6 p-4 border border-gray-300 rounded-lg text-center">
          <p className="text-sm mb-3">Copy your Referral Link!</p>
          <button className="bg-lime-400 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-lime-500">Click Here</button>
        </div>

        <button className="w-full mt-4 p-3 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 rounded">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
      {mobileMenuOpen && <div onClick={() => setMobileMenuOpen(false)} className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30" />}
    </>
  )
}

export default Sidebar
