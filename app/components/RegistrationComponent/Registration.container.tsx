import React from "react";

import { FirebaseContext, withFirebase } from "../../firebase";
import { Registration } from "./Registration.component";
import { Props } from "screens/RegistrationScreen/types";

export const RegistrationContainer: React.FC<Props> = (props) => {
  const RegisterWithFirebaseProps = withFirebase(Registration);
  return (
    <FirebaseContext.Consumer>
      {(firebase) => (
        <RegisterWithFirebaseProps firebase={firebase} navigation={props.navigation} />
      )}
    </FirebaseContext.Consumer>
  );
};
