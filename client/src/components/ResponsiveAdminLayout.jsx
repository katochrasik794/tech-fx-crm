import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'

function ResponsiveAdminLayout({ children, title }) {
  return (
    <div className="flex">
      <AdminSidebar logoSrc="/logo.png" />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-2 sm:p-4 lg:p-8 bg-gradient-to-b from-purple-50 via-purple-50 to-green-50 min-h-screen w-full overflow-x-hidden">
        {title && <h1 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 px-2">{title}</h1>}
        {children}
      </div>
    </div>
  )
}

export default ResponsiveAdminLayout
