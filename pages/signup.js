import React from 'react';
import Layout from '../components/layout/Layout';
import Link from "next/link"

const Signup = () => {
    return (
        <>
            <Layout>
                <section className="py-12 bg-blueGray-50">
                    <div className="container">
                        <div className="flex flex-col max-w-md mx-auto text-center">
                            <div className="p-8 mt-12 mb-8 bg-white rounded shadow">
                                <h4 className="mb-6 text-3xl">Create an Account</h4>
                            
                                <div className="flex px-4 mb-4 border border-gray-200 rounded bg-blueGray-50">
                                    <input className="w-full py-4 text-xs font-semibold leading-none outline-none placeholder-blueGray-400 bg-blueGray-50" type="email" placeholder="Email" />
                                    <svg className="w-6 h-6 my-auto ml-4 text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                                    </svg>
                                </div>
                                <div className="flex px-4 mb-6 border border-gray-200 rounded bg-blueGray-50">
                                    <input className="w-full py-4 text-xs font-semibold leading-none outline-none placeholder-blueGray-400 bg-blueGray-50" type="password" placeholder="Enter your password" />
                                    <button className="ml-4">
                                        <svg className="w-6 h-6 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                        </svg>
                                    </button>
                                </div>

                                <button className="block w-full p-4 text-xs font-semibold leading-none text-center text-white transition duration-300 ease-in-out transform bg-green-500 rounded hover:-translate-y-1 hover:bg-green-700">Sign Up Now</button>


                                <div className="w-full mx-auto mt-12 text-center">
                                    <p className="text-sm">
                                        Already have an account?{" "}
                                        <Link href="/login" legacyBehavior>
                                            <a className="inline-block text-xs font-semibold leading-none text-green-600 hover:text-green-700 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                                Sign in now
                                            </a>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Signup;