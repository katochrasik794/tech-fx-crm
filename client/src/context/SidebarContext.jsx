import { createContext, useContext, useState } from 'react'

const SidebarContext = createContext()

export function SidebarProvider({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
    setMobileMenuOpen(false)
  }

  const openSidebar = () => {
    setIsSidebarOpen(true)
    setMobileMenuOpen(true)
  }

  return (
    <SidebarContext.Provider value={{ 
      mobileMenuOpen, 
      setMobileMenuOpen,
      isSidebarOpen,
      setIsSidebarOpen,
      toggleSidebar,
      closeSidebar,
      openSidebar
    }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within SidebarProvider')
  }
  return context
}
