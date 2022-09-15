import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyDO02E3pHarZZd1Wqh3j0-9l-9CIQ3d5PM",
  authDomain: "chat-810cb.firebaseapp.com",
  projectId: "chat-810cb",
  storageBucket: "chat-810cb.appspot.com",
  messagingSenderId: "26673160775",
  appId: "1:26673160775:web:815a65aba48afb9fcf4762"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app);
export const db = getFirestore(app);