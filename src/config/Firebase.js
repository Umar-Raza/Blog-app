// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC36GeKtSzS-HUJoAKEQDLTCpsjdwNB9wI",
    authDomain: "blog-by-umar.firebaseapp.com",
    projectId: "blog-by-umar",
    storageBucket: "blog-by-umar.appspot.com",
    messagingSenderId: "595624256109",
    appId: "1:595624256109:web:6ca07ff59c35eb4c445564",
    measurementId: "G-3M9NV06W8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { analytics, auth, firestore, storage }

