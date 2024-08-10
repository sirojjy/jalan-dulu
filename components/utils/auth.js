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
export const registerUser = async (email, name, password, passwordRepeat, role, profilePictureUrl, phoneNumber) => {
  try {
      // Validasi input
      if (!email || !name || !password || !passwordRepeat || !role || !phoneNumber) {
          throw new Error('Semua field harus diisi');
      }

      if (password !== passwordRepeat) {
          throw new Error('Password dan konfirmasi password tidak cocok');
      }

      const response = await axios.post(
          `${BASE_URL}api/v1/register`,
          { email, name, password, role, profilePictureUrl, phoneNumber },
          {
              headers: {
                  'Content-Type': 'application/json',
                  'apiKey': API_KEY,
              },
          }
      );

      if (response.status === 200) {
          return { message: 'Berhasil daftar' };
      } else if (response.status === 409) {
          return { message: 'Email sudah terdaftar' };
      } else {
          throw new Error('Terjadi kesalahan, silakan coba lagi');
      }
  } catch (error) {
      console.error('Error registering:', error);
      throw error;
  }
};