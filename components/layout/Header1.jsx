import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const Header1 = ({handleHidden}) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
          const scrollCheck = window.scrollY > 100
          if (scrollCheck !== scroll) {
            setScroll(scrollCheck)
          }
        })
      })
    return (
        <>
            <header className={scroll ? "bg-transparent sticky-bar mt-4 stick": "bg-transparent sticky-bar mt-4"}>
                <div className="container bg-transparent">
                    <nav className="flex items-center justify-between py-3 bg-transparent">
                        <Link href="/" legacyBehavior>
                            <a className="text-3xl font-semibold leading-none">
                                <img
                                    className="h-12"
                                    src="/assets/logo-nama.png"
                                    alt="Monst"
                                />
                            </a>
                        </Link>
                        <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                            
                            <li className="pt-4 pb-4">
                                <Link href="/" legacyBehavior>
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li className="pt-4 pb-4">
                                <Link href="/page_promo" legacyBehavior>
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Promo
                                    </a>
                                </Link>
                            </li>
                            <li className="pt-4 pb-4">
                                <Link href="/page_category" legacyBehavior>
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Category
                                    </a>
                                </Link>
                            </li>
                            
                            <li className="pt-4 pb-4">
                                <Link href="/page_activity" legacyBehavior>
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Activity
                                    </a>
                                </Link>
                            </li>

                        </ul>
                        <div className="hidden lg:block">
                            <Link href="/login" legacyBehavior>
                                <a className="text-white bg-green-500 rounded btn-accent hover-up-2 hover:bg-green-600">log Out</a>
                            </Link>
                        </div>
                        <div className="lg:hidden">
                            <button className="flex items-center px-3 py-2 text-green-500 border border-green-200 rounded navbar-burger hover:text-green-700 hover:border-green-300" onClick={handleHidden}>
                                <svg
                                    className="w-4 h-4 fill-current"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header1;
