/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, Button, Navigator, TouchableHighlight, AsyncStorage, ViewList, ActivityIndicator,ListView, FlatList, TouchableOpacity, Image} from 'react-native';
export default class AdminScreen extends Component {
  LearnMore1 (){
    console.log ('New User pressed!');
}
LearnMore2 (){
  console.log ('Return user Pressed!');
}
static navigationOptions = {
  title: null ,
  header: null,
}




constructor(props)
{

  super(props);

  this.state = {
  isLoading: true,
  username: ''
};

AsyncStorage.getItem("username").then((value) => {
  this.setState({"username": value})
});
}
saveData(value){
    AsyncStorage.setItem("username", value);
    this.setState({"username": value});
}

componentDidMount() {


      return fetch(`http://www.quotin.co/React/user-info.php?username=admin` , {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       }

      })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson,
            },
          );
        })
        .catch((error) => {
          console.error(error);
        });
    }

    logout = () =>{
      AsyncStorage.clear()
      this.props.navigation.navigate('HomeScreen');

    }
    question = () =>{
      this.props.navigation.navigate('AdminQuickList');

    }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }


      return(

         <View style = { styles.MainContainer }>

        <TouchableOpacity activeOpacity={0.5} onPress={this.logout} style={styles.backButton} >

          <Image source={{uri: 'http://www.fusion364.com/img/BackButton.png'}}

                 style={styles.FloatingButtonStyle} />

        </TouchableOpacity>
        <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', position:'relative', top: -50}}>Hello, Admin!</Text>
        <TouchableOpacity onPress={ () => this.props.navigation.navigate('AdminUserListScreen')}><Text style={styles.sTextItem}>User Scouting History</Text></TouchableOpacity>

        <TouchableOpacity onPress={ () => this.props.navigation.navigate('AdminTeamListScreen')}><Text style={styles.sTextItem}>Team Scouting History</Text></TouchableOpacity>

        <TouchableOpacity onPress={ () => this.props.navigation.navigate('AdminQuickHistory')}><Text style={styles.sTextItem}>Admin Scouting History</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={this.question} style={styles.TouchableOpacityStyle} >

         <Image source={{uri: 'http://www.fusion364.com/img/PlusButton.png'}}

                style={styles.plusButtonStyle} />

       </TouchableOpacity>
         </View>

       );
     }
   }



   FlatListItemSeparator = () => {
       return (
         <View
           style={{
             height: 1,
             width: "100%",
             backgroundColor: "#607D8B",
           }}
         />
       );
     }
const styles = StyleSheet.create({
  MainContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fe891f'
  },
    TouchableOpacityStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#fe891f',
        margin: 10,
        width: 100,
        marginLeft: 60

  },
  FlatListItemStyle: {
    padding: 10,
    fontSize: 20,
    height: 44,
    backgroundColor: '#fe891f',
    margin: 10,
    marginLeft: 40,
    position: 'relative',
    textAlign:'center'
  },

  backButton:{
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      left: 30,
      top: 30,
    },

    FloatingButtonStyle: {

      resizeMode: 'contain',
      width: 50,
      height: 50,
    },
    sTextItem: {

     width: "100%",
     justifyContent: 'center',
     textAlign: "center",
     textAlignVertical: "center",
     fontSize: 18,
     color: '#fff',
     fontWeight: 'bold',
     padding: 10,
     borderRadius: 100,
     backgroundColor:'#1F3A93',
     marginBottom: 20,
     position:'relative',
     margin: 0,
     alignItems: 'center'
   },

    plusButtonStyle: {

      resizeMode: 'contain',
      width: 120,
      height: 120,
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
    color: 'white',
    marginBottom: 5,
    fontSize: 32,
    fontWeight: 'bold',
    padding: 3,
  },
  button: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',

 }
});
