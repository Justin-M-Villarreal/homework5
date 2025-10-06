// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3Ibgrw20ZDkuHthScZqpNCJVj7EkG7Dc",
  authDomain: "homework5-cfc42.firebaseapp.com",
  projectId: "homework5-cfc42",
  storageBucket: "homework5-cfc42.firebasestorage.app",
  messagingSenderId: "236581337075",
  appId: "1:236581337075:web:0832fc722870b4e9524486",
  measurementId: "G-QER4TKFFCP"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);