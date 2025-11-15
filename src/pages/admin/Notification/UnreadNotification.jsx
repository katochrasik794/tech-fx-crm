import React from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminHeader from '../../../components/AdminHeader';

const UnreadNotification = () => {
  const notifications = [
    { id: 1, message: 'New user registration: John Doe', time: '2 hours ago' },
    { id: 2, message: 'Deposit request pending approval', time: '5 hours ago' },
    { id: 3, message: 'New IB request from Client Name', time: '1 day ago' },
    { id: 4, message: 'Withdrawal request submitted', time: '2 days ago' }
  ];

  const handleMarkRead = (id) => {
    console.log('Mark as read:', id);
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">Unread Notification</h1>

        <div className="bg-white rounded shadow">
          {notifications.map((notification) => (
            <div key={notification.id} className="p-4 border-b hover:bg-gray-50 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-800">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
              </div>
              <button
                onClick={() => handleMarkRead(notification.id)}
                className="bg-orange-500 text-white px-3 py-1 rounded text-xs"
              >
                Mark Read
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnreadNotification;
