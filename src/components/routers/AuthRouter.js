import React from 'react' 
import {Switch,Route} from 'react-router-dom'; 
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../RegisterScreen';

export const AuthRouter = () => {
  return (
    <div className ='auth__main'> 
    <div className='auth__box-container'>
    <Switch>
           <Route exact patch = "/auth/login"  component= {LoginScreen}/> 

          <Route exact patch = "/auth/login" component= {RegisterScreen} /> 
           </Switch> 
    </div>
       
    </div>
  )
}
