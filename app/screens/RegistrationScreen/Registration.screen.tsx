import React from "react";
import { SafeAreaView } from "react-native";
import { globalStyles } from "../GlobalStyles";

import { RegistrationContainer } from "components/RegistrationComponent";
import { Props } from "./types";

export const RegistrationScreen: React.FC<Props> = (props) => {
  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea}>
      <RegistrationContainer navigation={props.navigation} />
    </SafeAreaView>
  );
};
