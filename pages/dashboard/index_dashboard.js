import React from 'react';
import Layout from '../../components/layout/Layout';

const IndexDashboard = () => {

  return (
    <>
      <Layout>
        <div className="flex min-h-screen">
          {/* Sidebar */}
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

          {/* Main Content */}
          <div className="flex-1 p-8 bg-gray-100">
            <h2 className="mb-4 text-3xl font-bold">Dashboard Overview</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 bg-white rounded shadow">
                <h3 className="text-xl font-semibold">Card Title</h3>
                <p className="mt-2 text-gray-600">Card content goes here...</p>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <h3 className="text-xl font-semibold">Card Title</h3>
                <p className="mt-2 text-gray-600">Card content goes here...</p>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <h3 className="text-xl font-semibold">Card Title</h3>
                <p className="mt-2 text-gray-600">Card content goes here...</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexDashboard;
