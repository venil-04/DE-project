// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjH-NIYDwrimuUGbIoBD4S_yOrEEaGPqQ",
  authDomain: "de-2023-cd403.firebaseapp.com",
  projectId: "de-2023-cd403",
  storageBucket: "de-2023-cd403.appspot.com",
  messagingSenderId: "982424647955",
  appId: "1:982424647955:web:98dd8486e5b4cb6a6582e6",
  measurementId: "G-M5SNCJVF46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// const analytics = getAnalytics(app);

export {app,auth}
