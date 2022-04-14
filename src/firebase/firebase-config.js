import firebase from 'firebase/firebase-app' 
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth ' ;  


const firebaseConfig = {

    apiKey: "AIzaSyBbAmEHiw3lcA6D9LsDv8J2tBlVgNhVkqo",
  
    authDomain: "react-app-cursos-50ec5.firebaseapp.com",
  
    projectId: "react-app-cursos-50ec5",
  
    storageBucket: "react-app-cursos-50ec5.appspot.com",
  
    messagingSenderId: "273956656663",
  
    appId: "1:273956656663:web:554b2a4320708553f8ee52",
  
    measurementId: "G-D9YXXWS6FS"
  
  };
   
firebase.initializeApp (firebaseConfig); 


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 



export {
    db,
    GoogleAuthProvider,
    firebase 
}

