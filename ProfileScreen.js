/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, Button, Navigator, TouchableHighlight, AsyncStorage, ViewList, ActivityIndicator,ListView, FlatList} from 'react-native';
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

logout = () =>{
  AsyncStorage.clear()
}


GetItem (username) {

  Alert.alert(username);

}
constructor(props)
{

  super(props);

  this.state = {
  isLoading: true,
  username: ''
}
}

componentDidMount() {
  AsyncStorage.getItem('username').then((res) => console.log(res))
      return fetch('http://www.quotin.co/React/user-list.php?username=hey' , {
       method: 'GET',
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


              renderItem={({item}) => <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}><Text style={styles.FlatListItemStyle}  > {item.username} {item.id} </Text></View>}

              keyExtractor={(item, index) => index}

         />
         <Text>{this.state.username}</Text>
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
  Maincontainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
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
    fontSize: 18,
    height: 44,
    backgroundColor: 'gold',
    margin: 10,
    marginLeft: 30,
    textAlign:'center'
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
