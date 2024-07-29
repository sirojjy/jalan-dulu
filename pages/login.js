import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import { loginUser } from '../components/utils/controller';
import Link from "next/link";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(email, password);
            if (response.code === "200") {
                router.push('/dashboard');
            } else {
                setError(response.message);
            }
        } catch (err) {
            setError('Login failed. Please try again.');
        }
    };

    return (
        <Layout>
            <section className="relative pb-20">
                <div className="absolute inset-0 hidden w-1/2 ml-auto lg:block">
                    <div className="flex items-center h-full wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                        <img className="mx-auto lg:max-w-lg" src="/assets/logo-slogan.png" alt="Monst" />
                    </div>
                </div>
                <div className="container">
                    <div className="relative flex flex-wrap pt-12">
                        <div className="w-full py-6 lg:flex lg:flex-col lg:w-1/2 lg:pr-20">
                            <div className="w-full max-w-lg mx-auto my-auto lg:mx-0 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                <h4 className="mb-6 text-3xl">Login</h4>
                                <form onSubmit={handleLogin}>
                                    <div className="flex px-4 mb-4 border border-gray-200 rounded bg-blueGray-50">
                                        <input
                                            className="w-full py-4 text-xs font-semibold leading-none outline-none placeholder-blueGray-400 bg-blueGray-50"
                                            type="email"
                                            placeholder="name@email.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <svg className="w-6 h-6 my-auto ml-4 text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                                        </svg>
                                    </div>
                                    <div className="flex px-4 mb-6 border border-gray-200 rounded bg-blueGray-50">
                                        <input
                                            className="w-full py-4 text-xs font-semibold leading-none outline-none placeholder-blueGray-400 bg-blueGray-50"
                                            type="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <button className="ml-4">
                                            <svg className="w-6 h-6 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    {error && <p className="text-red-500">{error}</p>}
                                    <button type="submit" className="w-full py-4 text-sm font-semibold text-white bg-green-500 rounded-lg">Login</button>
                                </form>
                            </div>
                            <div className="w-full mx-auto mt-12 text-center">
                                <p>
                                    Don't Have an Account?{" "}
                                    <Link href="/signup" legacyBehavior>
                                        <a className="inline-block text-xs font-semibold leading-none text-green-600 hover:text-green-700 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                            Sign Up now
                                        </a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Login;
