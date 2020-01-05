import React from 'react';

import {FirebaseContext} from '../../firebase';
import Home from './Home.component';
import {IFirebase} from './types';
import {IProps} from '../../screens/loginScreen/types';

// import firebase from 'react-native-firebase';
// const {app} = firebase.storage();

const HomeContainer: React.FC<IProps> = props => {
  // console.log(app);
  return (
    <FirebaseContext.Consumer>
      {(firebase: any) => (
        <Home firebase={firebase} navigation={props.navigation} />
      )}
    </FirebaseContext.Consumer>
  );
};

export default HomeContainer;
