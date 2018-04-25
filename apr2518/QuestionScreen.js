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
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import ToggleBox from 'react-native-show-hide-toggle-box';

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
     loading: false,
     username : '',
     team_num : '',
     match_num : '',
     regional: '',
     flip_tip : 'N/A',
     type_bot : 'N/A',
     shoot_cube : 'N/A',
     cube_drop : 'N/A',
     scale : 'N/A',
     switches : 'N/A',
     cycle_time : 'N/A',
     climb_time : 'N/A',
     buddy_bar : 'N/A',
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
     scale_penalty : 'N/A',
     dec_auto : 'N/A',
     dec_endgame : 'N/A',
     dec_strat : 'N/A'

   }
   AsyncStorage.getItem("regional").then((regional) => {
     this.setState({"regional": regional})
   });
   AsyncStorage.getItem("username").then((value) => {
     this.setState({"username": value})
   });
   AsyncStorage.getItem("team_num").then((team) => {
     this.setState({"team_num": team})
   });
   AsyncStorage.getItem("match_num").then((match) => {
     this.setState({"match_num": match})
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

   saveData(regionals){
       AsyncStorage.setItem("regional", regional);
       this.setState({"regional": regional});
   }
   saveData(match){
       AsyncStorage.setItem("match_num", match);
       this.setState({"match_num": match});
   }



InsertRecords = () =>{
     this.setState({ loading: true, disabled: true });
     fetch('http://www.quotin.co/React/user-input.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       username : this.state.username,
       team_num : this.state.team_num,
       match_num : this.state.match_num,
       regional : this.state.regional,
       type_bot : this.state.type_bot,
       flip_tip : this.state.flip_tip,
       shoot_cube : this.state.shoot_cube,
       cube_drop : this.state.cube_drop,
       scale : this.state.scale,
       switches : this.state.switches,
       cycle_time : this.state.cycle_time,
       climb_time : this.state.climb_time,
       buddy_bar : this.state.buddy_bar,
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
       scale_penalty : this.state.scale_penalty,
       dec_auto : this.state.dec_auto,
       dec_endgame : this.state.dec_endgame,
       dec_strat : this.state.dec_strat

     })

     }).then((response) => response.json())
         .then((responseJson) => {

           // Showing response message coming from server after inserting records.
           Alert.alert(responseJson,this.state.team_num);
          this.props.navigation.navigate('ProfileScreen');

         }).catch((error) => {
           console.error(error);
         });

}


  render() {

      return(

        <KeyboardAvoidingView
         behavior='padding'
         keyboardVerticalOffset={-150}
         style={styles.MainContainer}
       >

        <ScrollView>
            <Text style={styles.headertext}> {this.state.match_num} </Text>
            <Text style={styles.headertext}> Scouting </Text>

{/*Display at the top of the screen(Header)*/}
            <Text style={styles.subHeadertext}>Team #{this.state.team_num}</Text>
            <Text style={{textAlign:'center', color:'white'}}>NOTE: Blanks will be marked as "N/A".</Text>
<View style={styles.questionContainer}>
{/*Question 15: Autonomous Description*/}
        <Text style={styles.questiontext} >Describe #{this.state.team_num}&apos;s autonomous:</Text>
        <View style={styles.block}></View>
{/*This needs to be a text feild that can accomadate up to a paragraph*/}
<TextInput
editable={true}
multiline={true}
onChangeText={dec_auto => this.setState({dec_auto})}
placeholder="Describe Autonomous"
style={{height: 50, lineHeight: 36, backgroundColor:'white', borderWidth: 2, borderColor: 'black', }}

>
</TextInput>
<View style={styles.block}></View>
{/*Question 16: Autonomous Description*/}
        <Text style={styles.questiontext}>Describe #{this.state.team_num}&apos;s endgame:</Text>
        <View style={styles.block}></View>
{/*This needs to be a text feild that can accomadate up to a paragraph*/}

<TextInput
editable={true}
multiline={true}
onChangeText={dec_endgame => this.setState({dec_endgame})}
placeholder="Describe Endgame"
style={{height: 50, lineHeight: 36, backgroundColor:'white', borderWidth: 2, borderColor: 'black', }}

>
</TextInput>
<View style={styles.block}></View>
{/*Question 17: Strategy description*/}
        <Text style={styles.questiontext}>Describe #{this.state.team_num}&apos;s strategy:</Text>
        <View style={styles.block}></View>
{/*This needs to be a text feild that can accomadate up to a paragraph*/}

<TextInput
editable={true}
multiline={true}
onChangeText={dec_strat => this.setState({dec_strat})}
placeholder="Describe Strategy"
style={{height: 50, lineHeight: 36, backgroundColor:'white', borderWidth: 2, borderColor: 'black', }}

>
</TextInput>
<View style={styles.block}></View>
<TouchableHighlight>
        <Text style={styles.questiontext}>What type of Bot #{this.state.team_num} is using?</Text>
        </TouchableHighlight>
        <View style={styles.block}></View>
        <ToggleBox label={this.state.type_bot} style={{backgroundColor: '#fff', borderWidth: 2, borderColor: 'black', }}>

        <RadioGroup
        onSelect = {(index, value) => this.setState({type_bot: value})}
        >
        <RadioButton value={'N/A'} >
        <Text style={{color: 'black'}}>N/A</Text>
        </RadioButton>

        <RadioButton value={'Vault Bot'}>
        <Text style={{color: 'black'}}>Vault Bot</Text>
        </RadioButton>

        <RadioButton value={'Switch Bot'}>
        <Text style={{color: 'black'}}>Switch Bot</Text>
        </RadioButton>

        <RadioButton value={'Scale Bot'}>
        <Text style={{color: 'black'}}>Scale Bot</Text>
        </RadioButton>

        <RadioButton value={'Hybrid Bot'}>
        <Text style={{color: 'black'}}>Hybrid Bot</Text>
        </RadioButton>
        </RadioGroup>

        </ToggleBox>
        <View style={styles.block}></View>
<TouchableHighlight>
        <Text style={styles.questiontext}>Does #{this.state.team_num}&apos;s robot flip/tip?</Text>
        </TouchableHighlight>
        <View style={styles.block}></View>
        <ToggleBox label={this.state.flip_tip} style={{backgroundColor: '#fff', borderWidth: 2, borderColor: 'black', }}>

        <RadioGroup
        onSelect = {(index, value) => this.setState({flip_tip: value})}
        >
        <RadioButton value={'N/A'} >
        <Text style={{color: 'black'}}>N/A</Text>
        </RadioButton>

        <RadioButton value={'Yes'}>
        <Text style={{color: 'black'}}>Yes</Text>
        </RadioButton>

        <RadioButton value={'No'}>
        <Text style={{color: 'black'}}>No</Text>
        </RadioButton>
        </RadioGroup>

        </ToggleBox>
        <View style={styles.block}></View>
<TouchableHighlight>
        <Text style={styles.questiontext}>Does #{this.state.team_num}&apos;s robot shoot cubes?</Text>
        </TouchableHighlight>
        <View style={styles.block}></View>
        <ToggleBox label={this.state.shoot_cube} style={{backgroundColor: '#fff', borderWidth: 2, borderColor: 'black', }}>

        <RadioGroup
        onSelect = {(index, value) => this.setState({shoot_cube: value})}
        >
        <RadioButton value={'N/A'} >
        <Text style={{color: 'black'}}>N/A</Text>
        </RadioButton>

        <RadioButton value={'Yes'}>
        <Text style={{color: 'black'}}>Yes</Text>
        </RadioButton>

        <RadioButton value={'No'}>
        <Text style={{color: 'black'}}>No</Text>
        </RadioButton>
        </RadioGroup>

        </ToggleBox>
        <View style={styles.block}></View>
<Text style={styles.questiontext}>How many cubes did #{this.state.team_num} drop?</Text>
<View style={styles.block}></View>
<TextInput
editable={true}
multiline={true}
maxLength={2}
onChangeText={cube_drop => this.setState({cube_drop})}
placeholder="Enter dropped cubes"
style={{height: 50, lineHeight: 36, backgroundColor:'white', borderWidth: 2, borderColor: 'black', }}

>
</TextInput>
<View style={styles.block}></View>

{/*Question 1: Scale*/}
<TouchableHighlight>
        <Text style={styles.questiontext}>Can #{this.state.team_num} score on the scale consistently?</Text>
        </TouchableHighlight>
<View style={styles.block}></View>
<ToggleBox label={this.state.scale} style={{backgroundColor: '#fff', borderWidth: 2, borderColor: 'black', }}>

<RadioGroup
onSelect = {(index, value) => this.setState({scale: value})}
>
<RadioButton value={'N/A'} >
<Text style={{color: 'black'}}>N/A</Text>
</RadioButton>

<RadioButton value={'Yes'}>
<Text style={{color: 'black'}}>Yes</Text>
</RadioButton>

<RadioButton value={'No'}>
<Text style={{color: 'black'}}>No</Text>
</RadioButton>
</RadioGroup>

</ToggleBox>
<View style={styles.block}></View>

{/*Question 2: Swtich*/}
          <Text style={styles.questiontext}>Can #{this.state.team_num} score on the switches consistently?</Text>
          <View style={styles.block}></View>
          <ToggleBox label={this.state.switches} style={{backgroundColor: '#fff', borderWidth: 2, borderColor: 'black', }}>

          <RadioGroup
          onSelect = {(index, value) => this.setState({switches: value})}
          >
          <RadioButton value={'N/A'} >
          <Text style={{color: 'black'}}>N/A</Text>
          </RadioButton>

          <RadioButton value={'Yes'}>
          <Text style={{color: 'black'}}>Yes</Text>
          </RadioButton>

          <RadioButton value={'No'}>
          <Text style={{color: 'black'}}>No</Text>
          </RadioButton>
          </RadioGroup>

          </ToggleBox>
<View style={styles.block}></View>
{/*Question 3: Cycle Time*/}
        <Text style={styles.questiontext}>Please give an estimate of #{this.state.team_num}&apos;s Cycle Time:</Text>
        <View style={styles.block}></View>

<TextInput
editable={true}
multiline={true}
maxLength={2}
style={{height: 50, lineHeight: 36, backgroundColor:'white', borderWidth: 2, borderColor: 'black',}}
onChangeText={cycle_time => this.setState({cycle_time})}
placeholder="Enter Cycle Time"

>
</TextInput>
<View style={styles.block}></View>
{/*Question 4: Climb Time*/}
        <Text style={styles.questiontext}>How long does #{this.state.team_num} take to climb?</Text>
        <View style={styles.block}></View>

        <TextInput
        editable={true}
        multiline={true}
        maxLength={2}
        onChangeText={climb_time => this.setState({climb_time})}
        placeholder= "Enter Climb Time"
        style={{height: 50, lineHeight: 36, backgroundColor:'white', borderWidth: 2, borderColor: 'black', }}
        >
        </TextInput>
        <View style={styles.block}></View>

        <Text style={styles.questiontext}>Can #{this.state.team_num} hang off our buddy bar?</Text>
        <View style={styles.block}></View>
        <ToggleBox label={this.state.buddy_bar} style={{backgroundColor: '#fff', borderWidth: 2, borderColor: 'black', }}>

        <RadioGroup
        onSelect = {(index, value) => this.setState({buddy_bar: value})}
        >
        <RadioButton value={'N/A'} >
        <Text style={{color: 'black'}}>N/A</Text>
        </RadioButton>

        <RadioButton value={'Yes'}>
        <Text style={{color: 'black'}}>Yes</Text>
        </RadioButton>

        <RadioButton value={'No'}>
        <Text style={{color: 'black'}}>No</Text>
        </RadioButton>
        </RadioGroup>

        </ToggleBox>
        <View style={styles.block}></View>

{/*Question 5: Autonomus*/}
        <Text style={styles.questiontext} >Does #{this.state.team_num} have an autonomous?</Text>
        <View style={styles.block}></View>
        <ToggleBox label={this.state.auto} style={{backgroundColor: '#fff', borderWidth: 2, borderColor: 'black', }}>

        <RadioGroup
        onSelect = {(index, value) => this.setState({auto: value})}
        >
        <RadioButton value={'N/A'} >
        <Text style={{color: 'black'}}>N/A</Text>
        </RadioButton>

        <RadioButton value={'Yes'}>
        <Text style={{color: 'black'}}>Yes</Text>
        </RadioButton>

        <RadioButton value={'No'}>
        <Text style={{color: 'black'}}>No</Text>
        </RadioButton>
        </RadioGroup>

        </ToggleBox>
<View style={styles.block}></View>
{/*Question 6: Cross the line*/}
        <Text style={styles.questiontext} >Does #{this.state.team_num} cross the line in autonomous?</Text>
        <View style={styles.block}></View>
        <ToggleBox label={this.state.cross_line_auto} style={{backgroundColor: '#fff', borderWidth: 2, borderColor: 'black', }}>

        <RadioGroup
        onSelect = {(index, value) => this.setState({cross_line_auto: value})}
        >
        <RadioButton value={'N/A'} >
        <Text style={{color: 'black'}}>N/A</Text>
        </RadioButton>

        <RadioButton value={'Yes'}>
        <Text style={{color: 'black'}}>Yes</Text>
        </RadioButton>

        <RadioButton value={'No'}>
        <Text style={{color: 'black'}}>No</Text>
        </RadioButton>
        </RadioGroup>

        </ToggleBox>
        <View style={styles.block}></View>
{/*Question 7: Switch-Autonomous*/}
        <Text style={styles.questiontext} >Does #{this.state.team_num} score on the switches in autonomous?</Text>
        <View style={styles.block}></View>
        <ToggleBox label={this.state.switch_auto} style={{backgroundColor: '#fff', borderWidth: 2, borderColor: 'black', }}>

        <RadioGroup
        onSelect = {(index, value) => this.setState({switch_auto: value})}
        >
        <RadioButton value={'N/A'} >
        <Text style={{color: 'black'}}>N/A</Text>
        </RadioButton>

        <RadioButton value={'Yes'}>
        <Text style={{color: 'black'}}>Yes</Text>
        </RadioButton>

        <RadioButton value={'No'}>
        <Text style={{color: 'black'}}>No</Text>
        </RadioButton>
        </RadioGroup>

        </ToggleBox>
<View style={styles.block}></View>
{/*Question 8: Vault-Autonomous*/}
        <Text style={styles.questiontext} >Does #{this.state.team_num} score in the vault in autonomous?</Text>
        <View style={styles.block}></View>
        <ToggleBox label={this.state.vault_auto} style={{backgroundColor: '#fff', borderWidth: 2, borderColor: 'black', }}>

        <RadioGroup
        onSelect = {(index, value) => this.setState({vault_auto: value})}
        >
        <RadioButton value={'N/A'} >
        <Text style={{color: 'black'}}>N/A</Text>
        </RadioButton>

        <RadioButton value={'Yes'}>
        <Text style={{color: 'black'}}>Yes</Text>
        </RadioButton>

        <RadioButton value={'No'}>
        <Text style={{color: 'black'}}>No</Text>
        </RadioButton>
        </RadioGroup>

        </ToggleBox>
<View style={styles.block}></View>
{/*Question 9: Vault*/}
        <Text style={styles.questiontext} >Does #{this.state.team_num} score in the vault?</Text>
        <View style={styles.block}></View>
        <ToggleBox label={this.state.vault} style={{backgroundColor: '#fff', borderWidth: 2, borderColor: 'black', }}>

        <RadioGroup
        onSelect = {(index, value) => this.setState({vault: value})}
        >
        <RadioButton value={'N/A'} >
        <Text style={{color: 'black'}}>N/A</Text>
        </RadioButton>

        <RadioButton value={'Yes'}>
        <Text style={{color: 'black'}}>Yes</Text>
        </RadioButton>

        <RadioButton value={'No'}>
        <Text style={{color: 'black'}}>No</Text>
        </RadioButton>
        </RadioGroup>

        </ToggleBox>
        <View style={styles.block}></View>
{/*Question 10: Powerups*/}
        <Text style={styles.questiontext} >Which power-up does #{this.state.team_num} enable during the match?</Text>
        <View style={styles.block}></View>
{/*This needs to have four alternate values of: Force, Boost, Leviate, and No Power Up*/}
<ToggleBox label={this.state.team_power} style={{backgroundColor: '#fff', borderWidth: 2, borderColor: 'black', }}>

<RadioGroup
onSelect = {(index, value) => this.setState({team_power: value})}
>
<RadioButton value={'N/A'} >
<Text style={{color: 'black'}}>N/A</Text>
</RadioButton>

<RadioButton value={'Yes'}>
<Text style={{color: 'black'}}>Yes</Text>
</RadioButton>

<RadioButton value={'No'}>
<Text style={{color: 'black'}}>No</Text>
</RadioButton>
</RadioGroup>

</ToggleBox>
<View style={styles.block}></View>
{/*Question 11: Cubes*/}
        <Text style={styles.questiontext} >How many cubes does #{this.state.team_num} score per match?</Text>
        <View style={styles.block}></View>
        <TextInput
        editable={true}
        multiline={true}
        maxLength={2}
        onChangeText={cube_num => this.setState({cube_num})}
        placeholder="Enter Number of Cubes"
        style={{height: 50, lineHeight: 36, backgroundColor:'white', borderWidth: 2, borderColor: 'black', }}
        >
        </TextInput>
        <View style={styles.block}></View>
{/*Question 12: Hang*/}
        <Text style={styles.questiontext} >Does #{this.state.team_num} hang at the end of the match?</Text>
        <View style={styles.block}></View>
        <ToggleBox label={this.state.team_hang} style={{backgroundColor: '#fff', borderWidth: 2, borderColor: 'black', }}>

        <RadioGroup
        onSelect = {(index, value) => this.setState({team_hang: value})}
        >
        <RadioButton value={'N/A'} >
        <Text style={{color: 'black'}}>N/A</Text>
        </RadioButton>

        <RadioButton value={'Yes'}>
        <Text style={{color: 'black'}}>Yes</Text>
        </RadioButton>

        <RadioButton value={'No'}>
        <Text style={{color: 'black'}}>No</Text>
        </RadioButton>
        </RadioGroup>

        </ToggleBox>
<View style={styles.block}></View>
{/*Question 13: Foucs*/}
        <Text style={styles.questiontext} >What does #{this.state.team_num} focus on during the match?</Text>
        <View style={styles.block}></View>
{/*This needs to have four alternate values of: Scale, Vault, Defense, and Switch*/}
<ToggleBox label={this.state.team_focus} style={{backgroundColor: '#fff', borderWidth: 2, borderColor: 'black', }}>

<RadioGroup
onSelect = {(index, value) => this.setState({team_focus: value})}
>
<RadioButton value={'N/A'} >
<Text style={{color: 'black'}}>N/A</Text>
</RadioButton>

<RadioButton value={'Scale'}>
<Text style={{color: 'black'}}>Scale</Text>
</RadioButton>

<RadioButton value={'Vault'}>
<Text style={{color: 'black'}}>Vault</Text>
</RadioButton>

<RadioButton value={'Defense'}>
<Text style={{color: 'black'}}>Defense</Text>
</RadioButton>

<RadioButton value={'Switch'}>
<Text style={{color: 'black'}}>Switch</Text>
</RadioButton>
</RadioGroup>

</ToggleBox>
<View style={styles.block}></View>
{/*Question 14: Penalties*/}
        <Text style={styles.questiontext}> What Penalty did #{this.state.team_num} get?</Text>
        <View style={styles.block}></View>
{/*This needs to have six alternate values of: Foul, Red Card, Yellow Card, Disabled, Disqualified and No Penalty */}
<ScrollView style={{width: '100%'}}>
<ToggleBox label={this.state.team_penalties} style={{backgroundColor: '#fff', borderWidth: 2, borderColor: 'black',}}>

<RadioGroup
onSelect = {(index, value) => this.setState({team_penalties: value})}
>
<RadioButton value={'N/A'} >
<Text style={{color: 'black'}}>N/A</Text>
</RadioButton>

<RadioButton value={'Foul'}>
<Text style={{color: 'black'}}>Foul</Text>
</RadioButton>

<RadioButton value={'Red Card'}>
<Text style={{color: 'black'}}>Red Card</Text>
</RadioButton>

<RadioButton value={'Yellow Card'}>
<Text style={{color: 'black'}}>Yellow Card</Text>
</RadioButton>

<RadioButton value={'Disabled'}>
<Text style={{color: 'black'}}>Disabled</Text>
</RadioButton>

<RadioButton value={'Disqualified'}>
<Text style={{color: 'black'}}>Disqualified</Text>
</RadioButton>

<RadioButton value={'No Penalty'}>
<Text style={{color: 'black'}}>No Penalty</Text>
</RadioButton>
</RadioGroup>

</ToggleBox>
</ScrollView>
<View style={styles.block}></View>
<Text style={styles.questiontext}> Did #{this.state.team_num} get a penalty for hitting the scale?</Text>
<View style={styles.block}></View>
{/*This needs to have six alternate values of: Foul, Red Card, Yellow Card, Disabled, Disqualified and No Penalty */}
<ToggleBox label={this.state.scale_penalty} style={{backgroundColor: '#fff', borderWidth: 2, borderColor: 'black', }}>

<RadioGroup
onSelect = {(index, value) => this.setState({scale_penalty: value})}
>
<RadioButton value={'N/A'} >
<Text style={{color: 'black'}}>N/A</Text>
</RadioButton>

<RadioButton value={'Yes'}>
<Text style={{color: 'black'}}>Yes</Text>
</RadioButton>

<RadioButton value={'No'}>
<Text style={{color: 'black'}}>No</Text>
</RadioButton>
</RadioGroup>

</ToggleBox>
<View style={styles.block}></View>


{/*We are missing two descriptions:*/}
{/*You are missing the feilds for Endgame strategy and Additional Comments*/}
{/*This needs to be a text feild that can accomadate up to a paragraph*/}


<TouchableHighlight
 onPress={this.InsertRecords}
 underlayColor='#fe891f'>
 <Image
   source={{uri: 'http://www.fusion364.com/img/checkButton.png'}}
   style={styles.check}
 />
     </TouchableHighlight>



      </View>
</ScrollView>
{
     (this.state.loading)
     ?
         (<ActivityIndicator size = "large" />)
     :
         null
 }
</KeyboardAvoidingView>

       );
     }
   }


const styles = StyleSheet.create({
  MainContainer :{

     alignItems: 'center',
     flex:1,
     paddingTop: 30,
     backgroundColor: '#fe891f',
     justifyContent: 'center'


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
  color: '#ffffff',
  textAlign:'center',
  fontWeight: 'bold',
  padding: 10,
  backgroundColor:'#1F3A93',
  borderRadius: 100,
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
  height: 50,
  width: 53,
  justifyContent:'center',
  alignSelf: 'center'
},
block:{
  backgroundColor: '#fe891f',
  height: 10,
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
   height: 70,
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
