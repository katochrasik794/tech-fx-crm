import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'

function MoveClientToIB() {
  const [selectedClient, setSelectedClient] = useState('')
  const [selectedIB, setSelectedIB] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedClient || !selectedIB) {
      alert('Please select both Client and IB')
      return
    }
    console.log('Assigning client:', selectedClient, 'to IB:', selectedIB)
    alert('Client assigned successfully!')
  }

  return (
    <div className="flex w-full min-w-0 overflow-x-hidden">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-2 sm:p-4 lg:p-8 w-full bg-gray-50 min-h-screen overflow-x-hidden max-w-full min-w-0">
        <h1 className="text-xl font-bold mb-4 px-2 sm:px-0">Assign client under IB</h1>
        <div className="bg-white rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm w-full max-w-xl mx-auto min-w-0" style={{ maxWidth: 'min(100%, calc(100vw - 2rem))' }}>
          <form onSubmit={handleSubmit} className="w-full min-w-0 max-w-full">
            <div className="mb-3 w-full min-w-0 max-w-full">
              <label className="block text-xs font-medium mb-1">
                Select Client <span className="text-red-500">*</span>
              </label>
              <select 
                value={selectedClient} 
                onChange={(e) => setSelectedClient(e.target.value)}
                className="w-full px-2 py-1.5 text-xs border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}
              >
                <option value="">Please Choose...</option>
                <option value="demo">demo - har33h@FinCRM.com</option>
                <option value="demouser">Demo User - democlient@ts.com</option>
                <option value="client1">Client Name - clientname@testing.com</option>
                <option value="satish">Satish Hirpara - s.k.hirpara@gmail.com</option>
              </select>
            </div>
            <div className="mb-4 w-full min-w-0 max-w-full">
              <label className="block text-xs font-medium mb-1">
                Select IB <span className="text-red-500">*</span>
              </label>
              <select 
                value={selectedIB} 
                onChange={(e) => setSelectedIB(e.target.value)}
                className="w-full px-2 py-1.5 text-xs border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}
              >
                <option value="">Please Choose...</option>
                <option value="FinCRM">FinCRM - crm@FinCRM.com</option>
                <option value="devaccount">Dev Account - patelsinol@gmail.com</option>
                <option value="abhishek">Abhishek - abhishek5319@gmail.com</option>
                <option value="bijal">Bijal TS - bijal@FinCRM.com</option>
              </select>
            </div>
            <button type="submit" className="px-3 py-1 text-violet-500 text-white rounded hover:bg-orange-600 text-xs">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MoveClientToIB
