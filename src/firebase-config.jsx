// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { firebase } from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3-fn0HLUwUmUg5mDoViV8UTS_Lt6pQME",
  authDomain: "react-firebase-5a996.firebaseapp.com",
  projectId: "react-firebase-5a996",
  storageBucket: "react-firebase-5a996.appspot.com",
  messagingSenderId: "1048659765468",
  appId: "1:1048659765468:web:6f39a0264f38f895a92c19",
  measurementId: "G-Q7FMZQRPJG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
console.log(app);
