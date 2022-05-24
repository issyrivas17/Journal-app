import { types } from '../types/types'
import { getAuth, signInWithPopup } from 'firebase/auth'
import { googleAuthProvider } from '../components/firebase/firebase-Config'
import { FirebaseError } from 'firebase/app'
import { async } from '@firebase/util'

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, 'Maria'))
    }, 3500)
  }
}
export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    Firebase.auth().createUserWithEmailAndPassword (email,password)
    .then(async ({user}) => {
    await user.updateProfile ({ displayName:name});
    dispatch (
      login (user.uid, user.displayName ) 
    )
    )};
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

export const login = (uid, displayName) => ({

  type: types.login,
  payload: {
    uid,
    displayName
  }

})
