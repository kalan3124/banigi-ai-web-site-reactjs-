import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/database";
import "firebase/compat/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

// export const auth = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const dataRef = firebase.database();
export const storage = firebase.storage();
export default firebase;
// const analytics = getAnalytics(app);
