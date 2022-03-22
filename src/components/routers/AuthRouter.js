import React from 'react'
import { Route,Switch } from 'react-router-dom'
import { LoginScreen } from '../auth/LoginScreen'
import { RegisterScreen } from '../RegisterScreen'

export const AuthRouter = () => {
  return (
    <div>
        <Switch>
            <Route 
            exact 
            path = '/auth/login'
            component = {LoginScreen}                
                
          /> 

           <Route 
            exact 
            path = '/auth/login'
            component = {RegisterScreen}    
            /> 

        </Switch>
    </div>
  )
}
