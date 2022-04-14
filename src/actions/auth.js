import { types } from "../types/types"  
import {firebase, googleAuthProvider} from '../firebase/firebase-Config'


export const startLoginEmailPassword = (email,password) => {
    return (dispatch) => {

      setTimeout (() => { 
         
        dispatch(login (123,'Maria'))

      },3500)



    }
}

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().singInWithPopup(googleAuthProvider)
    .then(userCred => {
      console.log (userCred) 
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



