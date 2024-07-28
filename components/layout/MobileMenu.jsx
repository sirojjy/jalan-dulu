import React, { useState } from "react";
import Link from "next/link";

const MobileMenu = ({ hiddenClass, handleRemove }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`${hiddenClass} navbar-menu relative z-50 transition duration-300`}>
                <div className="fixed inset-0 opacity-25 navbar-backdrop bg-blueGray-800"></div>
                <nav className="fixed top-0 bottom-0 left-0 flex flex-col w-5/6 max-w-sm px-6 py-6 overflow-y-auto transition duration-300 bg-white border-r">
                    <div className="flex items-center mb-8">
                        <Link href="#" legacyBehavior>
                            <a className="mr-auto text-3xl font-semibold leading-none">
                                <img className="h-10" src="/assets/logo-nama.png" alt="Monst" />
                            </a>
                        </Link>
                        <button className="navbar-close" onClick={handleRemove}>
                            <svg className="w-6 h-6 cursor-pointer text-blueGray-400 hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul className="mobile-menu">

                            <li className="mb-1 rounded-xl">
                                <Link href="/about" legacyBehavior>
                                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">Home</a>
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/services" legacyBehavior>
                                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Promo</a>
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/portfolio" legacyBehavior>
                                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Category</a>
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/pricing" legacyBehavior>
                                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Activity</a>
                                </Link>
                            </li>
                            
                    

                        </ul>
                        <div className="pt-6 mt-4 border-t border-blueGray-100">
                            <Link href="/signup" legacyBehavior>
                                <a className="block px-4 py-3 mb-3 text-xs font-semibold leading-none text-center text-white bg-blue-400 rounded hover:bg-blue-500">Sign Up</a>
                            </Link>
                            <Link href="/login" legacyBehavior>
                                <a className="block px-4 py-3 mb-2 text-xs font-semibold leading-none text-center text-blue-500 border border-blue-200 rounded hover:text-blue-700 hover:border-blue-300">Log In</a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default MobileMenu;
