/* eslint-disable */ 
import React from 'react';
import {BrowserRouter as Navigate } from 'react-router-dom';

export const PrivateRoute = ({isAuth, children}) => {
  return isAuth ? children : <Navigate to="/auth/login" />;
};