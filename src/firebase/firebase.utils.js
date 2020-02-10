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

  export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if(!userAuth)return;

    const userRef = firestore.doc(`users/{userAuth.uid}`);
    const snapShot = await userRef.get()
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log("error creating user", error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

//  authentication
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
   
  export default firebase;