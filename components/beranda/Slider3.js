// components/Slider3.js
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchBanners } from '../utils/controller';

import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Autoplay]);

const Slider3 = () => {
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
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="relative">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={{
                    prevEl: ".custom_prev",
                    nextEl: ".custom_next",
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                className="custom-class"
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <img className="object-cover w-full rounded" src={banner.imageUrl} alt={banner.name} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>

            <button
                type="button"
                className="absolute left-0 z-10 p-2 transform -translate-y-1/2 bg-gray-200 rounded-full shadow-md custom_prev top-1/2"
            >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>
            <button
                type="button"
                className="absolute right-0 z-10 p-2 transform -translate-y-1/2 bg-gray-200 rounded-full shadow-md custom_next top-1/2"
            >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
    );
};

export default Slider3;
