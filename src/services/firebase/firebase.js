// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Ki-WPVRiC2tlmDjJ9paD7ZqwGpD8A2E",
  authDomain: "sport-9fd66.firebaseapp.com",
  projectId: "sport-9fd66",
  storageBucket: "sport-9fd66.appspot.com",
  messagingSenderId: "730108706085",
  appId: "1:730108706085:web:52bd6d52019d945d506ecc",
  databaseURL: "https://sport-9fd66-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
