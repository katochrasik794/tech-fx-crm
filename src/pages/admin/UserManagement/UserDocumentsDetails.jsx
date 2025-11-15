import { useState } from 'react'
import AdminSidebar from '../../../components/AdminSidebar'

function UserDocumentsDetails() {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  
  const documents = [
    { id: 1, name: 'Demo user', email: 'demouser032@demo.com', documentType: 'Proof of Address', image: '/placeholder.jpg', comment: '', status: 'Approved', date: '2025-09-05' },
    { id: 2, name: 'Demo user', email: 'demouser032@demo.com', documentType: 'Proof of Identity', image: '/placeholder.jpg', comment: '', status: 'Approved', date: '2025-09-05' },
  ]

  const filteredData = documents.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase()) ||
    item.documentType.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 ml-64 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">User Documents List</h1>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <span>Show</span>
              <select className="border rounded px-2 py-1" value={entries} onChange={(e) => setEntries(Number(e.target.value))}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span>entries</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Search:</span>
              <input type="text" className="border rounded px-3 py-1.5 w-64" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-y border-black">
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm">ID</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm">Name</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm">Email</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm">Document Type</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm">Image</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm">Comment</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm">Status</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm">Date</th>
                  <th className="text-left py-1 px-3 font-medium text-gray-600 text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.slice(0, entries).map((doc, index) => (
                  <tr key={doc.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                    <td className="py-1 px-3 text-sm">{doc.id}</td>
                    <td className="py-1 px-3 text-sm">{doc.name}</td>
                    <td className="py-1 px-3 text-blue-600 text-sm">{doc.email}</td>
                    <td className="py-1 px-3 text-sm">{doc.documentType}</td>
                    <td className="py-1 px-3 text-sm">
                      <div className="flex gap-1">
                        <img src={doc.image} alt="doc" className="w-8 h-8 object-cover rounded" />
                        <img src={doc.image} alt="doc" className="w-8 h-8 object-cover rounded" />
                      </div>
                    </td>
                    <td className="py-1 px-3 text-sm">{doc.comment}</td>
                    <td className="py-1 px-3 text-sm">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">{doc.status}</span>
                    </td>
                    <td className="py-1 px-3 text-sm">{doc.date}</td>
                    <td className="py-1 px-3 text-sm"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-black">
            <div className="text-sm text-gray-600">
              Showing 1 to {Math.min(entries, filteredData.length)} of {filteredData.length} entries
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded hover:bg-gray-50">Previous</button>
              <button className="px-3 py-1 bg-orange-500 text-white rounded">1</button>
              <button className="px-3 py-1 border rounded hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDocumentsDetails
