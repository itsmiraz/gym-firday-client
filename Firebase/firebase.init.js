// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtKIOfh-dst9LM_7-Xo6mr9MkdVE-jBSI",
  authDomain: "gym-friday-e7dde.firebaseapp.com",
  projectId: "gym-friday-e7dde",
  storageBucket: "gym-friday-e7dde.appspot.com",
  messagingSenderId: "98909143350",
  appId: "1:98909143350:web:b11e474f6adaf72f14f397",
  measurementId: "G-KVB0PJ0ER9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app