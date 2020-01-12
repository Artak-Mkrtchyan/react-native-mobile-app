import firebase from "firebase";
import config from "./firebaseConfig";

require("firebase/app");
require("firebase/firestore");
class Firebase {
	auth: firebase.auth.Auth;
	db: firebase.firestore.Firestore;
	firebaseInstance: firebase.app.App;

	constructor() {
		this.firebaseInstance = firebase.initializeApp(config);
		this.auth = firebase.auth();
		this.db = firebase.firestore();
	}
}

export default Firebase;
