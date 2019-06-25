/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, Button, Navigator, TouchableHighlight, AsyncStorage, ViewList, ActivityIndicator,ListView, FlatList, TouchableOpacity, Image, TextInput, ScrollView, Alert, YellowBox} from 'react-native';
import SearchableFlatlist from "searchable-flatlist";
export default class OtherProfileScreen extends Component {
  LearnMore1 (){
    console.log ('New User pressed!');
}
LearnMore2 (){
  console.log ('Return user Pressed!');
}


static navigationOptions = ({ navigation }) => ({
   title: `${navigation.state.params.username}'s Scouting History`,
    headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
       headerStyle:{
           backgroundColor:'white',
       },
   });




constructor(props)
{

  super(props);

  this.state = {
  isLoading: true,
  username: '',
  text:'',
  team_num:'',
  searchTerm: "",
};
this.arrayholder = [] ;

AsyncStorage.getItem("username").then((value) => {
  this.setState({"username": value})
});
}
saveData(value){
    AsyncStorage.setItem("username", value);
    this.setState({"username": value});
}
SearchFilterFunction(text){

    const newData = this.arrayholder.filter(function(item){
        const itemData = item.team_num.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
    })
    this.setState({
        dataSource: this.state.dataSource,
        text: text,
        username: this.state.username
    })
}

componentDidUpdate() {


      return fetch(`http://www.quotin.co/React/user-scout-history.php?username=${ this.state.username }` , {
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
            function() {
              // In this block you can do something with new state.
              this.arrayholder = responseJson ;
            });
        })

        .catch((error) => {
          console.log(error);
          this.setState({
            isLoading: false,
            dataSource:[{"id":"161","username":"Bob","team_num":"N\/A","match_num":"N\/A","regional":"N\/A","type_bot":"","flip_tip":"N\/A","shoot_cube":"N\/A","cube_drop":"N\/A","scale":"N\/A","switches":"N\/A","cycle_time":"N\/A","climb_time":"N\/A","buddy_bar":"N\/A","auto":"N\/A","cross_line_auto":"N\/A","switch_auto":"N\/A","vault_auto":"N\/A","vault":"N\/A","team_power":"N\/A","cube_num":"N\/A","team_hang":"N\/A","team_focus":"N\/A","team_penalties":"N\/A","scale_penalty":"","dec_auto":"N\/A","dec_endgame":"N\/A","dec_strat":"N\/A"}],
          });

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

         <View style={{flex: 1, width: '100%'}}>
         <TextInput
            style={styles.TextInputStyleClass}
            onChangeText={searchTerm => this.setState({ searchTerm})}
            value={this.state.searchTerm}
            underlineColorAndroid='transparent'
            placeholder="Search Team Number"
             />
             <SearchableFlatlist
               searchProperty={"team_num"}
               searchTerm={this.state.searchTerm}
               data={this.state.dataSource}
               snapToAlignment={'center'}
               renderItem={({ item }) => <View style={styles.MainContainer}>

               <View style={{width: '100%', height: 550, flexWrap: 'wrap', backgroundColor: '#fe891f'}}>
                        <Text style={styles.FlatListItemStyle}  > Team: #{item.team_num} </Text>

                        <Text style={styles.itemListStyle}>Match Number: {item.match_num}</Text>

                        <Text style={styles.itemListStyle}>Regional: {item.regional}</Text>

                        <Text style={styles.itemListStyle}>Scale: {item.scale}</Text>

                        <Text style={styles.itemListStyle}>Switch: {item.switches}</Text>

                        <Text style={styles.itemListStyle}>Cycle Time: {item.cycle_time}</Text>

                        <Text style={styles.itemListStyle}>Climb Time: {item.climb_time}</Text>

                        <Text style={styles.itemListStyle}>Auto: {item.auto}</Text>

                        <Text style={styles.itemListStyle}>Cross Line: {item.cross_line_auto}</Text>

                        <Text style={styles.itemListStyle}>Switch Auto: {item.switch_auto}</Text>

                        <Text style={styles.itemListStyle}>Vault Auto: {item.vault_auto}</Text>

                        <Text style={styles.itemListStyle}>Vault: {item.vault}</Text>

                        <Text style={styles.itemListStyle}>Team Power: {item.team_power}</Text>

                        <Text style={styles.itemListStyle}>Cube Number: {item.cube_num}</Text>

                        <Text style={styles.itemListStyle}>Team Hang: {item.team_hang}</Text>

                        <Text style={styles.itemListStyle}>Team Focus: {item.team_focus}</Text>

                        <Text style={styles.itemListStyle}>Team Penalites: {item.team_penalties}</Text>

              </View>




               </View>}
               keyExtractor={item => item.id}
             />
        {/* <FlatList

           data={ this.state.dataSource }

           ItemSeparatorComponent = {this.FlatListItemSeparator}

           renderItem={({item}) => <View style={styles.MainContainer}>
           <Text style={styles.FlatListItemStyle}  > {item.username} </Text>

           <Text>Team Number: {item.team_num}</Text>

           <Text>Regional: {item.regional}</Text>

           <Text>Scale: {item.scale}</Text>

           <Text>Switch: {item.switches}</Text>

           <Text>Cycle Time: {item.cycle_time}</Text>

           <Text>Climb Time: {item.climb_time}</Text>

           <Text>Auto: {item.auto}</Text>

           <Text>Cross Line: {item.cross_line_auto}</Text>

           <Text>Switch Auto: {item.switch_auto}</Text>

           <Text>Vault Auto: {item.vault_auto}</Text>

           <Text>Vault: {item.vault}</Text>

           <Text>Team Power: {item.team_power}</Text>

           <Text>Cube Number: {item.cube_num}</Text>

           <Text>Team Hang: {item.team_hang}</Text>

           <Text>Team Focus: {item.team_focus}</Text>

           <Text>Team Penalites: {item.team_penalties}</Text>



           </View>}

           keyExtractor={(item, index) => index}

           />*/}

            <Text style={{fontSize: 20, textAlign:'center'}}>Stats, Logs, Numbers, and oh my!</Text>

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
  TextInputStyleClass: {

  textAlign: 'center',
  width: '100%',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  borderColor: '#FF5722',
  borderRadius: 5 ,

  },
  MainContainer: {
    flex:1,
    marginBottom: 30,
    bottom: 30,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',


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
    fontSize: 25,
    fontWeight: 'bold',
    height: 50,
    color: '#fff',
    margin: 10,
    position: 'relative',
    textAlign:'center',
  },

  itemListStyle: {
    color:'#fff',
    fontSize: 20,

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
