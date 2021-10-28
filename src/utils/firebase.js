import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBR-1bh_EDt8wQ3XHgW8xZ5jCMe42XWxEI",
    authDomain: "brewsdrip.firebaseapp.com",
    projectId: "brewsdrip",
    storageBucket: "brewsdrip.appspot.com",
    messagingSenderId: "714847233151",
    appId: "1:714847233151:web:05a6ed56fc906497e70b4a",
    measurementId: "G-YHST77G8BL"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;