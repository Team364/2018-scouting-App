import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TextInput, Alert, ActivityIndicator, Platform, AsyncStorage} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';

 class RegisterScreen extends Component{
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
    static defaultProps = {
      message: 'Hey there'
    }

    static navigationOptions = {
      header: null,
  };
  UserRegister = () =>{
    this.setState({ loading: true, disabled: true }, () =>{

   const { username }  = this.state ;



  fetch('http://www.quotin.co/React/user-register.php', {
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

  // Showing response message coming from server after inserting records.
          Alert.alert(responseJson);
          this.setState({ loading: false, disabled: false });
        }).catch((error) => {
          console.error(error);
          this.setState({ loading: false, disabled: false });
        });


    });
  }
    render(){
      return(
        <View style={{backgroundColor: '#fff',  flexDirection:'column',  flex: 1, justifyContent:'center', alignItems: 'center'}}>
          <View style={{ height: 200, justifyContent:'space-between',}}>
          <Text style={{color: 'black', textAlign: 'center', }}>
            This is the RegisterScreen!
          </Text>
          <TextInput
          onChangeText={username => this.setState({username})}
          placeholder="Enter Username"
          underlineColorAndroid='transparent'
          >

          </TextInput>
          <TouchableHighlight
          style={{backgroundColor: '#333', height: 50, width: 100, justifyContent:'center', alignItems: 'center', marginLeft: 25}}
          onPress={this.UserRegister}
          disabled = { this.state.disabled } activeOpacity = { 0.8 }
          >
            <Text style={{color: 'white', textAlign: 'center',}}>Register</Text>
          </TouchableHighlight>

          <TouchableHighlight
          style={{backgroundColor: '#333', height: 50, width: 100, justifyContent:'center', alignItems: 'center', marginLeft: 25}}
          onPress={() => this.props.navigation.navigate('HomeScreen')}
          >
            <Text style={{color: 'white', textAlign: 'center',}}>Back</Text>
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
export default RegisterScreen;
AppRegistry.registerComponent('RegisterScreen', () => RegisterScreen);
