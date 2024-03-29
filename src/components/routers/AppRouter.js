/* eslint-disable */  

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {BrowserRouter as  Routes, Route } from "react-router-dom"; 

import {LoginScreen} from '../auth/LoginScreen' 
import {JournalScreen} from '../../journal/JournalScreen' 
import {AuthRouter} from '../routers/AuthRouter' 
import {PrivateRoute} from '../routers/PrivateRoute' 
import {PublicRoute} from '../routers/PublicRoute' 
import { getAuth, onAuthStateChanged } from "firebase/auth";


export const AppRouter= () => {
  const dispatch = useDispatch(); 
 
  const [checking, setChecking] = useState(true);
 
  const [isLogged, setIsLogged] = useState(false);
 
  useEffect(() => {
    const auth = getAuth () 
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
    <BrowserRouter>
    <Routes>
        <Route
            path="/*"
            element={
                <PublicRoute isAuth={isLoggedIn}>
                    <AuthRouter />
                </PublicRoute>
            }
        />

        <Route
            path="/"
            element={
                <PrivateRoute isAuth={isLoggedIn}>
                    <JournalScreen />
                </PrivateRoute>
            }
        />
    </Routes>
</BrowserRouter>
  );
};