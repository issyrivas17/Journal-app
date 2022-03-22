import React from 'react' 
import {
    BrowserRouter as Router,
    Switch,
    Route 
  } from "react-router-dom";
import { JournalScreen } from '../../journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    <div>
       <Router> 
       <div>
           <Switch>
               <Route 
               patch= "/auth" 
               component ={AuthRouter} 
               />

               <Route
               exact 
               path= "/" 
               component = {JournalScreen} 
               /> 
           </Switch>
       </div>


           </Router> 
    </div>
  )
}
