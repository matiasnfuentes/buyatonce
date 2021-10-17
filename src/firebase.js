import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAvfYEfDZRjag1JPlNfGRSUlB7CLTu-qJo",
  authDomain: "buyatonce-1df70.firebaseapp.com",
  projectId: "buyatonce-1df70",
  storageBucket: "buyatonce-1df70.appspot.com",
  messagingSenderId: "1046397508347",
  appId: "1:1046397508347:web:45cecadd71ca16d5ca2e5e",
  measurementId: "G-E4B7N1Z755"
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);