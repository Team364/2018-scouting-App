import React, {Component} from 'react';
import {AppRegistry,
        Text,
        View,
        StyleSheet,
        TouchableHighlight,
        TextInput,
        Alert,
        AsyncStorage,
        ActivityIndicator,
        Platform,
        Image,} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';

 class TeamNumScreen extends Component{
   constructor(props){
     super(props);
     this.state = {
       team_num: '',
     }

   }
   static navigationOptions = {
     title: null ,
     header: null,
   }

    _RegTeamNum () {
      // Get the data
      let team_num = this.state.team_num

      // Retrieve the existing messages
      AsyncStorage.getItem('team_num', (res)  => {
        var team_nums

        // If this is the first time, set up a new array
        if (res === null) {
          team_nums = []
        }else {
          team_nums = JSON.parse(res)
        }



        // Save the messages
        AsyncStorage.setItem('team_num', team_num, (res) => {})
        this.props.navigation.navigate('QuestionScreen');
      })
    }
    render(){
     return(
       <View style={styles.MainContainer}>
       <View style={styles.block}></View>
       <Text style={styles.instructions2}>What team do you want to Scout?</Text>
         <View style={styles.SecondaryContainer}>
         <View style={styles.row}>
         <TextInput
         style={styles.input}
          onChangeText={team_num => this.setState({team_num})}
       placeholder="Team Number"
         underlineColorAndroid='transparent'
         >
         </TextInput>
         <TouchableHighlight
          onPress={this._RegTeamNum.bind(this)}
         underlayColor='#fe891f'>
         <Image
           source={require('../Images/NextButton.png')}
           style={styles.arrow}
         />
             </TouchableHighlight>
             </View>






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


const styles = StyleSheet.create({
 MainContainer:{
   backgroundColor: '#fe891f',
   flex: 1,
   alignItems: 'center'
 },
instructions2:{
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 24,
},
 block:{
   backgroundColor: '#fe891f',
   height: 250,
 },
 SecondaryContainer:{
   width: 80,
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
width: 120,
height: 50,
left: -10,

},
arrow:{
 height: 30,
 width: 30,
 top: 10,
 left: 0,
 position: 'relative',
 zIndex: 1,
},
newUser:{
  fontSize: 12,
  color: 'blue',
  alignItems: 'center',
  left: 8,
  flexDirection: 'column'
},

});
export default TeamNumScreen;
