import React from 'react'
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { JournalScreen } from '../../journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {
  return (
    <div>
       <Router>
       <div>
           <PrivateRoute>
               <Route
               path= "/auth"
               component ={AuthRouter}
               />

               <Route
               exact
               path= "/"
               component = {JournalScreen}
               />

             <Redirect to= "auth/login"/>

           </PrivateRoute>
       </div>

           </Router>
    </div>
  )
}
