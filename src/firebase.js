import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAgP1GJ8VaSo2zNR1sWhdDQ7qmj1IkXQY0",
  authDomain: "idea-board-gdsc2023.firebaseapp.com",
  projectId: "idea-board-gdsc2023",
  storageBucket: "idea-board-gdsc2023.appspot.com",
  messagingSenderId: "463240164544",
  appId: "1:463240164544:web:00a0980eb1da65d7776925",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
// Your web app's Firebase configuration

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
