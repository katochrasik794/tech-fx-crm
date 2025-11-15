import { Save } from 'lucide-react'
import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'

function Settings() {
  const [settings, setSettings] = useState({
    siteName: 'TechySquad',
    email: 'admin@techysquad.com',
    minDeposit: '10',
    maxWithdraw: '10000',
    commission: '5'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Settings saved:', settings)
  }

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 ml-64 p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4">General Settings</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Site Name</label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Admin Email</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({...settings, email: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button type="submit" className="flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
              <Save className="w-5 h-5" />
              Save Changes
            </button>
          </form>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4">Trading Settings</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Minimum Deposit ($)</label>
              <input
                type="number"
                value={settings.minDeposit}
                onChange={(e) => setSettings({...settings, minDeposit: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Maximum Withdrawal ($)</label>
              <input
                type="number"
                value={settings.maxWithdraw}
                onChange={(e) => setSettings({...settings, maxWithdraw: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">IB Commission (%)</label>
              <input
                type="number"
                value={settings.commission}
                onChange={(e) => setSettings({...settings, commission: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button type="submit" className="flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
              <Save className="w-5 h-5" />
              Save Changes
            </button>
          </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Settings
