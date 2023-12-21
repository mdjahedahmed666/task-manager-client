// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmTHYsRfRrXihnHSJT1QVbDr5cBQiqoIQ",
  authDomain: "task-manager-4b532.firebaseapp.com",
  projectId: "task-manager-4b532",
  storageBucket: "task-manager-4b532.appspot.com",
  messagingSenderId: "248153262405",
  appId: "1:248153262405:web:68c581fb2aa759e595162c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;