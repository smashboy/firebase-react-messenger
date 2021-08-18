import firebase from "firebase/app";
import "firebase/firestore";
import firebaseCredentials from "./firebaseCredentials";

firebase.initializeApp(firebaseCredentials);

export const firestore = firebase.firestore();
