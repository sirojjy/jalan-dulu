

import { useEffect, useState } from 'react';
import { fetchBanners } from '../utils/api';

const Slider = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getBanners = async () => {
            const bannerData = await fetchBanners();
            setBanners(bannerData);
            setLoading(false);
            console.log('Fetched banners:', bannerData); // Console log for testing
        };

        getBanners();

        // Ensure Flowbite JavaScript is initialized
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/flowbite@1.4.0/dist/flowbite.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <>
            <div className="max-w-2xl mx-auto">
                <div id="default-carousel" className="relative rounded-lg overflow-hidden shadow-lg" data-carousel="static">
                    {/* Carousel wrapper */}
                    <div className="relative h-80 md:h-96 overflow-hidden" data-carousel-inner>
                        {banners.map((banner, index) => (
                            <div key={banner.id} className={`duration-700 ease-in-out ${index === 0 ? 'block' : 'hidden'}`} data-carousel-item={index === 0 ? 'active' : ''}>
                                <img src={banner.imageUrl} className="object-cover w-full h-full" alt={banner.name} />
                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">{banner.name}</span>
                            </div>
                        ))}
                    </div>
                    {/* Slider indicators */}
                    <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2" data-carousel-indicators>
                        {banners.map((_, index) => (
                            <button key={index} type="button" className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition" data-carousel-slide-to={index}></button>
                        ))}
                    </div>
                    {/* Slider controls */}
                    <button
                        type="button"
                        className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
                        data-carousel-prev
                    >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
                        data-carousel-next
                    >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>

                <p className="mt-5 text-center text-gray-700 dark:text-gray-300">
                    This carousel slider component is part of a larger, open-source library of Tailwind CSS components. Learn more
                    by going to the official
                    <a className="text-blue-600 hover:underline" href="https://flowbite.com/docs/getting-started/introduction/" target="_blank" rel="noopener noreferrer">
                        Flowbite Documentation
                    </a>.
                </p>
            </div>
        </>
    );
};

export default Slider;
