//Sidebar.js
import React from 'react';

const SidebarDashboard = () => {
  return (
    <div className="flex flex-col w-64 text-white bg-gray-800">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <h1 className="text-2xl font-bold">My Dashboard</h1>
      </div>
      <nav className="flex-1 px-4 py-8">
        <ul>
          <li className="mb-2">
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Home</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Analytics</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Sales</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Messages</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarDashboard;
