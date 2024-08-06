// PagePromo.js
import React, { useEffect, useState } from 'react';
import { pagePromos } from '../components/utils/controller';
import Layout from '../components/layout/Layout';

const PagePromo = () => {
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
    return <Layout>
      <div>Loading...</div>
    </Layout>;
  }

  if (!promos.length) {
    return <Layout>
      <div>No promos available</div>
    </Layout>;
  }

  return (
    <Layout>
      <section className="pt-10 pb-10 -mt-10 bg-blueGray-100">
          <div className="container text-center">
            <h1 className="mb-5 text-2xl font-bold lg:text-5xl wow animate__animated animate__fadeIn animated">
              Promo
            </h1>
          </div>
        </section>
      <section className="py-20 bg-top bg-no-repeat xl:bg-contain" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
        <div className="container">
          <div className="flex flex-wrap mb-6 -mx-3">
            {promos.map((promo) => (
              <div
                key={promo.id}
                className="w-full px-3 mb-6 md:w-1/2 lg:w-1/4"
              >
                <div className="px-6 pt-8 pb-6 text-center transition duration-500 bg-white border border-gray-100 rounded shadow hover:shadow-lg hover-up-2 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PagePromo;
