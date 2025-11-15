import { useState } from 'react'
import ResponsiveAdminLayout from '../../../components/ResponsiveAdminLayout'

function ResendVerificationMail() {
  const [client, setClient] = useState('')

  return (
    <ResponsiveAdminLayout title="Resend Verification Mail">
      <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-sm max-w-2xl w-full">
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-medium mb-1">Select Client <span className="text-red-500">*</span></label>
            <select className="w-full px-3 py-1.5 text-xs sm:text-sm border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={client} onChange={(e) => setClient(e.target.value)}>
              <option value="">Please Choose...</option>
              <option value="1">John Doe</option>
              <option value="2">Jane Smith</option>
            </select>
          </div>
          <button type="submit" className="px-4 py-1.5 text-xs sm:text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600">Submit</button>
        </form>
      </div>
    </ResponsiveAdminLayout>
  )
}

export default ResendVerificationMail
