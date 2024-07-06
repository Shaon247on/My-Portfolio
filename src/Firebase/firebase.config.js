// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQoIhqwhF3JqN5Qns8O-QiWGmlR4JxHqg",
  authDomain: "aminul-islam-shaon-dev.firebaseapp.com",
  projectId: "aminul-islam-shaon-dev",
  storageBucket: "aminul-islam-shaon-dev.appspot.com",
  messagingSenderId: "635517611125",
  appId: "1:635517611125:web:bad596fdde744478d35c3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth