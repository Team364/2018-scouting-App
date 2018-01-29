/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, Button, Navigator, TouchableHighlight } from 'react-native';




export default class Component1 extends Component {

  constructor(props) {
  super(props);
  this.state = {
    name: 'Andrew',
    Age: 17,
    message: this.props.message
  }
}
static defaultProps(){
  message: 'Hey '
}

  render() {
    return (
      <View>
        <Text>{this.state.name}, {this.state.message}</Text>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    height: 100,
    color: 'orange'
  },
  instructions: {
    textAlign: 'center',
    color: 'orange',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Component1', () => Component1);
