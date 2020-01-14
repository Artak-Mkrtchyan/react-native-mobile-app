import React from "react";

import { FirebaseContext } from "../../firebase";
import { Login } from "./Login.component";
import { Props } from "screens/loginScreen/types";

export const LoginContainer: React.FC<Props> = (props) => {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => <Login firebase={firebase} navigation={props.navigation} />}
    </FirebaseContext.Consumer>
  );
};
