import _ from "lodash";
import { YellowBox } from "react-native";
import React, { useState } from "react";
import { Text, View, StyleSheet, Image, SafeAreaView, Button } from "react-native";
import ImagePicker from "react-native-image-picker";
import * as firebase from "firebase/app";
import "firebase/storage";

YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
console.warn = message => {
	if (message.indexOf("Setting a timer") <= -1) {
		_console.warn(message);
	}
};

import { IProps } from "./types";

const options = {
	title: "Select Image",
	storageOptions: {
		skipBackup: true,
		path: "images",
		cameraRoll: true,
		waitUntilSaved: true
	}
};

const Home: React.FC<IProps> = props => {
	const [source, setSource] = useState({});

	const uploadImage = async uri => {
		const response = await fetch(uri);
		const blob = await response.blob();
		var ref = firebase
			.storage()
			.ref("uploads")
			.child("file.jpg");
		return ref.put(blob);
	};

	function pickImage() {
		console.log("img");
		ImagePicker.showImagePicker(options, response => {
			// console.log("Response = ", response);
			if (response.didCancel) {
				console.log("User cancelled image picker");
			} else if (response.error) {
				console.log("ImagePicker Error: ", response.error);
			} else if (response.customButton) {
				console.log("User tapped custom button: ", response.customButton);
			} else {
				console.log("else");
				const source = { uri: response.uri };
				setSource(source);
				uploadImage(response.uri).then(res => console.log("upload"));
			}
		});
	}

	return (
		<SafeAreaView style={styles.container}>
			<View>
				{source && source.uri ? (
					<Image source={source} style={styles.image} />
				) : (
					<Text>Select an Image!</Text>
				)}
				<View style={{ height: 100 }}>
					<Button title='Pick image' onPress={() => pickImage()} />
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		flex: 1,
		marginTop: 10,
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#ecf0f1"
	},
	image: {
		marginTop: 20,
		marginBottom: 20,
		width: 150,
		height: 150
	}
});

export default Home;
