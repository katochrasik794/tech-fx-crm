import React from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminHeader from '../../../components/AdminHeader';

const ReadNotification = () => {
  const notifications = [
    { id: 1, message: 'User account verified successfully', time: '3 days ago' },
    { id: 2, message: 'Deposit approved for Client Name', time: '4 days ago' },
    { id: 3, message: 'IB commission calculated', time: '5 days ago' }
  ];

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 lg:ml-64 mt-12 p-4 lg:p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold mb-4">Read Notification</h1>

        <div className="bg-white rounded shadow">
          {notifications.map((notification) => (
            <div key={notification.id} className="p-4 border-b bg-gray-50">
              <div>
                <p className="text-sm text-gray-600">{notification.message}</p>
                <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadNotification;
