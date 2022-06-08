import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCVie7ypM8eUITTJk7bpQ64Nc3ouDul1xc",
  authDomain: "twitter-clone-dff3e.firebaseapp.com",
  projectId: "twitter-clone-dff3e",
  storageBucket: "twitter-clone-dff3e.appspot.com",
  messagingSenderId: "160500612212",
  appId: "1:160500612212:web:bb04425de222ab1f39a521",
  measurementId: "G-9RDXPBCRM2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;
