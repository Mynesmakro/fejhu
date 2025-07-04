  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";


const firebaseConfig = {

  apiKey: "AIzaSyB47LW422uce0FmPCg4d2tiQz8MNUp_gnQ",
  authDomain: "gyjuo-79b98.firebaseapp.com",
  projectId: "gyjuo-79b98",
  storageBucket: "gyjuo-79b98.firebasestorage.app",
  messagingSenderId: "105648765355",
  appId: "1:105648765355:web:9d3325824750c635f3faee",
  measurementId: "G-HLD6L25KB8"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const storage = getStorage(app);
