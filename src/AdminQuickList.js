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

export default class AdminQuickList extends Component {
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
     type_bot: 'N/A',
     cross_line_auto : 'N/A',
     team_hang : 'N/A',
   }
 }

InsertRecords = () =>{
     this.setState({ loading: true, disabled: true });
     fetch('http://www.quotin.co/React/admin-input.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       type_bot : this.state.type_bot,
       cross_line_auto : this.state.cross_line_auto,
       team_hang : this.state.team_hang,

     })

     }).then((response) => response.json())
         .then((responseJson) => {

           // Showing response message coming from server after inserting records.
           Alert.alert(responseJson);
          this.props.navigation.navigate('AdminScreen');

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
            <Text style={styles.headertext}> Quick Scouting </Text>

{/*Display at the top of the screen(Header)*/}
<View style={styles.questionContainer}>
{/*Question 15: Autonomous Description*/}
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
