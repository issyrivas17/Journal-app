/* eslint-disable */  
import React from 'react';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({isAuth,  children }) => {
  return isAuth ? <Navigate to="/" /> : children;
}; 