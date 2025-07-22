
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoeOj2DHj6CM1m1SqJZwAS0AuyIDz2AN0",
  authDomain: "portfolio-jeimsm.firebaseapp.com",
  databaseURL: "https://portfolio-jeimsm-default-rtdb.firebaseio.com",
  projectId: "portfolio-jeimsm",
  storageBucket: "portfolio-jeimsm.firebasestorage.app",
  messagingSenderId: "444399571882",
  appId: "1:444399571882:web:6b084479c3df7e98d511d3"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export { db };
