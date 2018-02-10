import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TextInput, Alert, AsyncStorage, ActivityIndicator, Platform} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';

 class TeamNumScreen extends Component{
   constructor(props){
     super(props);
     this.state = {
       team_num: '',
     }

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
        <View style={{backgroundColor: '#fff',  flexDirection:'column',  flex: 1, justifyContent:'center', alignItems: 'center'}}>
          <View style={{ height: 300, justifyContent:'space-between',}}>
          <Text style={{color: 'black', textAlign: 'center', }}>
            What team are you scouting?!
          </Text>
          <TextInput
          onChangeText={team_num => this.setState({team_num})}
          placeholder="Enter Team Number"
          underlineColorAndroid='transparent'
          >

          </TextInput>
          <TouchableHighlight
          style={{backgroundColor: '#333', height: 50, width: 100, justifyContent:'center', alignItems: 'center', marginLeft: 25}}
          onPress={this._RegTeamNum.bind(this)}
          >
          <Text style={{color: 'white', textAlign: 'center',}}>Confirm</Text>
          </TouchableHighlight>

          <TouchableHighlight
          style={{backgroundColor: '#333', height: 50, width: 100, justifyContent:'center', alignItems: 'center', marginLeft: 25}}
          onPress={() => this.props.navigation.navigate('ProfileScreen')}
          >

            <Text style={{color: 'white', textAlign: 'center',}}>Back</Text>
          </TouchableHighlight>
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


const newTextStyle = {
  fontSize: 30,
  color: 'white',
  textAlign: 'center',
}
export default TeamNumScreen;
