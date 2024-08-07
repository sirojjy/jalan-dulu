import axios from 'axios';

const BASE_URL = 'https://travel-journal-api-bootcamp.do.dibimbing.id/';
const API_KEY = '24405e01-fbc1-45a5-9f5a-be13afcd757c';

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(
            `${BASE_URL}api/v1/login`,
            { email, password },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'apiKey': API_KEY,
                },
            }
        );

        if (response.status !== 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.data;
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
        const response = await fetch(`${BASE_URL}api/v1/register`, {
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