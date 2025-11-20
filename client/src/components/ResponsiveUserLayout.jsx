import Sidebar from './Sidebar'
import Header from './Header'

function ResponsiveUserLayout({ children, title }) {
  return (
    <>
      <Header />
      <div className="flex w-full min-w-0">
        <Sidebar />
        <div className="flex-1 lg:ml-80 mt-14 lg:mt-0 px-2 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-6 bg-gradient-to-b from-purple-50 via-purple-50 to-green-50 min-h-screen w-full min-w-0 overflow-x-hidden">
          {title && <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-5 lg:mb-6 px-1">{title}</h1>}
          <div className="w-full min-w-0 max-w-full">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default ResponsiveUserLayout

