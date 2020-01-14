import React from "react";
import { SafeAreaView } from "react-native";
import { globalStyles } from "../GlobalStyles";

import { HomeContainer } from "components/HomeComponent";
import { Props } from "./types";

export const HomeScreen: React.FC<Props> = (props) => {
  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea}>
      <HomeContainer navigation={props.navigation} />
    </SafeAreaView>
  );
};
