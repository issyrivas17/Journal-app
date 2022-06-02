/* eslint-disable */  
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Router } from "react-router-dom"; 

import {LoginScreen} from '../auth/LoginScreen' 
import {JournalScreen} from '../../journal/JournalScreen' 
import { auth } from "../firebase/firabase-config"; 
import {AuthRouter} from '../routers/AuthRouter' 
import {PrivateRoute} from '../routers/PrivateRoute' 
import {PublicRoute} from '../routers/PublicRoute' 

export const AppRouter= () => {
  const dispatch = useDispatch();
 
  const [checking, setChecking] = useState(true);
 
  const [isLogged, setIsLogged] = useState(false);
 
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(LoginScreen(user.uid, user.displayName));
 
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
 
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLogged]);
 
  if (checking) {
    return <div>Wait...</div>;
  }
 
  return (
    <Router>
      <Route
        path="auth/*"
        element={
          <PublicRoute isAuthenticated={isLogged}>
            <AuthRouter />
          </PublicRoute>
        }
      />
 
      <Route
        path="/"
        element={
          <PrivateRoute isAuthenticated={isLogged}>
            <JournalScreen />
          </PrivateRoute>
        }
      />
 
      <Route path="*" element={<div>Not found</div>} />
    </Router>
  );
};