// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAryRlD-ZBNT7TIB1RBaFsKGHFj1AZLMsw",
  authDomain: "pantry-tracking-ef9f9.firebaseapp.com",
  projectId: "pantry-tracking-ef9f9",
  storageBucket: "pantry-tracking-ef9f9.appspot.com",
  messagingSenderId: "993907357094",
  appId: "1:993907357094:web:46dcf3111af0478327cb67",
  measurementId: "G-0NB57C8VES",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
