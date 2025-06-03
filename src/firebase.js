// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBUlu3LHlafez5RP-ablHjWi4v4WZlNn8Q",
  authDomain: "enactus-7da6b.firebaseapp.com",
  projectId: "enactus-7da6b",
  storageBucket: "enactus-7da6b.firebasestorage.app",
  messagingSenderId: "56762806425",
  appId: "1:56762806425:web:933e75205fc4a66aa6c808",
  measurementId: "G-R299RQ4YYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore= getFirestore(app)