// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6q6jjb_7XF7uLUUqnaVjYHfd2MCFulkI",
  authDomain: "real-estate-10efa.firebaseapp.com",
  projectId: "real-estate-10efa",
  storageBucket: "real-estate-10efa.appspot.com",
  messagingSenderId: "936426809860",
  appId: "1:936426809860:web:a09c15bfad5fadf9f16351",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
