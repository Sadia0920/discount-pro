// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq-HnVOmdnBCUYc5asERAklsiKV0fhASs",
  authDomain: "discount-pro-bbfa4.firebaseapp.com",
  projectId: "discount-pro-bbfa4",
  storageBucket: "discount-pro-bbfa4.firebasestorage.app",
  messagingSenderId: "673278629935",
  appId: "1:673278629935:web:eb9b2c4cbd7b254cb60eda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);