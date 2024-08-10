import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [role, setRole] = useState('user');
    const [profilePictureUrl, setProfilePictureUrl] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();
    
        if (password.length < 6) {
            setMessage("Password must be at least 6 characters long.");
            return;
        }
    
        if (password !== passwordRepeat) {
            setMessage("Passwords do not match.");
            return;
        }
    
        try {
            const response = await axios.post(
                'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register',
                {
                    email,
                    name,
                    password,
                    passwordRepeat,
                    role,
                    profilePictureUrl,
                    phoneNumber,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                    },
                }
            );
    
            if (response.status === 200) {
                toast.success('Registration successful');
    
                // Delay 2 detik sebelum redirect
                setTimeout(() => {
                    router.push('/login');
                }, 2000);
            } else {
                toast.error('Registration failed');
            }
        } catch (error) {
            if (error.response) {
                toast.error(`Error: ${error.response.data.message || 'Registration failed'}`);
            } else if (error.request) {
                toast.error('Error: No response received from the server');
            } else {
                toast.error(`Error: ${error.message}`);
            }
        }
    };
    
    

    return (
        <Layout>
             <ToastContainer />
            <section className="py-12 bg-blueGray-50">
                <div className="container">
                    <div className="flex flex-col max-w-md mx-auto text-center">
                        <div className="p-8 mt-12 mb-8 bg-white rounded shadow">
                            <h4 className="mb-6 text-3xl">Create an Account</h4>
                            <form onSubmit={handleSignup}>
                                <div className="flex px-4 mb-4 border border-gray-200 rounded bg-blueGray-50">
                                    <input 
                                        className="w-full py-4 text-xs font-semibold leading-none outline-none placeholder-blueGray-400 bg-blueGray-50" 
                                        type="email" 
                                        placeholder="Email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required 
                                    />
                                </div>
                                <div className="flex px-4 mb-4 border border-gray-200 rounded bg-blueGray-50">
                                    <input 
                                        className="w-full py-4 text-xs font-semibold leading-none outline-none placeholder-blueGray-400 bg-blueGray-50" 
                                        type="text" 
                                        placeholder="Name" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required 
                                    />
                                </div>
                                <div className="flex px-4 mb-4 border border-gray-200 rounded bg-blueGray-50">
                                    <input 
                                        className="w-full py-4 text-xs font-semibold leading-none outline-none placeholder-blueGray-400 bg-blueGray-50" 
                                        type="password" 
                                        placeholder="Enter your password" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required 
                                    />
                                </div>
                                <div className="flex px-4 mb-4 border border-gray-200 rounded bg-blueGray-50">
                                    <input 
                                        className="w-full py-4 text-xs font-semibold leading-none outline-none placeholder-blueGray-400 bg-blueGray-50" 
                                        type="password" 
                                        placeholder="Repeat your password" 
                                        value={passwordRepeat}
                                        onChange={(e) => setPasswordRepeat(e.target.value)}
                                        required 
                                    />
                                </div>
                                <div className="flex px-4 mb-4 border border-gray-200 rounded bg-blueGray-50">
                                    <select 
                                        className="w-full py-4 text-xs font-semibold leading-none outline-none placeholder-blueGray-400 bg-blueGray-50" 
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        required
                                    >
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>
                                <div className="flex px-4 mb-4 border border-gray-200 rounded bg-blueGray-50">
                                    <input 
                                        className="w-full py-4 text-xs font-semibold leading-none outline-none placeholder-blueGray-400 bg-blueGray-50" 
                                        type="text" 
                                        placeholder="Profile Picture URL" 
                                        value={profilePictureUrl}
                                        onChange={(e) => setProfilePictureUrl(e.target.value)}
                                        required 
                                    />
                                </div>
                                <div className="flex px-4 mb-6 border border-gray-200 rounded bg-blueGray-50">
                                    <input 
                                        className="w-full py-4 text-xs font-semibold leading-none outline-none placeholder-blueGray-400 bg-blueGray-50" 
                                        type="text" 
                                        placeholder="Phone Number" 
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required 
                                    />
                                </div>
                                {message && <p className="mb-4 text-sm text-red-500">{message}</p>}
                                <button 
                                    type="submit" 
                                    className="block w-full p-4 text-xs font-semibold leading-none text-center text-white transition duration-300 ease-in-out transform bg-green-500 rounded hover:-translate-y-1 hover:bg-green-700"
                                >
                                    Sign Up Now
                                </button>
                            </form>
                            <div className="w-full mx-auto mt-12 text-center">
                                <p className="text-sm">
                                    Already have an account?{" "}
                                    <Link href="/login">
                                        <span className="inline-block text-xs font-semibold leading-none text-green-600 hover:text-green-700">
                                            Sign in now
                                        </span>
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

export default Signup;
