import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6FQilotOxgv9XNGV0xkRp7Lir6JUAA0Q",
    authDomain: "cafe-24-7.firebaseapp.com",
    projectId: "cafe-24-7",
    storageBucket: "cafe-24-7.appspot.com",
    messagingSenderId: "244441218017",
    appId: "1:244441218017:web:69502ac067ba620bc5b0a0",
    measurementId: "G-3XZEN60FFC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;