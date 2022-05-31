/* eslint-disable */  
import React, { useEffect } from 'react'
import { Routes, Route} from "react-router-dom";
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useDispatch } from 'react-redux';
import {login} from '../actions/auth'
import { useState } from 'react';
import {AuthRouter} from '../routers'
import { PrivateRoute } from '../routers/PrivateRoute';
import { PublicRoute } from '../routers/PublicRoute';
import { JournalScreen } from '../../journal/JournalScreen';
 
export const AppRouter = () => {
 
 
    
    const dispatch = useDispatch();
 
    const [checking, setChecking] = useState(true);
 
  
    const [isLoggedIn, setIsLoggedIn] = useState(false);
 
 
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) =>{
            console.log(user);
 
 
            if(user?.uid){
            dispatch(login( user.uid , user.displayName ));
 
            setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
 
           
            setChecking(false);
        })
    }, [dispatch, setChecking,setIsLoggedIn])
 
    if(checking){
        return(
                <h1>Espera.....</h1>
        )
    }
 
    
    return (
        <Routes>
        <Route
            path="/*"
            element={
                <PublicRoute isAuth={isLoggedIn}>
                    <AuthRouter/>
                </PublicRoute>
            }
        />
 
        <Route
            path="/"
            element={
                <PrivateRoute isAuth={isLoggedIn}>
                    <JournalScreen/> 
                    
                </PrivateRoute>
            }
        />
        
 
    </Routes>
    
   
    )
}
 