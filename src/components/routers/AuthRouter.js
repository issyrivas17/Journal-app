/* eslint-disable */  
import React from 'react'
import { Route, Router } from 'react-router';

import { LoginScreen } from '../auth/LoginScreen'; 
import { RegisterScreen } from '../auth/RegisterScreen'; 

export const AuthRouter = () => {
  return (
    <>
      <div className="auth__main">
        <div className="auth__box-container">
          <Router>
            <Route path="/auth/login" element={<LoginScreen />} />
            <Route path="/auth/register" element={<RegisterScreen />} />
          </Router>
        </div>
      </div>
    </>
  );
};