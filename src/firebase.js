import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDw92Ru7oVbvjOYxvZH61uRrf9JEb25ljs",
  authDomain: "mern-ecommerce-f7e99.firebaseapp.com",
  databaseURL: "https://mern-ecommerce-f7e99.firebaseio.com",
  projectId: "mern-ecommerce-f7e99",
  storageBucket: "mern-ecommerce-f7e99.appspot.com",
  messagingSenderId: "1025538116419",
  appId: "1:1025538116419:web:e6cded951ec8d7a45c7df6",
  measurementId: "G-DF00BCBDQL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };