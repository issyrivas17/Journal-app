/* eslint-disable */
import { types } from '../types/types'
import { getAuth, signInWithPopup,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword} from 'firebase/auth'
import { googleAuthProvider } from '../components/firebase/firebase-Config'
import { finishLoading,startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => { 
    dispatch(startLoading ()); 

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(login( user.uid, user.displayName )); 
            dispatch (finishLoading ()); 
        })
        .catch((error) => {
            console.log(error); 
            dispatch(finishLoading ()); 
        });
};
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => { 
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
          .then(async(user) => {
              await updateProfile(auth.currentUser,{
                  displayName:name
              }) 
              console.log(user);     
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;  
          });
  } 
  
}
      
export const startGoogleLogin = () => {
  return (dispatch) => { 
    const auth = getAuth() 
    signInWithPopup(auth, googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName))
      })
  }
}

export const login = (uid,displayName) => ({
  type: types.login,
  payload: { uid,
    displayName
  }

})