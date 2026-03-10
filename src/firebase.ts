// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHESXiGtqV_5u2BvjJlhu4-e6bXKXuVHo",
  authDomain: "invoice-12fe7.firebaseapp.com",
  projectId: "invoice-12fe7",
  storageBucket: "invoice-12fe7.firebasestorage.app",
  messagingSenderId: "863437638427",
  appId: "1:863437638427:web:ed1dbfd3824e31527761be",
  measurementId: "G-PRV84WNLH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
const analytics = getAnalytics(app);










