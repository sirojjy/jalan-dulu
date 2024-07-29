// pages/dashboard.js
import React from 'react';
// import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';

const Dashboard = () => {
//   const user = useSelector(state => state.user);
//   const history = useHistory();

//   const handleLogout = () => {
//     // Implement your logout logic here
//     history.push('/login');
//   };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow">
          <div className="container px-6 py-3 mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <a className="text-xl font-bold text-gray-800 md:text-2xl" href="#">Dashboard</a>
              </div>
              <div>
                {/* <button onClick={handleLogout} className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700">Logout</button> */}
              </div>
            </div>
          </div>
        </nav>
        <main className="container px-6 py-8 mx-auto">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, 
            {/* {user.name} */}
            </h1>
          <div className="mt-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h2 className="mb-2 text-2xl font-bold text-gray-800">Banner</h2>
                <p className="text-gray-700">Details about stat 1</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h2 className="mb-2 text-2xl font-bold text-gray-800">Promotion</h2>
                <p className="text-gray-700">Details about stat 2</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h2 className="mb-2 text-2xl font-bold text-gray-800">Category</h2>
                <p className="text-gray-700">Details about stat 3</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h2 className="mb-2 text-2xl font-bold text-gray-800">Activity</h2>
                <p className="text-gray-700">Details about stat 4</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
