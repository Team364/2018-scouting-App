/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, Button, Navigator, TouchableHighlight, TextInput, Switch } from 'react-native';




export default class Component2 extends Component {
  constructor(){
    super();
    this.state = {
      textValue: 'Hello',
    }
  }

  onChangeText(value){
    this.setState ({
        textValue: value
    });
  }

  submitPress(value){

    console.log()
  }



  render() {
    return (
      <View>
        <TextInput
        style={styles.inputStyle}
        placeholder='Enter First Name'
        onChangeText={(value) => this.onChangeText(value)}
        value={this.state.textValue}
        onSubmitEditing={() => console.log(this.state.textValue)}
        />
        <TextInput
        style={styles.inputStyle2}
        placeholder='Enter Last Name'
        />
        <TextInput
        placeholder='Enter Team Number'
        />

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
  inputStyle: {
    backgroundColor: 'white',
    height: 35,
  },

  inputStyle: {
    backgroundColor: 'white',
    height: 35,
    width: 350,
  }
});

AppRegistry.registerComponent('Component2', () => Component2);
