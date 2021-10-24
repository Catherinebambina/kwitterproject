// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqXBJsN7Pwbry7NQD-AeOncuFYql9kPuc",
  authDomain: "kwitterbutproject.firebaseapp.com",
  databaseURL: "https://kwitterbutproject-default-rtdb.firebaseio.com",
  projectId: "kwitterbutproject",
  storageBucket: "kwitterbutproject.appspot.com",
  messagingSenderId: "252020281524",
  appId: "1:252020281524:web:3c6dfbad31faf3801d47e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
