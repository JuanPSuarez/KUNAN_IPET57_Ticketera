import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2XdtdwXynQdsoJ21La-F397jB370vt9g",
  authDomain: "ticketera-9d059.firebaseapp.com",
  projectId: "ticketera-9d059",
  storageBucket: "ticketera-9d059.appspot.com",
  messagingSenderId: "474466972627",
  appId: "1:474466972627:web:a12770618c139e73c73526"
  
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);