// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWXDO3kKiiGxeZwwU1OAVmWYBONNTRiqc",
  authDomain: "stickies-59352.firebaseapp.com",
  projectId: "stickies-59352",
  storageBucket: "stickies-59352.appspot.com",
  messagingSenderId: "780926991453",
  appId: "1:780926991453:web:0e0e4913629afc579661b4",
  measurementId: "G-1M2V9BMDQC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
