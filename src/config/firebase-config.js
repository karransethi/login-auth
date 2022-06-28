// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJXub_EqJPc9JhcuFd-PmQZZzJyOQomgE",
  authDomain: "login-practice-c0909.firebaseapp.com",
  projectId: "login-practice-c0909",
  storageBucket: "login-practice-c0909.appspot.com",
  messagingSenderId: "942338868297",
  appId: "1:942338868297:web:86b642be7cb8b2630d6b98",
  measurementId: "G-YBH3GY8JZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
