import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBOZMLufQhlAtxPy2MLgwzs171QKEn4D0o",
  authDomain: "crwn-db-132b6.firebaseapp.com",
  projectId: "crwn-db-132b6",
  storageBucket: "crwn-db-132b6.appspot.com",
  messagingSenderId: "939288026098",
  appId: "1:939288026098:web:fbcf11584347e3a0ac696b",
  measurementId: "G-11KES3F302"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;