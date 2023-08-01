
import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "firebase/auth"
import "firebase/database";
import 'firebase/auth';
// Import other Firebase services you need, such as authentication, storage, etc.

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_REACT_APP_AUTH_DOMAIN,
  databaseURL:process.env.REACT_APP_DATABASE_UR, 
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASURMENT_ID
};




const app=initializeApp(firebaseConfig);
const db=getFirestore();
const auth =getAuth();

export {app,auth,db};
