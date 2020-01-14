import { StyleSheet, Platform } from "react-native";

export const globalStyles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
