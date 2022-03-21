import React from 'react'
import { BrowserRouter, Route, Router, Switch  } from 'react-router-dom'


export const AuthRouter = () => {
  return ( 
     <Router> 
         <div>
             <Switch>
             
             <Route 
             path='/auth' 
             component = {AuthRouter} 
             />  

             </Switch>
         </div>
    
     </Router> 
 
 



    
  )
}
 