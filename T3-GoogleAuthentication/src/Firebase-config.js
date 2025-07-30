import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: String(import.meta.env.VITE_FIREBASE_APIKEY),
    authDomain: String(import.meta.env.VITE_FIREBASE_AUTHDOMAIN),
    projectId: String(import.meta.env.VITE_FIREBASE_PROJECTID),
    storageBucket: String(import.meta.env.VITE_FIREBASE_STORAGEBUCKET),
    messagingSenderId: String(import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID),
    appId: String(import.meta.env.VITE_FIREBASE_APPID),
    measurementId: String(import.meta.env.VITE_FIREBASE_MEASUREMENTID)
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((res) => {
            const name = res.user.displayName;
            const email = res.user.email;
            const profilepic = res.user.photoURL;

            localStorage.setItem("name",name)
            localStorage.setItem("email",email)
            localStorage.setItem("profile",profilepic)
        })
        .catch((err) => {
            console.log(err.message);

        })
}