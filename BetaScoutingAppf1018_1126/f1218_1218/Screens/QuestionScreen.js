/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Navigator,
  TouchableHighlight,
  AsyncStorage,
  ViewList,
  ActivityIndicator,
  ListView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
  Picker,
  ScrollView,
  Image,
} from 'react-native';

export default class QuestionScreen extends Component {
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




constructor(props) {

   super(props)

   this.state = {
     username : '',
     team_num : '',
     scale : 'N/A',
     switches : 'N/A',
     cycle_time : 'N/A',
     climb_time : 'N/A',
     auto : 'N/A',
     cross_line_auto : 'N/A',
     switch_auto : 'N/A',
     vault_auto : 'N/A',
     vault : 'N/A',
     team_power : 'N/A',
     cube_num : 'N/A',
     team_hang : 'N/A',
     team_focus : 'N/A',
     team_penalties : 'N/A',
     dec_auto : 'N/A',
     dec_endgame : 'N/A',
     dec_strat : 'N/A'

   }
   AsyncStorage.getItem("username").then((value) => {
     this.setState({"username": value})
   });
   AsyncStorage.getItem("team_num").then((team) => {
     this.setState({"team_num": team})
   });


   }

   saveData(value){
       AsyncStorage.setItem("username", value);
       this.setState({"username": value});
   }

