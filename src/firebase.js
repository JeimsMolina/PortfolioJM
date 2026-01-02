
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSzrtcLpZNynLOxsbC5E4KZ5kvKZA-fZA",
  authDomain: "portfolio-contact-e53e6.firebaseapp.com",
  projectId: "portfolio-contact-e53e6",
  storageBucket: "portfolio-contact-e53e6.firebasestorage.app",
  messagingSenderId: "21643570826",
  appId: "1:21643570826:web:652795cffbfd0189a3c773"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export { db };
