import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDactuiPe4DZoaV1iiNR0ljnjbtg93XC4w",
    authDomain: "pallas-db.firebaseapp.com",
    databaseURL: "https://pallas-db.firebaseio.com",
    projectId: "pallas-db",
    storageBucket: "pallas-db.appspot.com",
    messagingSenderId: "10675187925",
    appId: "1:10675187925:web:1ce07cb0742315b6a4325c",
    measurementId: "G-08607Z3VES"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

//  authentication
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
   
  export default firebase;