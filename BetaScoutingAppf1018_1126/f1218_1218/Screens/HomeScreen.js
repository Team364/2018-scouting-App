import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View, TouchableHighlight, Image, } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fe891f',
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
    color: 'black',
    marginBottom: 5,
    fontSize: 20
  },
});
class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Chat',
    header: null,
    headerStyle: { backgroundColor: 'blue', borderWidth: 0, borderBottomColor: 'white' },
    headerTitleStyle: { color: 'green' },
    headerTintColor: {color: 'green'}
  }

  render(){
      {/*This was changed from LoginScreen to QuestionScreen for testing because the json files are currently under matninence*/}
    return (
      <View style={styles.container}>
      <TouchableHighlight

      onPress={() => this.props.navigation.navigate('LoginScreen')}
      style={{borderRadius: 10, borderWidth: 2.5, borderColor: '#fe891f'}}>
      <Image
        source={require('../Images/fusion-scouting-app-logo.jpg')}
        style={{width: 300, height: 300}}
      />
          </TouchableHighlight>


    </View>
    );
  }
}
export default HomeScreen;

AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
