// components/Slider3.js
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchBanners } from '../utils/api';

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
                        <img className="rounded w-full h-full object-cover" src={banner.imageUrl} alt={banner.name} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                type="button"
                className="custom_prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md z-10"
            >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>
            <button
                type="button"
                className="custom_next absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md z-10"
            >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
    );
};

export default Slider3;
