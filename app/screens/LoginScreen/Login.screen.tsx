import React from "react";
import { SafeAreaView } from "react-native";
import { globalStyles } from "../GlobalStyles";

import { LoginContainer } from "components/LoginComponent";
import { Props } from "./types";

export const LoginScreen: React.FC<Props> = (props) => {
  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea}>
      <LoginContainer navigation={props.navigation} />
    </SafeAreaView>
  );
};
