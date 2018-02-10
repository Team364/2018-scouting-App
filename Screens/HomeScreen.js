import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkorange',
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
    return (
      <View style={styles.container}>
      <Image
        source={require('../fusion-scouting-app-logo.jpg')}
        style={{width: 300, height: 300}}
      />
        <Text
        style={styles.instructions}>
          Hello and Welcome!
        </Text>
        <Text style={{fontSize: 50, textAlign: 'center'}}> Are you returning?</Text>
        <View
        style={{
            height: 100,
            margin: 10,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('LoginScreen')}
          style={{borderRadius: 10, borderWidth: 2.5, borderColor: '#fff'}}>
          <Text style={{color: 'black', backgroundColor: 'white', fontSize: 20, padding: 5, textAlign: 'center', width: 100 }}>Yes</Text>
          </TouchableOpacity>


          <TouchableHighlight
          onPress={() => this.props.navigation.navigate('RegisterScreen')}>
          <Text style={{color: 'black', backgroundColor: 'white', fontSize: 20, padding: 5, textAlign: 'center',}}>No</Text>
          </TouchableHighlight>


          </View>


    </View>
    );
  }
}
export default HomeScreen;

AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
