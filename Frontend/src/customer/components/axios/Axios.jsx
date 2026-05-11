import axios from 'axios';

// 1. Define your API's base URL
export const API_BASE_URL = 'http://localhost:8080'; // Replace with your backend URL

// 2. Create an Axios instance with default settings
const Axios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 3. Add a Request Interceptor to include Auth Tokens automatically
Axios.interceptors.request.use(
  (config) => {
    // Fetch token from localStorage whenever a request is made
    const token = localStorage.getItem('jwt'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 4. (Optional) Add a Response Interceptor for global error handling
Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Logic for when token expires (e.g., redirect to login)
      console.error("Session expired. Please log in again.");
    }
    return Promise.reject(error);
  }
);

export default Axios;
