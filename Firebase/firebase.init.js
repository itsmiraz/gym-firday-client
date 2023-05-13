// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhlU_xlgqTYJgIVS4uM7XMyuwMGxXTtjw",
  authDomain: "gymfriday-cbe38.firebaseapp.com",
  projectId: "gymfriday-cbe38",
  storageBucket: "gymfriday-cbe38.appspot.com",
  messagingSenderId: "993099757106",
  appId: "1:993099757106:web:d56cb99ded8f0260222e2b",
  measurementId: "G-J3PZ0FQW86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app