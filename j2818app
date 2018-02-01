/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, Button, Navigator, TouchableHighlight } from 'react-native';
import Component1 from './app/Components/Component1/Component1';
import Component2 from './app/Components/Component2/Component2';

export default class App extends Component {
  LearnMore1 (){
    console.log ('New User pressed!');
}
LearnMore2 (){
  console.log ('Return user Pressed!');
}


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Scouting364
        </Text>
        <Text style={styles.instructions}>
          Are you a new user?
        </Text>
        <Text></Text>
        <View
        style={{
            height: 75,
            margin: 10,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
        <Button
          style={{flex: 1,}}
          onPress={this.LearnMore1}
          title="New User"
          color="black"
          accessibilityLabel="Learn More about this"
        />
          <Button
            style={{flex: 1,}}
            onPress={this.LearnMore2}
            title="Returning User"
            color="black"
            accessibilityLabel="Learn More about this"
          />
          <Navigator
            iniitalRoute={{id: 'component2'}}
          />



      </View>

      <View>
        <Component2 />
      </View>
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

AppRegistry.registerComponent('j2718', () => j2718);
