
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGp_KtfQyH0CcHDZruK1EgU4KoxdKxwdM",
  authDomain: "rj-flamenco.firebaseapp.com",
  projectId: "rj-flamenco",
  storageBucket: "rj-flamenco.appspot.com",
  messagingSenderId: "1035931580937",
  appId: "1:1035931580937:web:3f42ad34d33d74b07f16d8"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore()