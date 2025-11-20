import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import { Link } from 'react-router-dom'
import { ArrowLeft, Network } from 'lucide-react'

function IBTreeChart() {
  return (
    <>
      <Header />
      <div className="flex w-full min-w-0 overflow-x-hidden">
        <Sidebar />
        <div className="flex-1 lg:ml-80 mt-14 lg:mt-0 px-2 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-6 bg-[#f5f5f5] min-h-screen w-full min-w-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 lg:mb-6 px-1">IB Programme</h1>
          
          <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
            <Link to="/ib/dashboard" className="inline-block mb-4 sm:mb-5 lg:mb-6">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </Link>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-4 sm:mb-5 lg:mb-6">IB Tree Chart</h2>
            
            <div className="text-center py-12 sm:py-16 lg:py-20 text-gray-400">
              <Network className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4" />
              <p className="text-lg sm:text-xl">No referral tree yet!</p>
              <p className="text-xs sm:text-sm mt-2">Your referral network will appear here as a tree structure</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IBTreeChart






