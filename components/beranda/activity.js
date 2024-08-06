// components/Activity.js
import React, { useEffect, useState } from 'react';
import { fetchActivity } from '../utils/controller';

const Activity = () => {
    const [activity, setActivity] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getActivity = async () => {
            const activityData = await fetchActivity();
            setActivity(activityData);
            setLoading(false);
            console.log('Fetched activity:', activityData); // Console log for testing
        };

        getActivity();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-wrap -mx-3">
            {activity.map((item) => (
                <div key={item.id} className="w-full px-3 mb-6 md:w-1/2 lg:w-1/3">
                    <div className="px-4 pt-16 pb-8 text-center bg-white rounded shadow hover-up-5 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                        <div className="w-full h-64 mb-6 overflow-hidden rounded-lg">
                            <img className="object-cover w-full h-full" src={item.imageUrls[0]} alt={item.title} />
                        </div>
                        <h3 className="mb-2 text-2xl font-bold font-heading">{item.title}</h3>
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

export default Activity;
