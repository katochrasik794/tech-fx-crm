import React, { useState } from 'react';
import { Search } from 'lucide-react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminHeader from '../../../components/AdminHeader';

const TicketsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const tickets = [
    { id: 1, enquiryType: 'KYC', title: 'approve my kyc', ticketId: 'A1MPP16SZL', status: 'Closed' },
    { id: 2, enquiryType: 'Trading Operations', title: 'Hello', ticketId: 'ZAH3NJUSTIN', status: 'Open' },
    { id: 3, enquiryType: 'KYC', title: 'Saya tidak punya KTP', ticketId: 'NNLGAUFRTZ', status: 'Open' },
    { id: 4, enquiryType: 'Trading Operations', title: 'Tulong', ticketId: 'DFRHZ298ST', status: 'Open' },
    { id: 5, enquiryType: 'Non-trading Operations', title: 'Greetings', ticketId: '1BA9O1Q8PZ', status: 'Closed' },
    { id: 6, enquiryType: 'KYC', title: 'is KYC automated?', ticketId: 'ND5V1Q2RRA', status: 'Open' },
    { id: 7, enquiryType: 'Account Opening', title: 'how to open live trading account', ticketId: 'JID0EKNAAW', status: 'Open' },
    { id: 8, enquiryType: 'Deposit', title: 'I want to deposit USDT', ticketId: 'YAX960ZH69', status: 'Closed' },
    { id: 9, enquiryType: 'Trading Operations', title: 'Trading Operation', ticketId: 'DTGK4UEYIF', status: 'Closed' },
    { id: 10, enquiryType: 'Trading Operations', title: 'how to open live account?', ticketId: 'TYLU872DAR', status: 'Closed' }
  ];

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">Tickets List</h1>

        <div className="bg-white rounded shadow">
          <div className="p-4 flex justify-between items-center border-b">
            <div className="flex items-center gap-1.5 text-xs">
              <span>Show</span>
              <select value={entriesPerPage} onChange={(e) => setEntriesPerPage(Number(e.target.value))} className="border border-gray-300 rounded px-1.5 py-0.5">
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span>entries</span>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-2 top-1.5 text-gray-400" />
              <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="border border-gray-300 rounded pl-8 pr-2 py-1 text-xs w-64" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-y border-black bg-gray-50">
                  <th className="py-0.5 px-2 text-left font-semibold">ID</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Enquiry Type</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Title</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Ticket ID</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Status</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket, index) => (
                  <tr key={ticket.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="py-0.5 px-2">{ticket.id}</td>
                    <td className="py-0.5 px-2">{ticket.enquiryType}</td>
                    <td className="py-0.5 px-2">{ticket.title}</td>
                    <td className="py-0.5 px-2">{ticket.ticketId}</td>
                    <td className="py-0.5 px-2">
                      <span className={ticket.status === 'Open' ? 'text-green-600' : 'text-red-600'}>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="py-0.5 px-2">
                      <div className="flex flex-col gap-1">
                        <button className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs">View</button>
                        <button className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs">Close</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 flex justify-between items-center border-t text-xs">
            <div>Showing 1 to 10 of 10 entries</div>
            <div className="flex gap-1">
              <button disabled className="px-3 py-1 border border-gray-300 rounded bg-gray-100 text-gray-400">Previous</button>
              <button className="px-3 py-1 border border-gray-300 rounded bg-orange-500 text-white">1</button>
              <button disabled className="px-3 py-1 border border-gray-300 rounded bg-gray-100 text-gray-400">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsList;
