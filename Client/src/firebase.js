// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "elevators-labs.firebaseapp.com",
  projectId: "elevators-labs",
  storageBucket: "elevators-labs.appspot.com",
  messagingSenderId: "715039437377",
  appId: "1:715039437377:web:06c5bd9b637de77caa4cc0",
  measurementId: "G-CXZ1M51D8Y",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
