import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5eTiP7PsWXAAmqPscFORrxTRfMw5SiNE",
  authDomain: "prepwise-f504f.firebaseapp.com",
  projectId: "prepwise-f504f",
  storageBucket: "prepwise-f504f.firebasestorage.app",
  messagingSenderId: "424786356027",
  appId: "1:424786356027:web:2ef79edaeef3867da8b91e",
  measurementId: "G-6SJ44V2HYD",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
