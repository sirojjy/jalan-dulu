import '../public/assets/css/animate.min.css'
import React, { useEffect, useState } from "react";
import Head from 'next/head'

import '../public/assets/css/tailwind-built.css'
import Preloader from '../components/elements/Preloader';
import "swiper/css";

function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <>
            <Head>
                <title>Monst - NextJs Tailwind CSS Landing Page</title>
            </Head>

            {!loading ? (
                <Component {...pageProps} />
            ) : (
                <Preloader />
            )}
        </>
    )
}

export default MyApp
