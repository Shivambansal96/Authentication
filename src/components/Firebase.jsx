import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAgZz7k-auoFeoeM2ENuoHS12G67_F5yKM",
  authDomain: "sb-firebase-tutorial.firebaseapp.com",
  projectId: "sb-firebase-tutorial",
  storageBucket: "sb-firebase-tutorial.appspot.com",
  messagingSenderId: "506947979194",
  appId: "1:506947979194:web:7f5ca36398665d44893f83",
  measurementId: "G-NJDPR3DD7G"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


export {app, firestore}
// We need to wrap variables in {curly braces} to export.
