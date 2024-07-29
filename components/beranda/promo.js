// components/Promo.js
import React, { useEffect, useState } from 'react';
import { fetchPromos } from '../utils/controller';

const Promo = () => {
  const [promos, setPromos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPromos = async () => {
      const promoData = await fetchPromos();
      setPromos(promoData);
      setLoading(false);
      console.log('Fetched promos:', promoData); // Console log for testing
    };

    getPromos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-wrap mb-6 -mx-3">
        {promos.map((promo) => (
          <div key={promo.id} className="w-full px-3 mb-6 md:w-1/2 lg:w-1/4">
            <div
              className="px-6 pt-8 pb-6 text-center transition duration-500 bg-white border border-gray-100 rounded shadow hover:shadow-lg hover-up-2 wow animate__animated animate__fadeIn"
              data-wow-delay=".3s"
            >
              <div className="mx-auto mb-4">
                <img
                  className="object-cover w-full h-32 rounded"
                  src={promo.imageUrl}
                  alt={promo.title}
                />
              </div>
              <h3 className="mb-2 font-bold font-heading">{promo.title}</h3>
              {/* <p className="text-sm text-blueGray-400 line-clamp-3">
                {promo.description}
              </p> */}
              <p className="text-sm text-blueGray-400">Promo Code: {promo.promo_code}</p>
              <p className="text-sm text-blueGray-400">Discount: ${promo.promo_discount_price}</p>
              <p className="text-sm text-blueGray-400">Minimum Price: ${promo.minimum_claim_price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Promo;
