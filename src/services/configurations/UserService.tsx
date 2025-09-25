import axios from 'axios';

// URL de API
const API_URL = import.meta.env.VITE_APP_API_URL;

// Exporta cada función de forma individual.
export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};