import React from "react";
import { SafeAreaView } from "react-native";
import GlobalStyles from "../GlobalStyles";

import Registration from "../../components/RegistrationComponent";
import { IProps } from "./types";

const RegistrationScreen: React.FC<IProps> = props => {
	return (
		<SafeAreaView style={GlobalStyles.AndroidSafeArea}>
			<Registration navigation={props.navigation} />
		</SafeAreaView>
	);
};

export default RegistrationScreen;
