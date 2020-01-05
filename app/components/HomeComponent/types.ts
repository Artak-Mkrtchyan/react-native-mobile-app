import firebase from 'firebase';
import {NavigationStackProp} from 'react-navigation-stack';

export interface IFirebase {
  auth: firebase.auth.Auth;
  db: firebase.firestore.Firestore;
  firebaseInstance: firebase.app.App;
}
export interface IProps {
  firebase: IFirebase;
  navigation: NavigationStackProp<{userId: string}>;
}
