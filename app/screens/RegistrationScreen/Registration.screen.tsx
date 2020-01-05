import React from 'react';
import {SafeAreaView} from 'react-native';

import Registration from '../../components/RegistrationComponent';
import {IProps} from './types';

const RegistrationScreen: React.FC<IProps> = props => {
  return (
    <SafeAreaView>
      <Registration navigation={props.navigation} />
    </SafeAreaView>
  );
};

export default RegistrationScreen;
