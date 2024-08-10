import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import { pageActivity } from '../components/utils/controller'; // Pastikan path ini benar
const PageActivity = () => {
  const [activity, setActivity] = useState([]);
  const [filteredActivity, setFilteredActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getActivity = async () => {
      try {
        const activityData = await pageActivity();
        setActivity(activityData);
        setFilteredActivity(activityData); // Set initial filtered activity
      } catch (error) {
        console.error('Error fetching activity data:', error);
      } finally {
        setLoading(false);
      }
    };

    getActivity();
  }, []);

  useEffect(() => {
    const filterActivities = () => {
      let filtered = activity;

      if (selectedCategory) {
        filtered = filtered.filter(item => item.category.name === selectedCategory);
      }

      if (searchTerm) {
        filtered = filtered.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
      }

      setFilteredActivity(filtered);
    };

    filterActivities();
  }, [selectedCategory, searchTerm, activity]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Layout>
        <div className='pt-10 '></div>
        <section className="pt-10 pb-10 -mt-10 bg-blueGray-100">
          <div className="container text-center">
            <h1 className="mb-5 text-2xl font-bold lg:text-5xl wow animate__animated animate__fadeIn animated">
              Activity
            </h1>
            <div className="flex items-center justify-between mb-6">
              <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="px-4 py-2 border rounded"
              />
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="px-4 py-2 border rounded"
              >
                <option value="">All Categories</option>
                {/* Add more categories here */}
                <option value="Arab">Arab</option>
                <option value="china">China</option>
                <option value="india">India</option>
              </select>
            </div>
            <div className="flex flex-wrap -mx-3">
              {filteredActivity.map((item) => (
                <div key={item.id} className="w-full px-3 mb-6 md:w-1/2 lg:w-1/3">
                  <div className="px-4 pt-16 pb-8 text-center bg-white rounded shadow hover-up-5 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                    <div className="w-full h-64 mb-6 overflow-hidden rounded-lg">
                      <img className="object-cover w-full h-full" src={item.imageUrls[0]} alt={item.title} />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold font-heading">{item.title}</h3>
                    <p className="text-lg font-semibold">{`Price: $${item.price.toLocaleString()}`}</p>
                    <p className="text-lg font-semibold text-red-500">{`Discounted Price: $${item.price_discount.toLocaleString()}`}</p>
                    <p className="text-lg font-semibold">{`Rating: ${item.rating} / 5`}</p>
                    <div>
                      <a className="block px-6 py-4 mb-4 text-xs font-semibold leading-none text-center text-white bg-blue-500 rounded sm:inline-block sm:mb-0 sm:mr-3 hover:bg-blue-700" href="#">
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default PageActivity;