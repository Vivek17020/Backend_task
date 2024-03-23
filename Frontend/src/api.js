
const API_BASE_URL = 'http://localhost:8000'; //Use IP address or local 
// Function to fetch data from the backend
export const getData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/get_data`);
    const data = await response.json();
    console.log('API response:', data);
    return data;
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
};

