import React from "react";
import { SafeAreaView } from "react-native";
import GlobalStyles from "../GlobalStyles";

import Login from "../../components/LoginComponent";
import { IProps } from "./types";

const LoginScreen: React.FC<IProps> = props => {
	return (
		<SafeAreaView style={GlobalStyles.AndroidSafeArea}>
			<Login navigation={props.navigation} />
		</SafeAreaView>
	);
};

export default LoginScreen;
