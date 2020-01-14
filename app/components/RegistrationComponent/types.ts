import firebase from "firebase";
import { NavigationStackProp } from "react-navigation-stack";

export interface Firebase {
	auth: firebase.auth.Auth;
	db: firebase.firestore.Firestore;
	firebaseInstance: firebase.app.App;
}
export interface Props {
	firebase: Firebase;
	navigation: NavigationStackProp<{ userId: string }>;
}
