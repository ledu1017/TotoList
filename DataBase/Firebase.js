// firebase 연동 
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCq3zs-AYyiOAAqGy0At3BfMdzBZxDlyKs",
  authDomain: "mobileproject1-5cda9.firebaseapp.com",
  projectId: "mobileproject1-5cda9",
  storageBucket: "mobileproject1-5cda9.appspot.com",
  messagingSenderId: "770908931883",
  appId: "1:770908931883:web:18eb7a0022de0812d9676e",
  measurementId: "G-C1L0KQ5TRF"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
export { db };