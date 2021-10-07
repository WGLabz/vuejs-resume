import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import FIREBASE_CONFIG from "./config"



const fb = initializeApp(FIREBASE_CONFIG);
const db = getFirestore();
const storage = getStorage();


export  default {
  db,
  fb,
  storage
};
