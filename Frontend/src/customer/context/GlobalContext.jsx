import React, {
  createContext,
  useState,
  useContext,
  Children,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import ProductApi from "../components/axios/ProductApi";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [product, setProduct] = useState([]);
  const [mensKurta, setMensKurta] = useState([]);
  const [womensKurta, setWomensKurta] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch data when the app loads
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const menData = await ProductApi.getMensKurta();
        const womenData = await ProductApi.getWomensKurta();
        
        setMensKurta(menData);
        setWomensKurta(womenData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const addProduct = (product) => {
    setProduct(product);
  };

  return (
    <GlobalContext.Provider
      value={{ cartItems, addToCart, product, addProduct }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
