import React, { useEffect, useState, useRef } from 'react';
import { getBanners, createBanner } from '../../components/utils/banner_admin';
import Layout1 from '../../components/layout/Layout1';
import SidebarDashboard from './sidebar_d';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import toast from 'react-hot-toast';
import Image from 'next/image';

const ModalAddBanner = ({ showAddBanner, setShowAddBanner, onBannerAdded }) => {
    const [addBannerImageUrl, setAddBannerImageUrl] = useState(null);
    const [addFileName, setAddFileName] = useState(null);
    const formRef = useRef(null);

    const handleUpload = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];

        if (!file) {
            return;
        } else if (!file.type.startsWith("image/")) {
            setAddBannerImageUrl(null);
            setAddFileName(null);
            toast.error("The file must be an image in JPEG, PNG, GIF, BMP, or TIFF format.");
            return false;
        }
        const formData = new FormData();
        formData.append("image", file);
        try {
            const res = await uploadImage(formData);
            setAddBannerImageUrl(res.data.url);
            setAddFileName(file.name);
            toast.success("Image uploaded");
            return res.data.url;
        } catch (error) {
            setAddBannerImageUrl(null);
            setAddFileName(null);
            toast.error("Failed to upload image. Maybe the image is too big. Try another image.");
        }
    };

    const handleAddBanner = async (e) => {
        e.preventDefault();
        const bannerData = {
            name: e.target.name.value,
            imageUrl: addBannerImageUrl
        };

        for (const key in bannerData) {
            if (!bannerData[key]) {
                toast.error("Please input all fields!");
                return;
            }
        }

        const res = await createBanner(bannerData);
        if (res) {
            toast.success("Banner created");
            setShowAddBanner(false);
            e.target.reset();
            setAddBannerImageUrl(null);
            onBannerAdded(res);
        } else {
            toast.error("Failed to create banner");
        }
    }

    const handleCloseAddBanner = () => {
        setShowAddBanner(false);
        formRef.current.reset();
        setAddBannerImageUrl(null);
    }

    return showAddBanner ? (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                    <div className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                {/* <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg>
                                </div> */}
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <form ref={formRef} onSubmit={handleAddBanner} className="space-y-4">
                                        <div className="w-full h-48 overflow-hidden rounded-lg">
                                            {addBannerImageUrl ?
                                                <img src={addBannerImageUrl} className='object-cover w-full h-full' />
                                                : <Image src="/images/no-image.png" className='object-cover w-full h-full' width={500} height={500} alt='Unknown Profile' />
                                            }
                                        </div>
                                        <div className="bg-slate-200 dark:bg-slate-700 text-slate-400 px-4 text-[13px] text-start rounded-lg w-full flex items-center overflow-hidden whitespace-nowrap">
                                            <label htmlFor="addBannerImageUrl" className="bg-slate-300 dark:bg-slate-600 text-primaryblack dark:text-slate-200 w-fit cursor-pointer py-[10px] -ml-4 px-4 rounded-l-lg">Choose Image</label>
                                            <span className={`px-4 overflow-hidden text-ellipsis ${addBannerImageUrl ? 'text-primaryblack dark:text-slate-200 ' : ''}`}>{addBannerImageUrl === null ? 'No File Selected' : `${addFileName}`}</span>
                                        </div>
                                        <input onChange={handleUpload} type="file" name="addBannerImageUrl" id="addBannerImageUrl" className="hidden" />
                                        <input type="text" name="name" id="name" placeholder="Banner Name" className="bg-slate-200 dark:bg-slate-700 placeholder:text-slate-400 text-primaryblack dark:text-slate-200 py-[10px] px-4 text-[13px] rounded-lg w-full outline-none" />
                                        <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button type="submit" className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Add</button>
                                            <button type="button" onClick={handleCloseAddBanner} className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

const BannerAdmin = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAddBanner, setShowAddBanner] = useState(false);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const bannerData = await getBanners();
                setBanners(bannerData);
            } catch (error) {
                console.error('Error fetching banners:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBanners();
    }, []);

    const handleBannerAdded = (newBanner) => {
        setBanners([...banners, newBanner]);
    };

    if (loading) {
        return (
            <Layout1>
                <div>Loading...</div>
            </Layout1>
        );
    }

    return (
        <Layout1>
            <div className="flex min-h-screen">
                <SidebarDashboard />
                <div className="flex-1 p-8 bg-gray-100">
                    <div className="container">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">Banner</h2>
                            <button
                                onClick={() => setShowAddBanner(true)}
                                className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded hover:bg-green-600"
                            >
                                Tambah Data
                            </button>
                        </div>
                        <div className="flex flex-wrap mb-6 -mx-3">
                            {banners.map((banner) => (
                                <div key={banner.id} className="w-full px-3 mb-6 md:w-1/2 lg:w-1/4">
                                    <div className="px-6 pt-8 pb-6 text-center transition duration-500 bg-white border border-gray-100 rounded shadow hover:shadow-lg hover-up-2">
                                        <div className="mx-auto mb-4">
                                            <img
                                                className="object-cover w-full h-32 rounded cursor-pointer"
                                                src={banner.imageUrl}
                                                alt={banner.title}
                                            />
                                        </div>
                                        <h3 className="mb-2 font-bold font-heading">{banner.title}</h3>
                                        {/* <p className="text-sm text-blueGray-400">Promo Code: {banner.promo_code}</p>
                                        <p className="text-sm text-blueGray-400">Discount: ${banner.promo_discount_price}</p>
                                        <p className="text-sm text-blueGray-400">Minimum Price: ${banner.minimum_claim_price}</p> */}
                                        <div className="flex justify-center mt-4">
                                            <button className="flex items-center px-3 py-2 mr-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
                                                <PencilAltIcon className="w-5 h-5 mr-1" />
                                                Edit
                                            </button>
                                            <button className="flex items-center px-3 py-2 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-600">
                                                <TrashIcon className="w-5 h-5 mr-1" />
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <ModalAddBanner showAddBanner={showAddBanner} setShowAddBanner={setShowAddBanner} onBannerAdded={handleBannerAdded} />
        </Layout1>
    );
}

export default BannerAdmin;
