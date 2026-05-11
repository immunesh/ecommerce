import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useGlobal } from '../../context/GlobalContext';


const ProtectedRoute = ({ children }) => {
  const { user } = useGlobal(); // Check if your user object or token exists
  const location = useLocation();

  if (!user) {
    // Redirect to login, but save the current location so we can go back after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
