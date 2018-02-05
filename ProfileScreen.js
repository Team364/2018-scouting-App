/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, Button, Navigator, TouchableHighlight, AsyncStorage, ViewList, ActivityIndicator,ListView} from 'react-native';
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
  isLoading: true
}
}

componentDidMount() {

     return fetch('http://www.quotin.co/React/user-list.php')
       .then((response) => response.json())
       .then((responseJson) => {
         let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
         this.setState({
           isLoading: false,
           dataSource: ds.cloneWithRows(responseJson),
         }, function() {
           // In this block you can do something with new state.
         });
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
            <ListView

              dataSource={this.state.dataSource}

              renderSeparator= {this.ListViewItemSeparator}

              renderRow={ (rowData) => <Text style={styles.rowViewContainer}>

                        {rowData.username}

                        </Text> }

            />


         </View>
       );
     }
   }



ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
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
