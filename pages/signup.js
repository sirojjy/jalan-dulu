import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import Link from 'next/link';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [role, setRole] = useState('admin');
    const [profilePicture, setProfilePicture] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();

        // Upload the image and get the URL
        let profilePictureUrl = '';
        if (profilePicture) {
            const formData = new FormData();
            formData.append('file', profilePicture);
            formData.append('upload_preset', 'your_upload_preset'); // Cloudinary preset or your server endpoint
            const response = await fetch('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            profilePictureUrl = data.secure_url;
        }

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                email, 
                name, 
                password, 
                passwordRepeat, 
                role, 
                profilePictureUrl, 
                phoneNumber 
            })
        });

        const data = await response.json();

        if (response.ok) {
            setMessage('Berhasil daftar');
            router.push('/login');
        } else {
            setMessage(data.message);
        }
    };

    return (
        <>
            <Layout>
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
                                        <input 
                                            className="w-full py-4 text-xs font-semibold leading-none outline-none placeholder-blueGray-400 bg-blueGray-50" 
                                            type="text" 
                                            placeholder="Role" 
                                            value={role}
                                            onChange={(e) => setRole(e.target.value)}
                                            required 
                                        />
                                    </div>
                                    <div className="flex px-4 mb-4 border border-gray-200 rounded bg-blueGray-50">
                                        <input 
                                            className="w-full py-4 text-xs font-semibold leading-none outline-none placeholder-blueGray-400 bg-blueGray-50" 
                                            type="file" 
                                            onChange={(e) => setProfilePicture(e.target.files[0])}
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
        </>
    );
};

export default Signup;
