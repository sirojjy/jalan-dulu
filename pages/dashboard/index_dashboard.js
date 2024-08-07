import React from 'react';
import Layout from '../../components/layout/Layout';
import SidebarDashboard from './sidebar_d';

const IndexDashboard = () => {

  return (
    <>
      <Layout>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <SidebarDashboard></SidebarDashboard>

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
