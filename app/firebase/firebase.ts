import firebase from "firebase";
import { firebaseConfig } from "./firebaseConfig";

import "firebase/app";
import "firebase/firestore";

export class Firebase {
  auth: firebase.auth.Auth;

  db: firebase.firestore.Firestore;

  firebaseInstance: firebase.app.App;

  constructor() {
    this.firebaseInstance = firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }
}
