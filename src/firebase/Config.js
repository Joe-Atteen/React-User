import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWDbwGrBZocTSgG7_r1C9L0jGQ8Qp3YAU",
  authDomain: "users-app-7725d.firebaseapp.com",
  projectId: "users-app-7725d",
  storageBucket: "users-app-7725d.appspot.com",
  messagingSenderId: "242613931121",
  appId: "1:242613931121:web:97305ec30d1550cee09fd0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
