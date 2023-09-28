// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCcQK7Na48GwCLoHsgow0IUUZvgfHZNFO0",
  authDomain: "kunan-ticketera-ace25.firebaseapp.com",
  projectId: "kunan-ticketera-ace25",
  storageBucket: "kunan-ticketera-ace25.appspot.com",
  messagingSenderId: "373388728729",
  appId: "1:373388728729:web:86b654ed4276f0c70a1b08",
  measurementId: "G-WEWBJ361P4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
