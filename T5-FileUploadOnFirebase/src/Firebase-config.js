import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: String(import.meta.env.VITE_FIREBASE_APIKEY),
  authDomain: String(import.meta.env.VITE_FIREBASE_AUTHDOMAIN),
  projectId: String(import.meta.env.VITE_FIREBASE_PROJECTID),
  storageBucket: String(import.meta.env.VITE_FIREBASE_STORAGEBUCKET),
  messagingSenderId: String(import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID),
  appId: String(import.meta.env.VITE_FIREBASE_APPID),
};

const app = initializeApp(firebaseConfig);