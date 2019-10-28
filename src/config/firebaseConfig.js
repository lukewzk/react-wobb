import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDI3aWVd4pgB5aQs9y2M2GnpNp3Dy_hpu4",
  authDomain: "wobb-job-test.firebaseapp.com",
  databaseURL: "https://wobb-job-test.firebaseio.com",
  projectId: "wobb-job-test",
  storageBucket: "wobb-job-test.appspot.com",
  messagingSenderId: "8192428482",
  appId: "1:8192428482:web:d28fddbd1465aafb816e5b",
  measurementId: "G-DC5MNLT0V2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
