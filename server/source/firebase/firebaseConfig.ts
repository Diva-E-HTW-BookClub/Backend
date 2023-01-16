// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDarZyJqdfwiqwwsHMnzHqm5IPwHgeaUQQ",
  authDomain: "diva-e-htw-bookclub.firebaseapp.com",
  projectId: "diva-e-htw-bookclub",
  storageBucket: "diva-e-htw-bookclub.appspot.com",
  messagingSenderId: "322441309453",
  appId: "1:322441309453:web:b93823d0d867546070d444",
  measurementId: "G-XMMQYQLYFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firebaseDB = getFirestore();

export { auth, firebaseDB };
