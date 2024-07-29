// components/Destinasi.js
import React, { useEffect, useState } from 'react';
import { fetchDestinations } from '../utils/controller';

const Destinasi = () => {
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getDestinations = async () => {
            const destinationsData = await fetchDestinations();
            setDestinations(destinationsData);
            setLoading(false);
            console.log('Fetched destinations:', destinationsData); // Console log for testing
        };

        getDestinations();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-wrap -mx-3">
            {destinations.map((destination) => (
                <div key={destination.id} className="w-full px-3 mb-6 md:w-1/2 lg:w-1/3">
                    <div className="px-4 pt-16 pb-8 text-center bg-white rounded shadow hover-up-5 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                        <div className="w-full h-64 mb-6 overflow-hidden rounded-lg">
                            <img className="object-cover w-full h-full" src={destination.imageUrl} alt={destination.name} />
                        </div>
                        <h3 className="mb-2 text-2xl font-bold font-heading">{destination.name}</h3>
                        <div>
                            <a className="block px-6 py-4 mb-4 text-xs font-semibold leading-none text-center text-white bg-blue-500 rounded sm:inline-block sm:mb-0 sm:mr-3 hover:bg-blue-700" href="#">
                                Explore
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Destinasi;
