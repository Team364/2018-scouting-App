/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, Button, Navigator, TouchableHighlight, AsyncStorage, ViewList, ActivityIndicator,ListView, FlatList, TouchableOpacity, Image} from 'react-native';
export default class ProfileScreen extends Component {
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
componentDidUpdate() {


      return fetch(`http://www.quotin.co/React/user-info.php?username=${this.state.username}` , {
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
      this.props.navigation.navigate('TeamNumScreen');

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




            <Text> </Text>

            <Button
            style = {{ justifyContent: 'center', alignItems: 'center' }}
            title="Click here to Logout" onPress={ this.logout } />
            <FlatList

              data={ this.state.dataSource }

              ItemSeparatorComponent = {this.FlatListItemSeparator}

              horizontal= {true}
              renderItem={({item}) => <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}><Text style={styles.FlatListItemStyle}  > {item.username} {item.id} </Text></View>}

              keyExtractor={(item, index) => index}

         />

         <Text>Hello,{this.state.username}</Text>
         <TouchableOpacity activeOpacity={0.5} onPress={this.question} style={styles.TouchableOpacityStyle} >

          <Image source={{uri : 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png'}}

                 style={styles.FloatingButtonStyle} />

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
  },
  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcfbe3',
        margin: 10,
        width: 100,
        marginLeft: 60

  },
  FlatListItemStyle: {
    padding: 10,
    fontSize: 20,
    height: 44,
    backgroundColor: 'gold',
    margin: 10,
    marginLeft: 40,
    position: 'relative',
    textAlign:'center'
  },

    TouchableOpacityStyle:{

      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
    },

    FloatingButtonStyle: {

      resizeMode: 'contain',
      width: 50,
      height: 50,
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
  button: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',

 }
});
