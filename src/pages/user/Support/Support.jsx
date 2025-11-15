import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft, MessageCircle, Mail, ArrowRight } from 'lucide-react'

function Support() {
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('')
  const [query, setQuery] = useState('')

  const tickets = [
    { id: '#ZAHSNUSTIN', title: 'Hello', type: 'Trading Operations', status: 'Pending' },
    { id: '#NNLGAUFRTZ', title: 'Saya tidak punya KTP', type: 'KYC', status: 'Pending' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ category, title, priority, query })
  }

  return (
    <>
      <Header />
      <div className="flex w-full min-w-0 overflow-x-hidden">
        <Sidebar />
        <div className="flex-1 lg:ml-80 mt-14 lg:mt-0 px-2 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-6 bg-[#f5f5f5] min-h-screen w-full min-w-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 lg:mb-6 px-1">Support Center</h1>
          
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <div className="flex-1 w-full min-w-0">
              <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
                <Link to="/dashboard" className="inline-block mb-4 sm:mb-6">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </Link>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-4 sm:mb-6">My Tickets</h2>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <select className="flex-1 px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base">
                    <option>All statuses</option>
                    <option>Pending</option>
                    <option>Resolved</option>
                    <option>Closed</option>
                  </select>
                  <button className="text-violet-500 text-white px-6 sm:px-8 py-2 rounded-lg hover:bg-orange-600 text-sm sm:text-base">
                    Search
                  </button>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {tickets.map((ticket) => (
                    <div key={ticket.id} className="border rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3 sm:mb-4">
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 w-full sm:w-auto">
                          <div>
                            <p className="text-xs text-gray-500">Ticket ID:</p>
                            <p className="text-sm sm:text-base font-semibold break-all">{ticket.id}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Title:</p>
                            <p className="text-sm sm:text-base font-semibold">{ticket.title}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Enquiry Type:</p>
                            <p className="text-sm sm:text-base font-semibold">{ticket.type}</p>
                          </div>
                        </div>
                        <span className="px-3 sm:px-4 py-1 text-violet-500 text-white rounded-full text-xs self-start sm:self-auto">{ticket.status}</span>
                      </div>
                      
                      <div className="mb-3 sm:mb-4">
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">Solution:</p>
                        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg min-h-16 sm:min-h-20"></div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <input
                          type="text"
                          placeholder="Enter comment"
                          className="flex-1 px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                        />
                        <button className="bg-black text-white px-4 sm:px-6 py-2 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                          <MessageCircle className="w-4 h-4" />
                          Reply
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-96 flex-shrink-0">
              <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Helpline</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-gray-600" />
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">Chat with us</p>
                    <button className="text-violet-500 text-white px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">Click here</button>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-gray-600" />
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">Mail Us</p>
                    <button className="bg-green-400 text-white px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">Click here</button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Raise New Ticket</h3>
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm mb-2">Category<span className="text-red-500">*</span></label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    >
                      <option value="">Please Choose...</option>
                      <option value="trading">Trading Operations</option>
                      <option value="kyc">KYC</option>
                      <option value="deposit">Deposit</option>
                      <option value="withdrawal">Withdrawal</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm mb-2">Title<span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      placeholder="Enter Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm mb-2">Priority<span className="text-red-500">*</span></label>
                    <select
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    >
                      <option value="">Please Choose...</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm mb-2">Your query<span className="text-red-500">*</span></label>
                    <textarea
                      placeholder="Enter your query"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none text-sm sm:text-base"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-800 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    Submit
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

export default Support






