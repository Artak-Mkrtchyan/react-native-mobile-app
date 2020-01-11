import "react-native-gesture-handler";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import AppNavigator from "./app/app.navigator";
import { FirestoreProvider } from "react-firestore";
import Firebase, { FirebaseContext } from "./app/firebase";

const FirebaseInited = new Firebase();
const App: () => React$Node = () => {
	return (
		<FirebaseContext.Provider value={FirebaseInited}>
			<FirestoreProvider firebase={FirebaseInited.firebaseInstance}>
				<AppNavigator />
			</FirestoreProvider>
		</FirebaseContext.Provider>
	);
};

export default App;
