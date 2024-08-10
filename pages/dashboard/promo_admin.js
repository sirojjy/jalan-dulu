import React, { useEffect, useState } from 'react';
import { getBanners } from '../../components/utils/banner_admin';
import Layout1 from '../../components/layout/Layout1';
import SidebarDashboard from './sidebar_d';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';

const BannerAdmin = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const bannerData = await getBanners();
        console.log('Banner Data:', bannerData); // Log data banner yang diterima
        setBanners(bannerData);
      } catch (error) {
        console.error('Error fetching banners:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  if (loading) {
    return (
      <Layout1>
        <div>Loading...</div>
      </Layout1>
    );
  }

  if (!banners.length) {
    return (
      <Layout1>
                <div>No banners available</div>
      </Layout1>
    );
  }

  return (
    <Layout1>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <SidebarDashboard />

        {/* Main Content */}
        <div className="flex-1 p-8 bg-gray-100">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Banner</h2>
              <button className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded hover:bg-green-600">
                Tambah Data
              </button>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
              {banners.map((banner) => (
                <div key={banner.id} className="w-full px-3 mb-6 md:w-1/2 lg:w-1/4">
                  <div className="px-6 pt-8 pb-6 text-center transition duration-500 bg-white border border-gray-100 rounded shadow hover:shadow-lg hover-up-2">
                    <div className="mx-auto mb-4">
                      <img
                        className="object-cover w-full h-32 rounded cursor-pointer"
                        src={banner.imageUrl}
                        alt={banner.title}
                      />
                    </div>
                    <h3 className="mb-2 font-bold font-heading">{banner.title}</h3>
                    <p className="text-sm text-blueGray-400">Promo Code: {banner.promo_code}</p>
                    <p className="text-sm text-blueGray-400">Discount: ${banner.promo_discount_price}</p>
                    <p className="text-sm text-blueGray-400">Minimum Price: ${banner.minimum_claim_price}</p>

                    {/* Edit and Delete Buttons */}
                    <div className="flex justify-center mt-4">
                      <button className="flex items-center px-3 py-2 mr-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
                        <PencilAltIcon className="w-5 h-5 mr-1" />
                        Edit
                      </button>
                      <button className="flex items-center px-3 py-2 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-600">
                        <TrashIcon className="w-5 h-5 mr-1" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout1>
  );
}

export default BannerAdmin;

