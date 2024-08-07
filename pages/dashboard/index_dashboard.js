// pages/dashboard/index.js
import React from 'react';
import Layout1 from '../../components/layout/Layout1';
import SidebarDashboard from './sidebar_d';

const IndexDashboard = ({ children }) => {
  return (
    <Layout1>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <SidebarDashboard />

        {/* Main Content */}
        <div className="flex-1 p-8 bg-gray-100">
          {children}
        </div>
      </div>
    </Layout1>
  );
};

export default IndexDashboard;
