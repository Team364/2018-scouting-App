import React, {Component} from 'react';
import {AppRegistry,
        Text,
        View,
        Image,
        StyleSheet,
        TouchableHighlight,
        TextInput,
        Alert,
        ActivityIndicator,
        Platform,
        AsyncStorage,
        Keyboard
      } from 'react-native';
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

         // If server response message same as Data Matched
        if(responseJson === 'User Registered Successfully')
         {
              Keyboard.dismiss();
              this.setState({ loading: true, disabled: false });
              Alert.alert(responseJson);
             this.props.navigation.navigate('LoginScreen');

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
         <Text style={{color: '#fff', fontSize: 40, fontWeight: 'bold', position:'relative', top: -100}}>Register</Text>
           <View style={styles.SecondaryContainer}>
           <View style={styles.row}>
           <TextInput
           style={styles.input}
           onChangeText={username => this.setState({username})}
           placeholder="Submit Username"
           underlineColorAndroid='transparent'
           >
           </TextInput>
           <TouchableHighlight
           onPress={this.UserRegister}
 		disabled = { this.state.disabled }
    activeOpacity = { 0.8 }
           underlayColor='#fe891f'>
           <Image
             source={{uri: 'http://www.fusion364.com/img/NextButton.png'}}
             style={styles.arrow}
           />
               </TouchableHighlight>
               </View>




           </View>
           <TouchableHighlight
           onPress={() => this.props.navigation.navigate('LoginScreen')}
           underlayColor='#fe891f'>
           <View style ={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
           <Text  style={styles.newUser}>Already Registered?</Text></View>
           </TouchableHighlight>
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
 width: 150,
 height: 50,
 fontSize: 13,
 zIndex: -1,
 position:'relative',
 justifyContent: 'center',
 left: -25,
 textAlign:'center',
 lineHeight: 36,
 backgroundColor:'white',
borderRadius: 100,
borderWidth: 2
},
arrow:{
  height: 30,
  width: 30,
  top: 10,
  left: -1,
  zIndex: 1,
  position:'relative'
},
 newUser:{
    fontSize: 22,
    color: 'white',
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    left: 0,
    width: 200,
    textAlign:'center',
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 100,
    backgroundColor:'#1F3A93',


 },

 });
export default RegisterScreen;
AppRegistry.registerComponent('RegisterScreen', () => RegisterScreen);
