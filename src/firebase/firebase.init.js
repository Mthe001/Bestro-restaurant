// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLU5KynpnZFc2sCnvvjEuOHb3nKisx44I",
  authDomain: "bestro-boss-3447a.firebaseapp.com",
  projectId: "bestro-boss-3447a",
  storageBucket: "bestro-boss-3447a.firebasestorage.app",
  messagingSenderId: "1026603055128",
  appId: "1:1026603055128:web:d33c39ce89bcde7ffcab6d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);