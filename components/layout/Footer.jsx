import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <section className="py-20">
                <div className="container px-4 mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <div className="flex flex-wrap mb-12 -mx-3 text-center lg:mb-20 lg:text-left">
                        <div className="w-full px-3 mb-6 lg:w-1/5 lg:mb-0">
                            <Link href="/" legacyBehavior>
                                <a className="inline-block mx-auto text-3xl font-semibold leading-none lg:mx-0">
                                    <img className="h-20" src="/assets/logo-slogan.png" alt="Monst" />
                                </a>
                            </Link>
                        </div>
                        <div className="w-full px-3 mb-8 lg:w-2/5 lg:mb-0">
                            <p className="max-w-md mx-auto leading-relaxed lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400">
                                Menjelajahi dunia, satu destinasi dalam satu waktu.
                            </p>
                        </div>
                        <div className="w-full px-3 mb-8 lg:w-1/5 lg:mb-0">
                            <p className="mb-2 font-bold lg:mb-4 lg:text-lg font-heading text-blueGray-800">Kantor</p>
                            <p className="lg:text-lg text-blueGray-400">Jl. Jenderal Sudirman No.Kav. 22-23, Kuningan, Setiabudi, DKI Jakarta 12920</p>
                        </div>
                        <div className="w-full px-3 lg:w-1/5">
                            <p className="mb-2 font-bold lg:mb-4 lg:text-lg font-heading text-blueGray-800">Kontak</p>
                            <p className="lg:text-lg text-blueGray-400">(+62) 123 4567</p>
                            <p className="lg:text-lg text-blueGray-400">contact@jalandulu.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:flex-row lg:justify-between">
                        <p className="text-sm text-blueGray-400">
                            &copy; 2024. Semua hak dilindungi undang-undang. Dirancang oleh{" "}
                            <a className="text-blue-400" href="" target="_blank">
                                jalan Dulu
                            </a>
                        </p>
                        <div className="order-first mb-4 -mx-2 lg:order-last lg:mb-0">
                            <a className="inline-block px-2" href="https://facebook.com">
                                <img className="w-6 h-6" src="/assets/img/facebook.png" alt="Monst" />
                            </a>
                            <a className="inline-block px-2" href="https://twitter.com">
                                <img className="w-6 h-6" src="/assets/img/twitter.png" alt="Monst" />
                            </a>
                            <a className="inline-block px-2" href="https://www.instagram.com">
                                <img className="w-6 h-6" src="/assets/img/instagram.png" alt="Monst" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
