// components/SidebarDashboard.js
import React from 'react';
import { useRouter } from 'next/router';

const SidebarDashboard = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col w-64 text-gray-900 bg-secondary-50">
      <div className="flex items-center justify-center h-16 bg-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Admin</h1>
      </div>
      <nav className="flex-1 px-4 py-8">
        <ul>
          <li className="mb-2">
            <a 
              href="#"
              className="block px-4 py-2 text-gray-800 rounded hover:bg-gray-300"
              onClick={() => handleNavigation('/dashboard/banner_admin')}
            >Banner</a>
          </li>
          <li className="mb-2">
            <a 
              href="#"
              className="block px-4 py-2 text-gray-800 rounded hover:bg-gray-300"
              onClick={() => handleNavigation('/dashboard/promo')}
            >Promo</a>
          </li>
          <li className="mb-2">
            <a 
              href="#"
              className="block px-4 py-2 text-gray-800 rounded hover:bg-gray-300"
              onClick={() => handleNavigation('/dashboard/category')}
            >Category</a>
          </li>
          <li className="mb-2">
            <a 
              href="#"
              className="block px-4 py-2 text-gray-800 rounded hover:bg-gray-300"
              onClick={() => handleNavigation('/dashboard/activity')}
            >Activity</a>
          </li>
          <li className="mb-2">
            <a 
              href="#"
              className="block px-4 py-2 text-gray-800 rounded hover:bg-gray-300"
              onClick={() => handleNavigation('/dashboard/userlist')}
            >User List</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarDashboard;
