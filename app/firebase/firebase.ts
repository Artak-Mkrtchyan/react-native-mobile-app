import firebase from 'firebase';
import config from './firebaseConfig';

require('firebase/app');
require('firebase/firestore');
class Firebase {
  auth: firebase.auth.Auth;
  db: firebase.firestore.Firestore;
  firebaseInstance: firebase.app.App;

  constructor() {
    this.firebaseInstance = firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  doCreateUserWithEmailAndPassword = (email: string, password: string) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email: string, password: string) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();
}

export default Firebase;
