import { types } from "../types/types" 
import {firebase} from 'firebase/firebase-config' 

export const startLoginEmailPassword = (email,password) => {
    return (dispatch) => {

      setTimeout (() => { 
         
        dispatch(login (123,'Maria'))

      },3500)



    }
}

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
  }
}


export const login =  (uid,displayName) => ({
   
        type:types.login,
        payload : {
            uid,
            displayName 

        }
    
})



