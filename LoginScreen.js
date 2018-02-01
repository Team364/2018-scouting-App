import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Chat',
    header: null,
    headerStyle: { backgroundColor: 'blue', borderWidth: 0, borderBottomColor: 'white' },
    headerTitleStyle: { color: 'green' },
    headerTintColor: {color: 'green'}
  }

  render(){
    return (
      <View>
          <Text>This is the login screen</Text>
          <Button
          onPress={() => this.props.navigation.navigate('HomeScreen')}
          title="Go to the home screen"
          />
      </View>
    );
  }
}
export default LoginScreen;
