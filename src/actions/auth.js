import { types } from "../types/types"  
import {getAuth,signInWithPopup} from 'firebase/auth'; 
import {googleAuthProvider} from '../components/firebase/firebase-Config' 





export const startLoginEmailPassword = (email,password) => {
    return (dispatch) => {

      setTimeout (() => { 
         
        dispatch(login (123,'Maria'))

      },3500)



    }
}

export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth (); 
    signInWithPopup(auth,googleAuthProvider) 
    .then (({user}) =>{ 
      dispatch (login (user.uid,user.displayName)) 
    })
  }
}


export const login =  (uid,displayName) => ({
   
        type:types.login,
        payload : {
            uid,
            displayName 

        }
    
})



