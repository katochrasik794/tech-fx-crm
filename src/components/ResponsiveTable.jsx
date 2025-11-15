function ResponsiveTable({ children }) {
  return (
    <div className="bg-white rounded-lg sm:rounded-2xl p-2 sm:p-4 lg:p-6 shadow-sm overflow-x-auto">
      <div className="overflow-x-auto -mx-2 sm:mx-0">
        <div className="inline-block min-w-full align-middle">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ResponsiveTable
