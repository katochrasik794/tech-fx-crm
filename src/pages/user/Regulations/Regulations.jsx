import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import { useState } from 'react'
import { FileText, Clipboard, Upload, ArrowRight } from 'lucide-react'

function Regulations() {
  const [formData, setFormData] = useState({
    accountName: '',
    accountNo: '',
    ifscCode: '',
    ibanNo: '',
    bankName: '',
    bankAddress: '',
    country: '',
    bookBank: null
  })

  const documents = [
    { type: 'Proof of Identity', id: 'LOCAL PAYMENT', idNumber: 'ID number', status: 'Approved', comment: 'Comment', date: '05/09/2025 12:09:04' },
    { type: 'Proof of Address', id: 'PAYMENT', idNumber: 'Legal name', status: 'Approved', comment: 'Comment', date: '05/09/2025 12:09:04' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <>
      <Header />
      <div className="flex w-full min-w-0 overflow-x-hidden">
        <Sidebar />
        <div className="flex-1 lg:ml-80 mt-14 lg:mt-0 px-2 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-6 bg-[#f5f5f5] min-h-screen w-full min-w-0">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start">
            <div className="flex-1 w-full min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 lg:mb-6 px-1">Compliance</h1>
              <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
                <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5 lg:mb-6">Uploaded documents</h2>
                
                <div className="space-y-3 sm:space-y-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg">
                      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                          <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm sm:text-base font-semibold">{doc.type}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto text-xs sm:text-sm">
                        <div>
                          <p className="text-gray-500">ID number</p>
                          <p className="font-semibold">{doc.idNumber}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Status</p>
                          <span className="px-2 sm:px-3 lg:px-4 py-1 bg-green-100 text-green-600 rounded-full text-xs">{doc.status}</span>
                        </div>
                        <div>
                          <p className="text-gray-500">Comment</p>
                          <p className="font-semibold break-all">{doc.comment}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">{doc.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-96 flex-shrink-0 flex flex-col gap-2 sm:gap-3">
              <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Verified Bank account</h3>
                <div className="text-center py-6 sm:py-8 text-gray-400">
                  <Clipboard className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm">No bank details yet!</p>
                </div>
              </div>

              <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Bank account details</h3>
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm mb-1 sm:mb-2">Account Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        placeholder="Account Name"
                        className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        value={formData.accountName}
                        onChange={(e) => setFormData({...formData, accountName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm mb-1 sm:mb-2">Account No. <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        placeholder="Account No."
                        className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        value={formData.accountNo}
                        onChange={(e) => setFormData({...formData, accountNo: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm mb-1 sm:mb-2">IFSC/Swift Code <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        placeholder="IFSC/Swift Code"
                        className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        value={formData.ifscCode}
                        onChange={(e) => setFormData({...formData, ifscCode: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm mb-1 sm:mb-2">IBAN No.</label>
                      <input
                        type="text"
                        placeholder="IBAN No."
                        className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        value={formData.ibanNo}
                        onChange={(e) => setFormData({...formData, ibanNo: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm mb-1 sm:mb-2">Bank Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        placeholder="Bank Name"
                        className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        value={formData.bankName}
                        onChange={(e) => setFormData({...formData, bankName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm mb-1 sm:mb-2">Bank address</label>
                      <input
                        type="text"
                        placeholder="Bank address"
                        className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        value={formData.bankAddress}
                        onChange={(e) => setFormData({...formData, bankAddress: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm mb-1 sm:mb-2">Country <span className="text-red-500">*</span></label>
                      <select
                        className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                      >
                        <option value="">Select country</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="IN">India</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm mb-1 sm:mb-2">Book Bank <span className="text-red-500">*</span></label>
                      <button
                        type="button"
                        className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm border rounded-lg text-left flex items-center gap-2 hover:bg-gray-50"
                      >
                        <Upload className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">Upload a document</span>
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-violet-500 text-white py-2.5 sm:py-3 rounded-full font-semibold hover:bg-orange-600 flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    Submit Details
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Regulations






