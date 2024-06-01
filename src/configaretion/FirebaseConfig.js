// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoDs5xdo6kTDGdd2oiP9rvmA4XefZvui0",
  authDomain: "alap-34953.firebaseapp.com",
  projectId: "alap-34953",
  storageBucket: "alap-34953.appspot.com",
  messagingSenderId: "376899816634",
  appId: "1:376899816634:web:421743b53b65aa5bfc4683",
  measurementId: "G-YJXH0Z471X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig