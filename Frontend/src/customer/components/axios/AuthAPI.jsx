import Axios from './Axios'; 

const register = async (userData) => {
  console.log(userData)
  const response = await Axios.post("/auth/register", userData);
  // Optional: Save user to local storage directly here
  if (response.data.jwt) {
    localStorage.setItem("jwt", response.data.jwt);
  }
  return response.data;
};

const login = async (loginData) => {
  const response = await Axios.post("/auth/login", loginData);
  if (response.data.jwt) {
    localStorage.setItem("jwt", response.data.jwt);
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("jwt");
};

// Bundle them into a single object
const API = {
  register,
  login,
  logout,
};

export default API;
