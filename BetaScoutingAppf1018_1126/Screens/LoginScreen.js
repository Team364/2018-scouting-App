import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TextInput, Alert, AsyncStorage, ActivityIndicator, Platform} from 'react-native';
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
        <View style={{backgroundColor: '#fff',  flexDirection:'column',  flex: 1, justifyContent:'center', alignItems: 'center'}}>
          <View style={{ height: 300, justifyContent:'space-between',}}>
          <Text style={{color: 'black', textAlign: 'center', }}>
            This is the LoginScreen!
          </Text>
          <TextInput
          onChangeText={username => this.setState({username})}
          placeholder="Enter Username"
          underlineColorAndroid='transparent'
          >

          </TextInput>
          <TouchableHighlight
          style={{backgroundColor: '#333', height: 50, width: 100, justifyContent:'center', alignItems: 'center', marginLeft: 25}}
          onPress={this.UserLogin}
          >
            <Text style={{color: 'white', textAlign: 'center',}}>Login</Text>
          </TouchableHighlight>

          <TouchableHighlight
          style={{backgroundColor: '#333', height: 50, width: 100, justifyContent:'center', alignItems: 'center', marginLeft: 25}}
          onPress={() => this.props.navigation.navigate('HomeScreen')}
          >
            <Text style={{color: 'white', textAlign: 'center',}}>Back</Text>
          </TouchableHighlight>

          <TouchableHighlight
          style={{backgroundColor: '#333', height: 50, width: 100, justifyContent:'center', alignItems: 'center', marginLeft: 25}}
          onPress={() => this.props.navigation.navigate('UserListScreen')}
          >

            <Text style={{color: 'white', textAlign: 'center',}}>All Lists</Text>
          </TouchableHighlight>
          <TouchableHighlight
          style={{backgroundColor: '#333', height: 50, width: 100, justifyContent:'center', alignItems: 'center', marginLeft: 25}}
          onPress={() => this.props.navigation.navigate('FeedScreen')}
          >

            <Text style={{color: 'white', textAlign: 'center',}}>All Feed</Text>
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


const newTextStyle = {
  fontSize: 30,
  color: 'white',
  textAlign: 'center',
}
export default LoginScreen;
AppRegistry.registerComponent('LoginScreen', () => LoginScreen);
