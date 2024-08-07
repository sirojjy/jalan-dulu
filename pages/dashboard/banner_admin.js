import React, { useEffect, useState } from 'react';
import { pagePromos } from '../../components/utils/controller';
import Layout1 from '../../components/layout/Layout1';
import SidebarDashboard from './sidebar_d';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';

const BannerAdmin = () => {
  const [promos, setPromos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPromos = async () => {
      try {
        const promoData = await pagePromos();
        console.log('Promo Data:', promoData); // Log data promo yang diterima
        setPromos(promoData);
      } catch (error) {
        console.error('Error fetching promos:', error);
      } finally {
        setLoading(false);
      }
    };

    getPromos();
  }, []);

  if (loading) {
    return (
      <Layout1>
        <div>Loading...</div>
      </Layout1>
    );
  }

  if (!promos.length) {
    return (
      <Layout1>
        <div>No promos available</div>
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
              {promos.map((promo) => (
                <div key={promo.id} className="w-full px-3 mb-6 md:w-1/2 lg:w-1/4">
                  <div className="px-6 pt-8 pb-6 text-center transition duration-500 bg-white border border-gray-100 rounded shadow hover:shadow-lg hover-up-2">
                    <div className="mx-auto mb-4">
                      <img
                        className="object-cover w-full h-32 rounded cursor-pointer"
                        src={promo.imageUrl}
                        alt={promo.title}
                      />
                    </div>
                    <h3 className="mb-2 font-bold font-heading">{promo.title}</h3>
                    <p className="text-sm text-blueGray-400">Promo Code: {promo.promo_code}</p>
                    <p className="text-sm text-blueGray-400">Discount: ${promo.promo_discount_price}</p>
                    <p className="text-sm text-blueGray-400">Minimum Price: ${promo.minimum_claim_price}</p>

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
