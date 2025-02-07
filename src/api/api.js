import axios from "axios";

const API_URL = "http://127.0.0.1:5000"; // Flask API Base URL

// Fetch widgets for a given page
export const fetchWidgetsGivenPage = async (pageName) => {
  try {
    const response = await axios.get(`${API_URL}/widget/${pageName}`);
    return Array.isArray(response.data) ? response.data : [response.data]; // Ensure array
  } catch (error) {
    console.error("Error fetching widgets:", error);
    return [];
  }
};

// Fetch widgets for a given page
export const fetchWidgets = async () => {
  try {
    const response = await axios.get(`${API_URL}/widget/`);
    return Array.isArray(response.data) ? response.data : [response.data]; // Ensure array
  } catch (error) {
    console.error("Error fetching widgets:", error);
    return [];
  }
};
