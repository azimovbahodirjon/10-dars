import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPogeF6YuqErzij5URfNcx81hJQIhQ-cM",
  authDomain: "apps-bf7e3.firebaseapp.com",
  projectId: "apps-bf7e3",
  storageBucket: "apps-bf7e3.firebasestorage.app",
  messagingSenderId: "382304301388",
  appId: "1:382304301388:web:a11b65c7b8858022a29fe9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();
