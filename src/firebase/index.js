import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configs
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyA6EAPDK8WnQV83XB-tA1V3RpLXeVM5BMw",
  authDomain: "resume-database-c2d39.firebaseapp.com",
  projectId: "resume-database-c2d39",
  storageBucket: "resume-database-c2d39.appspot.com",
  messagingSenderId: "655506164104",
  appId: "1:655506164104:web:e34f558358120ed334d23d",
};

const fb = initializeApp(FIREBASE_CONFIG);
const db = getFirestore();
const storage = getStorage();

export default {
  db,
  fb,
  storage
};
