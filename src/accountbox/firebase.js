import firebase from 'firebase/compat/app';



import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDF6uV4wiszb6dyB7RKoWe__5P4-2CEmuM",
  authDomain: "fir-auth-84e67.firebaseapp.com",
  projectId: "fir-auth-84e67",
  storageBucket: "fir-auth-84e67.appspot.com",
  messagingSenderId: "1061244902395",
  appId: "1:1061244902395:web:e5b554647cc081ec7b095e",
  measurementId: "G-5QN0MGXBQ7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();