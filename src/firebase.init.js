// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLmCBhgt5OjpMP-jTGya8hJL2tHfLkgck",
    authDomain: "ema-john-simple-ecommerc-87399.firebaseapp.com",
    projectId: "ema-john-simple-ecommerc-87399",
    storageBucket: "ema-john-simple-ecommerc-87399.appspot.com",
    messagingSenderId: "441877262748",
    appId: "1:441877262748:web:b4f137e276fc17f81e9859"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;