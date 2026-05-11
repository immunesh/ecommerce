import Axios from "./Axios";

const getMensKurta = async () => {
  const response = await Axios.get("/products/men");
  return response.data;
};

const getWomensKurta = async () => {
  const response = await Axios.get("/products/women");
  return response.data;
};

// Bundle them into a single object
const ProductApi = {
  getMensKurta,
  getWomensKurta,
};

export default ProductApi;
