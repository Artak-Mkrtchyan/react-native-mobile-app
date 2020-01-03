import React from 'react';
import {SafeAreaView} from 'react-native';

import Login from '../../components/LoginComponent';
import {IProps} from './types';

const LoginScreen: React.FC<IProps> = props => {
  return (
    <SafeAreaView>
      <Login navigation={props.navigation} />
    </SafeAreaView>
  );
};

export default LoginScreen;
