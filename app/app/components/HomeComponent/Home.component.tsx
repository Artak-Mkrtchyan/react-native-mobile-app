import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import * as firebase from 'firebase/app';
import 'firebase/storage';

import {IProps} from './types';

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
    cameraRoll: true,
    waitUntilSaved: true,
  },
};

const Home: React.FC<IProps> = props => {
  const [source, setSource] = useState({});

  function pickImage() {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('else');
        const source = {uri: response.uri};
        // You can also display the image using data:
        // const source = {uri: 'data:image/jpeg;base64,' + response.data};
        setSource(source);
        // uploadImage(response.uri);
        // const blob = uriToBlob(response.uri);
        // uploadToFirebase(blob);
      }
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {source && source.uri ? (
          <Image source={source} style={styles.image} />
        ) : (
          <Text>Select an Image!</Text>
        )}
        <View style={{height: 100}}>
          <Button title="Pick image" onPress={() => pickImage()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
  },
  image: {
    marginTop: 20,
    marginBottom: 20,
    width: 150,
    height: 150,
  },
});

export default Home;
