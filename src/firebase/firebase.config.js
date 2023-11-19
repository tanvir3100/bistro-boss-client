// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiTi4hqBlwlaipHq3GW88zEx3ZYww4Aw8",
    authDomain: "bistro-boss-9cf77.firebaseapp.com",
    projectId: "bistro-boss-9cf77",
    storageBucket: "bistro-boss-9cf77.appspot.com",
    messagingSenderId: "163254269326",
    appId: "1:163254269326:web:ad5149c8e3a44de41960df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
