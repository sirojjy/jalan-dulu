import React, { useEffect, useState, useRef } from 'react';
import { getBanners, createBanner } from '../../components/utils/controller_banner';
import Layout1 from '../../components/layout/Layout1';
import SidebarDashboard from './sidebar_d';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import toast from 'react-hot-toast';
import Image from 'next/image';


const handleAddBanner = async (event) => {
    event.preventDefault();
  
    const form = event.target;
    const name = form.name.value;
    const imageUrl = form.imageUrl.value; // URL image
  
    const bannerData = {
      name,
      imageUrl
    };
  
    try {
      const newBanner = await createBanner(bannerData);
      toast.success('Banner added successfully');
      onBannerAdded(newBanner);
      handleCloseAddBanner();
    } catch (error) {
      toast.error('Failed to add banner');
      console.error('Error adding banner:', error); // Log error for debugging
    }
  };
  


const ModalAddBanner = ({ showAddBanner, setShowAddBanner, onBannerAdded }) => {
    const [addBannerImageUrl, setAddBannerImageUrl] = useState(null);
    const [addFileName, setAddFileName] = useState(null);
    const formRef = useRef(null);

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
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <form ref={formRef} onSubmit={handleAddBanner} className="space-y-4">
                                        <input
                                            type="text"
                                            name="imageUrl"
                                            id="imageUrl"
                                            placeholder="Image URL"
                                            className="bg-slate-200 dark:bg-slate-700 placeholder:text-slate-400 text-primaryblack dark:text-slate-200 py-[10px] px-4 text-[13px] rounded-lg w-full outline-none"
                                        />
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Banner Name"
                                            className="bg-slate-200 dark:bg-slate-700 placeholder:text-slate-400 text-primaryblack dark:text-slate-200 py-[10px] px-4 text-[13px] rounded-lg w-full outline-none"
                                        />
                                        <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            >
                                                Add
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleCloseAddBanner}
                                                className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            >
                                                Cancel
                                            </button>
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
