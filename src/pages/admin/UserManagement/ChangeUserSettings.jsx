import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminHeader from '../../../components/AdminHeader'

function ChangeUserSettings() {
  const [settings, setSettings] = useState({
    disableAccount: 'No',
    disableDeposit: 'No',
    disableWithdraw: 'No',
    disableTransfer: 'No',
    disableIBWithdraw: 'No',
    disableMT5ToWallet: 'No',
    disableWalletToMT5: 'No'
  })

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Change User Setting</h1>
        <div className="bg-white rounded-2xl p-8 shadow-sm max-w-2xl">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Disable Account <span className="text-red-500">*</span></label>
              <select className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={settings.disableAccount} onChange={(e) => setSettings({...settings, disableAccount: e.target.value})}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Disable Deposit <span className="text-red-500">*</span></label>
              <select className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={settings.disableDeposit} onChange={(e) => setSettings({...settings, disableDeposit: e.target.value})}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Disable Withdraw <span className="text-red-500">*</span></label>
              <select className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={settings.disableWithdraw} onChange={(e) => setSettings({...settings, disableWithdraw: e.target.value})}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Disable Transfer <span className="text-red-500">*</span></label>
              <select className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={settings.disableTransfer} onChange={(e) => setSettings({...settings, disableTransfer: e.target.value})}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Disable IB Withdraw <span className="text-red-500">*</span></label>
              <select className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={settings.disableIBWithdraw} onChange={(e) => setSettings({...settings, disableIBWithdraw: e.target.value})}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Disable MT5 To Wallet <span className="text-red-500">*</span></label>
              <select className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={settings.disableMT5ToWallet} onChange={(e) => setSettings({...settings, disableMT5ToWallet: e.target.value})}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Disable Wallet To MT5 <span className="text-red-500">*</span></label>
              <select className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={settings.disableWalletToMT5} onChange={(e) => setSettings({...settings, disableWalletToMT5: e.target.value})}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div className="pt-4">
              <button type="submit" className="px-6 py-2.5 text-violet-500 text-white rounded-lg hover:bg-orange-600 transition-colors">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChangeUserSettings
