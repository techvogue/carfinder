// src/services/api.js
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchCars = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/cars`);
    console.log(res.data);
    
    return res.data; 

  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};
