import axios from 'axios';

const BASE_URL = 'https://travel-journal-api-bootcamp.do.dibimbing.id/';
const API_KEY = '24405e01-fbc1-45a5-9f5a-be13afcd757c';

//Home Banner
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
  

//Home Promos
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

//Home Activity
export const fetchActivity = async () => {
  try {
      const response = await fetch('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities', {
        method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c'
          }
      });
      const data = await response.json();
      if (data.code === '200') {
          return data.data.slice(0, 3); // Mengembalikan semua item
      }
      throw new Error(data.message);
  } catch (error) {
      console.error('Error fetching activities:', error);
      return [];
  }
};


//Home Categories
export const fetchCategories = async () => {
  try {
      const response = await fetch('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories', {
          headers: {
              'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c'
          }
      });
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return [];
  }
};


//Page  Promos
export const pagePromos = async () => {
  try {
    const response = await fetch('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c',
      },
    });

    console.log('Response Status:', response.status); // Log status HTTP
    console.log('Response OK:', response.ok); // Log apakah response OK

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('API Response Data:', data); // Log seluruh respons dari API

    if (data.code === "200" && data.status === "OK") {
      console.log('Fetched promos:', data.data); // Log data promos yang di-fetch
      return data.data;
    } else {
      console.error('API responded with:', data);
      throw new Error('Failed to fetch promos with valid response');
    }
  } catch (error) {
    console.error('Error fetching promos:', error.message);
    return [];
  }
};

//Page Categories
export const pageCategories = async () => {
  try {
    const response = await fetch('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.code === "200" && data.status === "OK") {
      return data.data;
    } else {
      console.error('API responded with:', data);
      throw new Error('Failed to fetch categories with valid response');
    }
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    return [];
  }
};


//Controller Login
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

//Controller Register
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, password, passwordRepeat, role, profilePictureUrl, phoneNumber } = req.body;

    try {
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
      } else if (response.status === 409) {
        res.status(409).json({ message: 'Email sudah terdaftar' });
      } else {
        res.status(500).json({ message: 'Terjadi kesalahan, silakan coba lagi' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Terjadi kesalahan, silakan coba lagi' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}



