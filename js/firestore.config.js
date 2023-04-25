// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, onSnapshot, query, enableIndexedDbPersistence } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js'
const firebaseConfig = {
  apiKey: "AIzaSyCEBN3VIHEIcEdl7dbYGIwzfeYFeug_WG0",
  authDomain: "calander-app-594b5.firebaseapp.com",
  projectId: "calander-app-594b5",
  storageBucket: "calander-app-594b5.appspot.com",
  messagingSenderId: "635963918821",
  appId: "1:635963918821:web:2acb42be00f5a97908870c",
  measurementId: "G-EVW8KND8JD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db }