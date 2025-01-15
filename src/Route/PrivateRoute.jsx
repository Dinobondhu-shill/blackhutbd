import { BlackContext } from '@/Context/Context';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {user} = useContext(BlackContext)


  return user ? children : <Navigate to="/login" />
};

export default PrivateRoute;