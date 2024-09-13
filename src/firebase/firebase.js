import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/database";
import "firebase/compat/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBur912_OUXYGEOO72knhAJB_gnv4wS1IA",
    authDomain: "banigi2024.firebaseapp.com",
    projectId: "banigi2024",
    storageBucket: "banigi2024.appspot.com",
    messagingSenderId: "65120499111",
    appId: "1:65120499111:web:75352c0d689c1f7afa3282",
    measurementId: "G-PPL0RTW10Z"
};

// export const auth = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const dataRef = firebase.database();
export const storage = firebase.storage();
export default firebase;
// const analytics = getAnalytics(app);
