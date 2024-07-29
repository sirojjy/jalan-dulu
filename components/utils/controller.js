import axios from 'axios';

const BASE_URL = 'https://travel-journal-api-bootcamp.do.dibimbing.id/';
const API_KEY = '24405e01-fbc1-45a5-9f5a-be13afcd757c';

export const fetchBanners = async () => {
    try {
      const response = await fetch('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners', {
        headers: {
          'Content-Type': 'application/json',
          'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c'
        }
      });
      const data = await response.json();
      return data.data; // Assuming the banners are in data.data
    } catch (error) {
      console.error('Error fetching banners:', error);
      return [];
    }
  };
  


  export const fetchPromos = async () => {
    try {
      const response = await fetch('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c', // Sertakan apiKey di header
        },
      });
  
      const data = await response.json();
      if (data.code === '200' && data.status === 'OK') {
        return data.data.slice(0, 4); // Ambil 4 promo
      }
      throw new Error('Failed to fetch promos');
    } catch (error) {
      console.error('Error fetching promos:', error);
      return [];
    }
  };

  export const fetchDestinations = async () => {
    try {
        const response = await fetch('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories', {
            headers: {
                'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c'
            }
        });
        const data = await response.json();
        if (data.code === '200') {
            return data.data.slice(0, 3); // Mengambil hanya 3 item
        }
        throw new Error(data.message);
    } catch (error) {
        console.error('Error fetching destinations:', error);
        return [];
    }
};

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}api/v1/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': API_KEY,
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// pages/api/register.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, password, passwordRepeat, role, profilePictureUrl, phoneNumber } = req.body;

    const response = await fetch('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c'
      },
      body: JSON.stringify({ email, name, password, passwordRepeat, role, profilePictureUrl, phoneNumber })
    });

    const data = await response.json();

    if (response.ok) {
      res.status(200).json({ message: 'Berhasil daftar' });
    } else if (data.code === '409') {
      res.status(409).json({ message: 'Email sudah terdaftar' });
    } else {
      res.status(500).json({ message: 'Terjadi kesalahan, silakan coba lagi' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
