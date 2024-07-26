// utils/api.js
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
  