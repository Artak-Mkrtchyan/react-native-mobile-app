import React, { useState } from "react";
import { Button, View, StyleSheet, TextInput, SafeAreaView } from "react-native";
import { IProps } from "./types";

const Registration: React.FC<IProps> = props => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	function createUser() {
		props.firebase.auth
			.createUserWithEmailAndPassword(email, password)
			.then(() => props.navigation.navigate("Login"));
	}

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<TextInput
					value={email}
					onChangeText={username => setEmail(username)}
					placeholder={"email"}
					style={styles.input}
				/>
				<TextInput
					value={password}
					onChangeText={password => setPassword(password)}
					placeholder={"Password"}
					secureTextEntry={true}
					style={styles.input}
				/>
			</View>
			<View style={styles.authButton}>
				<Button title='Login' onPress={() => props.navigation.navigate("Login")} />
				<Button title='Sign Up' onPress={() => createUser()} />
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
	input: {
		width: 200,
		height: 44,
		padding: 10,
		borderWidth: 1,
		borderColor: "black",
		marginBottom: 10,
		marginTop: 10
	},
	authButton: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 120,
		height: 44
	}
});

export default Registration;
