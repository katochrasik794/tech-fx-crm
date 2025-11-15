import React, { useState } from 'react';
import { Search, Edit, Trash2 } from 'lucide-react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminHeader from '../../../components/AdminHeader';

const NewsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    shortDescription: '',
    image: null,
    status: 'Publish',
    trending: 'No',
    date: new Date().toISOString().split('T')[0]
  });

  const newsData = [
    {
      id: 1,
      title: "EUR/USD reclaims 1.1600 as US Dollar's safe-haven appeal diminishes",
      description: "The EUR/USD pair posts a fresh weekly high to near 1.1610 during late Asian trad...",
      shortDescription: "The EUR/USD pair posts a fresh weekly high to near 1.1610 during late Asian trad...",
      image: "news1.jpg",
      status: "Publish",
      trending: "No",
      date: "2025-06-24"
    },
    {
      id: 2,
      title: "GBP/USD attracts some buyers above 1.3550 after Middle East ceasefire",
      description: "The GBP/USD pair gains traction to around 1.3560 during the early European sessi...",
      shortDescription: "The GBP/USD pair gains traction to around 1.3560 during the early European sessi...",
      image: "news2.jpg",
      status: "Publish",
      trending: "Yes",
      date: "2025-06-24"
    },
    {
      id: 3,
      title: "Gold price bears seem reluctant as a weaker USD offsets Iran-Israel ceasefire",
      description: "Gold price extends the previous day's slide amid the Israel-Iran ceasefire annou...",
      shortDescription: "Gold price extends the previous day's slide amid the Israel-Iran ceasefire annou...",
      image: "news3.jpg",
      status: "Publish",
      trending: "No",
      date: "2025-06-24"
    },
    {
      id: 4,
      title: "Tron Price Forecast: Tether's USDT supply on Tron surpasses $80 billion",
      description: "Tron (TRX) stabilizes around $0.270 at the time of writing on Tuesday, following...",
      shortDescription: "Tron (TRX) stabilizes around $0.270 at the time of writing on Tuesday, following...",
      image: "news4.jpg",
      status: "Publish",
      trending: "No",
      date: "2025-06-24"
    },
    {
      id: 5,
      title: "Bitcoin, crypto market begin recovery as Israel and Iran agree to a ceasefire",
      description: "The cryptocurrency market made a comeback on Monday, rebounding from a weekend d...",
      shortDescription: "The cryptocurrency market made a comeback on Monday, rebounding from a weekend",
      image: "news5.jpg",
      status: "Publish",
      trending: "No",
      date: "2025-06-24"
    },
    {
      id: 6,
      title: "Zero interest rate policy: The SNB reopens the door, will the ECB and the Fed follow?",
      description: "The Swiss National Bank (SNB) struck a blow last week when it cut its key intere...",
      shortDescription: "The Swiss National Bank (SNB) struck a blow last week when it cut its key intere...",
      image: "news6.jpg",
      status: "Publish",
      trending: "No",
      date: "2025-06-24"
    }
  ];

  const handleEdit = (id) => {
    console.log('Edit:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete:', id);
  };

  const handleAddNews = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit:', formData);
    setShowForm(false);
    setFormData({
      title: '',
      description: '',
      shortDescription: '',
      image: null,
      status: 'Publish',
      trending: 'No',
      date: new Date().toISOString().split('T')[0]
    });
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({
      title: '',
      description: '',
      shortDescription: '',
      image: null,
      status: 'Publish',
      trending: 'No',
      date: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-bold">News List</h1>
          <button onClick={handleAddNews} className="bg-orange-500 text-white px-4 py-1.5 rounded text-sm">
            Add News
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded shadow p-4 mb-4">
            <h2 className="text-sm font-bold mb-4">Add News</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs mb-1">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">
                    Image <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
                    className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs mb-1">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="Enter Description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm h-24"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs mb-1">
                    Short Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="Enter Short Description"
                    value={formData.shortDescription}
                    onChange={(e) => setFormData({...formData, shortDescription: e.target.value})}
                    className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm h-20"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">
                    Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm"
                  >
                    <option value="Publish">Publish</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs mb-1">
                    Trending <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.trending}
                    onChange={(e) => setFormData({...formData, trending: e.target.value})}
                    className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm"
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs mb-1">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button type="submit" className="bg-orange-500 text-white px-4 py-1.5 rounded text-sm">
                  Submit
                </button>
                <button type="button" onClick={handleCancel} className="bg-gray-500 text-white px-4 py-1.5 rounded text-sm">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded shadow">
          <div className="p-4 flex justify-between items-center border-b">
            <div className="flex items-center gap-1.5 text-xs">
              <span>Show</span>
              <select
                value={entriesPerPage}
                onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                className="border border-gray-300 rounded px-1.5 py-0.5"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span>entries</span>
            </div>

            <div className="relative">
              <Search className="w-4 h-4 absolute left-2 top-1.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded pl-8 pr-2 py-1 text-xs w-64"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-y border-black bg-gray-50">
                  <th className="py-0.5 px-2 text-left font-semibold">ID</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Title</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Description</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Short Description</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Image</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Status</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Trending</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Date</th>
                  <th className="py-0.5 px-2 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {newsData.map((news, index) => (
                  <tr key={news.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="py-0.5 px-2">{news.id}</td>
                    <td className="py-0.5 px-2 text-blue-600">{news.title}</td>
                    <td className="py-0.5 px-2">{news.description}</td>
                    <td className="py-0.5 px-2">{news.shortDescription}</td>
                    <td className="py-0.5 px-2">
                      <div className="w-12 h-12 bg-orange-200 rounded flex items-center justify-center">
                        <span className="text-orange-600">📰</span>
                      </div>
                    </td>
                    <td className="py-0.5 px-2 text-green-600">{news.status}</td>
                    <td className="py-0.5 px-2">{news.trending}</td>
                    <td className="py-0.5 px-2">{news.date}</td>
                    <td className="py-0.5 px-2">
                      <div className="flex flex-col gap-1">
                        <button
                          onClick={() => handleEdit(news.id)}
                          className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs flex items-center gap-1"
                        >
                          <Edit className="w-3 h-3" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(news.id)}
                          className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs flex items-center gap-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 flex justify-between items-center border-t text-xs">
            <div>
              Showing 1 to {newsData.length} of {newsData.length} entries
            </div>
            <div className="flex gap-1">
              <button
                disabled
                className="px-3 py-1 border border-gray-300 rounded bg-gray-100 text-gray-400"
              >
                Previous
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded bg-orange-500 text-white">
                1
              </button>
              <button
                disabled
                className="px-3 py-1 border border-gray-300 rounded bg-gray-100 text-gray-400"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
