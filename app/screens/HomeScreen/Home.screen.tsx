import React from "react";
import { SafeAreaView } from "react-native";
import GlobalStyles from "../GlobalStyles";

import Home from "../../components/HomeComponent";
import { IProps } from "./types";

const HomeScreen: React.FC<IProps> = props => {
	return (
		<SafeAreaView style={GlobalStyles.AndroidSafeArea}>
			<Home navigation={props.navigation} />
		</SafeAreaView>
	);
};

export default HomeScreen;
