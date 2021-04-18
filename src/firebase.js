import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJaqhs3tpbv5tabIY5O4imseqSkApOM3s",
  authDomain: "pizzeria-f2b3a.firebaseapp.com",
  projectId: "pizzeria-f2b3a",
  storageBucket: "pizzeria-f2b3a.appspot.com",
  messagingSenderId: "791160792932",
  appId: "1:791160792932:web:a075d4f654dd4bc7703c71",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, firebase, db };
