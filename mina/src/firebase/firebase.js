import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/analytics'

var firebaseConfig = {
    apiKey: "AIzaSyCdwfBGymZrQiAWcpQlB-x5YW1VISOolFs",
    authDomain: "testreact-bb2e7.firebaseapp.com",
    projectId: "testreact-bb2e7",
    storageBucket: "testreact-bb2e7.appspot.com",
    messagingSenderId: "891499524572",
    appId: "1:891499524572:web:1679381046ed0446901f19",
    measurementId: "G-BB5SPXQBCD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage()
  firebase.analytics();

  export  {
    storage, firebase as default
  }
