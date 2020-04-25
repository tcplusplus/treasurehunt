import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC9c7nLYh9aeW-WmvPBtPHf31Lknvh90CQ",
  authDomain: "zoektocht-386d2.firebaseapp.com",
  databaseURL: "https://zoektocht-386d2.firebaseio.com",
  projectId: "zoektocht-386d2",
  storageBucket: "zoektocht-386d2.appspot.com",
  messagingSenderId: "226810357634",
  appId: "1:226810357634:web:89df9e0302bd0e2e0d119b",
  measurementId: "G-LQ5Y5NC8Q2"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

export default db;
