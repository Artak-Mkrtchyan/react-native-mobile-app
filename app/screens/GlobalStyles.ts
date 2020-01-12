import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
	AndroidSafeArea: {
		flex: 1,
		backgroundColor: "#ecf0f1",
		paddingTop: Platform.OS === "android" ? 25 : 0
	}
});
