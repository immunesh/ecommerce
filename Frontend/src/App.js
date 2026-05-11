import logo from './logo.svg';
import Navigation from './customer/components/navigation/navigation';
import { Menu } from '@headlessui/react'
import './App.css';
import Homepage from './customer/Pages/Homepage/Homepage';
import 'react-alice-carousel/lib/alice-carousel.css';
import Footer from './customer/components/footer/footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import { Route, Routes } from 'react-router-dom';
import Cart from './customer/components/cart/Cart';
import CheckOut from './customer/components/checkout/CheckOut';

// Import your new Auth components (adjust paths as necessary)
import Login from './customer/components/auth/Login'; 
import Register from './customer/components/auth/Register';
import ProtectedRoute from './customer/components/auth/ProtectedRoute';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <Navigation />

      {/* PAGE CONTENT */}
      <div className="flex-grow">
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Homepage />} />

          {/* AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* PRODUCTS */}
          <Route path="/products/men" element={<Product />} />
          <Route path="/products/women" element={<Product />} />

          {/* PRODUCT DETAILS */}
          <Route path="/product/:id" element={<ProductDetails />} />
          
          {/* CART & CHECKOUT */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />

           {/* PRIVATE ROUTES */}
          <Route 
            path="/checkout" 
            element={
              <ProtectedRoute>
                <CheckOut />
              </ProtectedRoute>
            } 
          />

          {/* 404 - OPTIONAL */}
          <Route path="*" element={<div className="flex justify-center items-center h-full text-2xl font-bold py-20">404 - Page Not Found</div>} />

        </Routes>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
