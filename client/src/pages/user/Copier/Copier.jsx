import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import { Clipboard } from 'lucide-react'

function Copier() {
  return (
    <>
      <Header />
      <div className="flex w-full min-w-0 overflow-x-hidden">
        <Sidebar />
        <div className="flex-1 lg:ml-80 mt-14 lg:mt-0 px-2 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-6 bg-[#f5f5f5] min-h-screen w-full min-w-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 lg:mb-6 px-1">Copier</h1>
          
          <div className="bg-white rounded-lg sm:rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-12 shadow-sm">
            <div className="text-center py-12 sm:py-16 lg:py-20">
              <Clipboard className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 text-gray-400" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Copy Trading Coming Soon!</h2>
              <p className="text-xs sm:text-sm text-gray-500">This feature will allow you to copy trades from successful traders.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Copier






