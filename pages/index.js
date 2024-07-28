import React from 'react';
import Layout from '../components/layout/Layout';
import Slider3 from '../components/beranda/Slider3';
import Link from "next/link";
import Promo from '../components/beranda/promo';
import Destinasi from '../components/beranda/destinasi';

const Index = () => {
    return (
        <>
            <Layout>
                <section className="py-12 md:pt-20 md:pb-12" id="how-we-work">
                    <div className="container">
                        <div className="relative max-w-6xl mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                            <Slider3 />
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-top bg-no-repeat xl:bg-contain" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }} id="key-features">
                    <div className="container">
                        <div className="max-w-lg mx-auto mb-12 text-center">
                            <h2 className="my-2 text-3xl font-bold md:text-4xl font-heading wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                Temukan Promo Menarik <br />
                            </h2>
                            <p className="leading-loose text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                Promo dengan diskon melimpah untukmu
                            </p>
                        </div>

                        <Promo/>

                        <div className="text-center">
                            <Link href="/promo" legacyBehavior>
                                <a href="/promo" className="inline-block px-8 py-4 text-xs font-semibold leading-none text-white bg-green-500 rounded hover:bg-green-800 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    Promo Lainnya
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="py-20 bg-top bg-no-repeat xl:bg-contain" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
                    <div className="container">
                        <div className="mb-16 text-center">
                            <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                <span>Temukan Destinasi </span>
                                <span className="text-green">Impianmu </span>
                            </h2>
                            <p className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeInDown" data-wow-delay=".5s">
                            Kami telah membuat daftar destinasi paling favorit
                            </p>
                        </div>
                        <Destinasi/>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Index;