   saveData(team){
       AsyncStorage.setItem("team_num", team);
       this.setState({"team_num": team});
   }



InsertRecords = () =>{

     fetch('http://www.quotin.co/React/user-input.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       username : this.state.username,
       team_num : this.state.team_num,
       scale : this.state.scale,
       switches : this.state.switches,
       cycle_time : this.state.cycle_time,
       climb_time : this.state.climb_time,
       auto : this.state.auto,
       cross_line_auto : this.state.cross_line_auto,
       switch_auto : this.state.switch_auto,
       vault_auto : this.state.vault_auto,
       vault : this.state.vault,
       team_power : this.state.team_power,
       cube_num : this.state.cube_num,
       team_hang : this.state.team_hang,
       team_focus : this.state.team_focus,
       team_penalties : this.state.team_penalties,
       dec_auto : this.state.dec_auto,
       dec_endgame : this.state.dec_endgame,
       dec_strat : this.state.dec_strat

     })

     }).then((response) => response.json())
         .then((responseJson) => {

           // Showing response message coming from server after inserting records.
           Alert.alert(responseJson);
          this.props.navigation.navigate('ProfileScreen');

         }).catch((error) => {
           console.error(error);
         });

}


  render() {


;
      return(

        <View style={styles.MainContainer}>

        <ScrollView>
            <Text style={styles.headertext}> Scouting </Text>
{/*Display at the top of the screen(Header)*/}
            <Text style={styles.subHeadertext}>Team #{this.state.team_num}</Text>
<View style={styles.questionContainer}>
{/*Question 1: Scale*/}
<TouchableHighlight>
        <Text style={styles.questiontext}>Can {this.state.team_num}  score on the scale consistently?</Text>
        </TouchableHighlight>
  <Picker
        selectedValue={this.state.scale}
          onValueChange={(itemValue, itemIndex) => this.setState({scale: itemValue})}>
                <Picker.Item label="N/A" value="N/A" />
                <Picker.Item label="Yes" value="Yes" />
                <Picker.Item label="No" value="No" />
</Picker>

{/*Question 2: Swtich*/}
          <Text style={styles.questiontext}>Can  {this.state.team_num} score on the switches consistently?</Text>
<Picker
        selectedValue={this.state.switches}
          onValueChange={(itemValue, itemIndex) => this.setState({switches: itemValue})}>
              <Picker.Item label="N/A" value="N/A" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
</Picker>

{/*Question 3: Cycle Time*/}
        <Text style={styles.questiontext}>Please give an estimate of {this.state.team_num}s  Cycle Time:</Text>
<Picker
        selectedValue={this.state.cycle_time}
          onValueChange={(itemValue, itemIndex) => this.setState({cycle_time: itemValue})}>
              <Picker.Item label="N/A" value="N/A" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
</Picker>

{/*Question 4: Climb Time*/}
        <Text style={styles.questiontext}>How long does  {this.state.team_num}  take to climb?</Text>
<Picker
        selectedValue={this.state.climb_time}
          onValueChange={(itemValue, itemIndex) => this.setState({climb_time: itemValue})}>
              <Picker.Item label="N/A" value="N/A" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
</Picker>

{/*Question 5: Autonomus*/}
        <Text style={styles.questiontext} >Does  {this.state.team_num} have an autonomous?</Text>
<Picker
        selectedValue={this.state.auto}
          onValueChange={(itemValue, itemIndex) => this.setState({auto: itemValue})}>
              <Picker.Item label="N/A" value="N/A" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
</Picker>

{/*Question 6: Cross the line*/}
        <Text style={styles.questiontext} >Does  {this.state.team_num} cross the line in autonomous?</Text>
<Picker
        selectedValue={this.state.cross_line_auto}
          onValueChange={(itemValue, itemIndex) => this.setState({cross_line_auto: itemValue})}>
              <Picker.Item label="N/A" value="N/A" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
</Picker>

{/*Question 7: Switch-Autonomous*/}
        <Text style={styles.questiontext} >Does  {this.state.team_num}  score on the switches in autonomous?</Text>
<Picker
        selectedValue={this.state.switch_auto}
          onValueChange={(itemValue, itemIndex) => this.setState({switch_auto: itemValue})}>
              <Picker.Item label="N/A" value="N/A" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
</Picker>

{/*Question 8: Vault-Autonomous*/}
        <Text style={styles.questiontext} >Does  {this.state.team_num}  score in the vault in autonomous?</Text>
<Picker
        selectedValue={this.state.vault_auto}
          onValueChange={(itemValue, itemIndex) => this.setState({vault_auto: itemValue})}>
              <Picker.Item label="N/A" value="N/A" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
</Picker>

{/*Question 9: Vault*/}
        <Text style={styles.questiontext} >Does  {this.state.team_num}  score in the vault?</Text>
<Picker
        selectedValue={this.state.vault}
          onValueChange={(itemValue, itemIndex) => this.setState({vault: itemValue})}>
              <Picker.Item label="N/A" value="N/A" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
</Picker>

{/*Question 10: Powerups*/}
        <Text style={styles.questiontext} >Which power-up does  {this.state.team_num}  enable during the match?</Text>
{/*This needs to have four alternate values of: Force, Boost, Leviate, and No Power Up*/}
<Picker
        selectedValue={this.state.team_power}
          onValueChange={(itemValue, itemIndex) => this.setState({team_power: itemValue})}>
              <Picker.Item label="N/A" value="N/A" />
              <Picker.Item label="Force" value="Force" />
              <Picker.Item label="Boost" value="Boost" />
                <Picker.Item label="Levitate" value="Leviate" />
                  <Picker.Item label="No Power Up" value="No Power Up" />
</Picker>

{/*Question 11: Cubes*/}
        <Text style={styles.questiontext} >How many cubes does  {this.state.team_num}  score per match?</Text>
<Picker
        selectedValue={this.state.cube_num}
          onValueChange={(itemValue, itemIndex) => this.setState({cube_num: itemValue})}>
              <Picker.Item label="N/A" value="N/A" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
</Picker>

{/*Question 12: Hang*/}
        <Text style={styles.questiontext} >Does  {this.state.team_num}  hang at the end of the match?</Text>
<Picker
        selectedValue={this.state.team_hang}
          onValueChange={(itemValue, itemIndex) => this.setState({team_hang: itemValue})}>
              <Picker.Item label="N/A" value="N/A" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
</Picker>

{/*Question 13: Foucs*/}
        <Text style={styles.questiontext} >What does  {this.state.team_num}  focus on during the match?</Text>
{/*This needs to have four alternate values of: Scale, Vault, Defense, and Switch*/}
<Picker
        selectedValue={this.state.team_focus}
          onValueChange={(itemValue, itemIndex) => this.setState({team_focus: itemValue})}>
              <Picker.Item label="N/A" value="N/A" />
              <Picker.Item label="Scale" value="Scale" />
              <Picker.Item label="Vault" value="Vault" />
                            <Picker.Item label="Defense" value="Defense" />
                                          <Picker.Item label="Switch" value="Switch" />
</Picker>

{/*Question 14: Penalties*/}
        <Text style={styles.questiontext} >What penalties does  {this.state.team_num}  commit?</Text>
{/*This needs to have six alternate values of: Foul, Red Card, Yellow Card, Disabled, Disqualified and No Penalty */}
<Picker
        selectedValue={this.state.team_penalties}
          onValueChange={(itemValue, itemIndex) => this.setState({team_penalties: itemValue})}>
              <Picker.Item label="N/A" value="N/A" />
              <Picker.Item label="Foul" value="Foul" />
              <Picker.Item label="Red Card" value="Red Card" />
              <Picker.Item label="Yellow Card" value="Yellow Card" />
              <Picker.Item label="Disabled" value="Disabled" />
              <Picker.Item label="Disqualified" value="Disqualified" />
              <Picker.Item label="No Penalty" value="No Penalty" />
</Picker>

{/*Question 15: Autonomous Description*/}
        <Text style={styles.questiontext} >Describe  {this.state.team_num}s  autonomous:</Text>
{/*This needs to be a text feild that can accomadate up to a paragraph*/}
<Picker
        selectedValue={this.state.dec_auto}
          onValueChange={(itemValue, itemIndex) => this.setState({dec_auto: itemValue})}>
              <Picker.Item label="N/A" value="N/A" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
</Picker>

{/*Question 16: Autonomous Description*/}
        <Text style={styles.questiontext}>Describe  {this.state.team_num}s  endgame:</Text>
{/*This needs to be a text feild that can accomadate up to a paragraph*/}
<Picker
        selectedValue={this.state.dec_endgame}
          onValueChange={(itemValue, itemIndex) => this.setState({dec_endgame: itemValue})}>
              <Picker.Item label="N/A" value="N/A" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
</Picker>

{/*Question 17: Strategy description*/}
        <Text style={styles.questiontext}>Describe {this.state.team_num}s  strategy</Text>
{/*This needs to be a text feild that can accomadate up to a paragraph*/}
<Picker
        selectedValue={this.state.dec_strat}
          onValueChange={(itemValue, itemIndex) => this.setState({dec_strat: itemValue})}>
            <Picker.Item label="N/A" value="N/A" />
            <Picker.Item label="Yes" value="Yes" />
            <Picker.Item label="No" value="No" />
</Picker>

{/*We are missing two descriptions:*/}
{/*You are missing the feilds for Endgame strategy and Additional Comments*/}
{/*This needs to be a text feild that can accomadate up to a paragraph*/}


<TouchableHighlight
 onPress={this.InsertRecords}
 underlayColor='#fe891f'>
 <Image
   source={require('../Images/checkButton.png')}
   style={styles.check}
 />
     </TouchableHighlight>



      </View>
</ScrollView>

</View>

       );
     }
   }


