import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  
  // Strict check for authenticated user with valid ID
  const isAuthenticated = currentUser && currentUser._id;
  
  return isAuthenticated ? <Outlet /> : <Navigate to='/sign-in' replace />;
}