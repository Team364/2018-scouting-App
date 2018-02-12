import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TextInput, Alert, AsyncStorage, ActivityIndicator, Platform, Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';

 class LoginScreen extends Component{
   constructor(props){
     super(props);
     this.state = {
       username: '',
       loading: false,
       disabled: false
     }
   }
   static navigationOptions = {
     title: null,
     header: null,
   }
   componentDidMount(){
   this._loadInitialState().done();
   }

   _loadInitialState = async () => {
   var value = await AsyncStorage.getItem('username');
   if(value !== null){
     this.props.navigation.navigate('ProfileScreen');
   }
 }
UserLogin = () =>{
this.setState({ loading: true, disabled: true }, () =>{
const { username }  = this.state ;


fetch('http://www.quotin.co/React/user-login.php', {
 method: 'POST',
 headers: {
   'Accept': 'application/json',
   'Content-Type': 'application/json',
 },
 body: JSON.stringify({

   username: username,

 })

}).then((response) => response.json())
     .then((responseJson) => {

       // If server response message same as Data Matched
      if(responseJson === 'Data Matched')
       {
            AsyncStorage.setItem('username', username);
           //Then open Profile activity and send user email to profile activity.
           this.props.navigation.navigate('ProfileScreen', { username: username });

       }
       else{

         Alert.alert(responseJson);
         this.setState({ loading: false, disabled: false });
       }

     }).catch((error) => {
       console.log(error);
       this.setState({ loading: false, disabled: false });
     });
   });
 }
    render(){
      return(
        <View style={styles.MainContainer}>
        <View style={styles.block}></View>
        <Text style={{color: '#fe891f'}}>...</Text>
          <View style={styles.SecondaryContainer}>
          <View style={styles.row}>
          <TextInput
          style={styles.input}
          onChangeText={username => this.setState({username})}
          placeholder="Enter Username"
          underlineColorAndroid='transparent'
          >
          </TextInput>
          <TouchableHighlight
          onPress={this.UserLogin}
          underlayColor='#fe891f'>
          <Image
            source={require('../Images/NextButton.png')}
            style={styles.arrow}
          />
              </TouchableHighlight>
              </View>

          <TouchableHighlight
          onPress={() => this.props.navigation.navigate('RegisterScreen')}
          underlayColor='#fe891f'>
          <View style ={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Text  style={styles.newUser}>New User?</Text></View>
          </TouchableHighlight>




          </View>
          {
               (this.state.loading)
               ?
                   (<ActivityIndicator size = "large" />)
               :
                   null
           }
        </View>
      );
    }
}


const styles = StyleSheet.create({
  MainContainer:{
    backgroundColor: '#fe891f',
    flex: 1,
    alignItems: 'center'
  },

  block:{
    backgroundColor: '#fe891f',
    height: 250,
  },
  SecondaryContainer:{
    width: 100,
    height: 100,
    justifyContent: 'center',
  },
  row:{
    flexDirection: 'row',
  },
  newTextStyle:{
  fontSize: 30,
  color: 'white',
  textAlign: 'center',
},
 input:{
 width: 120,
 height: 50,

},
arrow:{
  height: 30,
  width: 30,
  top: 10,
},
newUser:{
   fontSize: 12,
   color: 'blue',
   alignItems: 'center',
   left: 8,
   flexDirection: 'column'
},

});
export default LoginScreen;
AppRegistry.registerComponent('LoginScreen', () => LoginScreen);
