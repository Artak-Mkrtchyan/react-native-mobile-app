import React from "react";

import { FirebaseContext } from "../../firebase";
import { Home } from "./Home.component";
import { Props } from "screens/loginScreen/types";

export const HomeContainer: React.FC<Props> = (props) => {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => <Home firebase={firebase} navigation={props.navigation} />}
    </FirebaseContext.Consumer>
  );
};
