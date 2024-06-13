import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAHOCPnxmw9g4djhmgHPsdad7vwuXTUtWw",
    authDomain: "gossip-arena-2.firebaseapp.com",
    projectId: "gossip-arena-2",
    storageBucket: "gossip-arena-2.appspot.com",
    messagingSenderId: "331540327788",
    appId: "1:331540327788:web:943f03af3a18ff9c9ad749",
    measurementId: "G-W6269R3R4L"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);