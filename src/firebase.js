import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAdC3zmiYrG5ZuF8gkwLiNJa-H6JwsENu8",
    authDomain: "chatio-7962c.firebaseapp.com",
    projectId: "chatio-7962c",
    storageBucket: "chatio-7962c.appspot.com",
    messagingSenderId: "298700364767",
    appId: "1:298700364767:web:8feaa4c30350f496cc026a",
    measurementId: "G-8Q6ZP7M7L0"
};

firebase.initializeApp(firebaseConfig);

export default firebase;


