// controllers/bannerController.js

const BASE_URL = 'https://travel-journal-api-bootcamp.do.dibimbing.id/';
const API_KEY = '24405e01-fbc1-45a5-9f5a-be13afcd757c';
const AUTHORIZATION = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiIzYTZmMmYyYy1mZjg4LTRkNTAtOTc4Zi01MGRhZDJkNmU5OTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MjI2MTQ4MDd9.PltRe4iv3yH2Ijk52DktVCOXhY6tzP0w2uYLfvRXAz8';

export const getBanners = async () => {
  try {
    const response = await fetch(`${BASE_URL}api/v1/banners`, {
      headers: {
        'Content-Type': 'application/json',
        'apiKey': API_KEY
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch banners');
    }
    const data = await response.json();
    return data.data; // Assuming the data is inside `data` property
  } catch (error) {
    console.error(error);
    return [];
  }
};


export const createBanner = async (bannerData) => {
    try {
      const response = await fetch(`${BASE_URL}api/v1/banners`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apiKey': API_KEY,
          'Authorization': AUTHORIZATION,
        },
        body: JSON.stringify(bannerData),
      });
      if (!response.ok) {
        throw new Error('Failed to create banner');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };

export const updateBanner = async (bannerId, updatedData) => {
  try {
    const response = await fetch(`${apiUrl}/${bannerId}`, {
      method: 'PUT',
      ...fetchOptions,
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      throw new Error('Failed to update banner');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteBanner = async (bannerId) => {
  try {
    const response = await fetch(`${apiUrl}/${bannerId}`, {
      method: 'DELETE',
      ...fetchOptions,
    });
    if (!response.ok) {
      throw new Error('Failed to delete banner');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
