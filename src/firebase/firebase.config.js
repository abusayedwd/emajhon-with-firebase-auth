// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfhh3fvvZSlFS0jA-leiAetGbthKkxitU",
  authDomain: "emajhon-with-firebaseauth.firebaseapp.com",
  projectId: "emajhon-with-firebaseauth",
  storageBucket: "emajhon-with-firebaseauth.appspot.com",
  messagingSenderId: "211691162515",
  appId: "1:211691162515:web:6c5f99d944dc6512bbb666"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;