const styles = StyleSheet.create({
  MainContainer :{

     alignItems: 'center',
     flex:1,
     paddingTop: 30,
     backgroundColor: '#fe891f',


   },

headertext:{
  fontSize: 48,
  textAlign: 'center',
  marginBottom: 7,
  color: '#ffffff',
  fontWeight: 'bold',
},

questiontext:{
  fontSize: 18,
  color: '#ffffff'
},
questionContainer:{
  margin: 20,
},
subHeadertext:{
  fontSize: 24,
  textAlign: 'center',
  marginBottom: 6,
  color: '#ffffff',
  fontWeight: 'bold',
},

check: {
  height: 40,
  width: 40,
  left: 170,
  right: 170,
},

   MainContainer_For_Show_StudentList_Activity :{

     flex:1,

     marginLeft: 5,
     marginRight: 5

     },

   TextInputStyleClass: {

   textAlign: 'center',
   width: '90%',
   marginBottom: 7,
   height: 40,
   borderWidth: 1,
   borderColor: '#FF5722',
   borderRadius: 5 ,

   },

   TouchableOpacityStyle: {

     paddingTop:10,
     paddingBottom:10,
     borderRadius:5,
     marginBottom:7,
     width: '90%',
     backgroundColor: '#00BCD4'

   },

   TextStyle:{
     color:'#fff',
     textAlign:'center',
   },

   rowViewContainer: {
     fontSize: 20,
     paddingRight: 10,
     paddingTop: 10,
     paddingBottom: 10,
   }
});