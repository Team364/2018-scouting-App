/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
} from 'react-native';


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <Image
       style={{width: 300, height: 300}}
       source={{uri: 'https://lh3.googleusercontent.com/-E0B0QO2w0ag/WnDcoSoI3xI/AAAAAAAAFq4/LT4t1sJ1ESsjn_MpLOnaw-TIUbnAvksiQCJoC/w530-h530-n-rw/fusion%2Bscouting%2Bapp%2Blogo.jpg'}}
     />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF891F',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
