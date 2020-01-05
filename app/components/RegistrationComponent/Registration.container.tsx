import React from 'react';

import {FirebaseContext, withFirebase} from '../../firebase';
import Registration from './Registration.component';
import {IFirebase} from './types';
import {IProps} from '../../screens/RegistrationScreen/types';

const RegistrationContainer: React.FC<IProps> = props => {
  const RegisterWithFirebaseProps = withFirebase(Registration);
  console.log(RegisterWithFirebaseProps);
  return (
    <FirebaseContext.Consumer>
      {(firebase: any) => (
        <RegisterWithFirebaseProps
          // firebase={firebase}
          navigation={props.navigation}
        />
      )}
    </FirebaseContext.Consumer>
  );
};

export default RegistrationContainer;
