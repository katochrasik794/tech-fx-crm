function ResponsiveForm({ children, onSubmit, title, compact }) {
  return (
    <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
      {title && <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">{title}</h2>}
      <form onSubmit={onSubmit} className={compact ? "space-y-2" : "space-y-3 sm:space-y-4"}>
        {children}
      </form>
    </div>
  )
}

export function FormField({ label, required, children, fullWidth }) {
  return (
    <div className={fullWidth ? "col-span-full" : ""}>
      <label className="block text-xs sm:text-sm font-medium mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}

export function FormGrid({ children, cols = 2 }) {
  const gridClass = cols === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
  return (
    <div className={`grid ${gridClass} gap-3 sm:gap-4`}>
      {children}
    </div>
  )
}

export default ResponsiveForm
