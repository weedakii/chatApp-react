import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyABBJ0I1tuX3q_XIhhon4E19Boa6TWMEVs",
    authDomain: "messenger-cl-fb.firebaseapp.com",
    projectId: "messenger-cl-fb",
    storageBucket: "messenger-cl-fb.appspot.com",
    messagingSenderId: "283213997134",
    appId: "1:283213997134:web:ba96716d0ea70fbad58f1f",
    measurementId: "G-SKCN4R17KD" 
});

const db  = firebaseApp.firestore()

export default db
