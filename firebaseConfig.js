import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBtRgJ7848S9SuzXIGvXUx4-JN7cz4Kv-U",
  authDomain: "jlg-goals-tracker.firebaseapp.com",
  projectId: "jlg-goals-tracker",
  storageBucket: "jlg-goals-tracker.firebasestorage.app",
  messagingSenderId: "702862492135",
  appId: "1:702862492135:web:2ebc4d022efaf62b5cbd42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)