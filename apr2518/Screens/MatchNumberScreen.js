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
        Image,
        Keyboard,
        KeyboardAvoidingView,
        Picker,
        ScrollView} from 'react-native';
import {StackNavigator} from 'react-navigation';
import SmartPicker from 'react-native-smart-picker';
import ToggleBox from 'react-native-show-hide-toggle-box';

import HomeScreen from './HomeScreen';




 class MatchNumberScreen extends Component{
   constructor(props){
     super(props);
     this.state = {
       match_num: 'N/A',
     }

   }
   static navigationOptions = {
     title: null ,
     header: null,
   }


    _RegMatchNum (match_num) {
      // Get the data
      this.setState({ match_num: match_num })

      // Retrieve the existing messages
      AsyncStorage.getItem('match_num', (res)  => {
        var match_nums

        // If this is the first time, set up a new array
        if (res === null) {
          match_nums = []
        }else {
          match_nums = JSON.parse(res)
        }



        // Save the messages
        AsyncStorage.setItem('match_num', match_num, (res) => {})
        Keyboard.dismiss();
        this.props.navigation.navigate('QuestionScreen');

      })
    }
    _RegMatchNum2 () {
      // Get the data
      let match_num = this.state.match_num

      // Retrieve the existing messages
      AsyncStorage.getItem('match_num', (res)  => {
        var match_nums

        // If this is the first time, set up a new array
        if (res === null) {
          match_nums = []
        }else {
          match_nums = JSON.parse(res)
        }



        // Save the messages
        AsyncStorage.setItem('match_num', match_num, (res) => {})
        Keyboard.dismiss();
        this.props.navigation.navigate('QuestionScreen');

      })
    }
    render(){
     return(
       <KeyboardAvoidingView
        behavior='padding'
        keyboardVerticalOffset={-64}
        style={styles.MainContainer}
      >
        <View style={styles.block}></View>
       <Text style={styles.instructions2}>What Match Number are you Scouting?</Text>
         <View style={styles.SecondaryContainer}>
         <View style={styles.row}>
         <TextInput
         style={{ lineHeight: 36, borderRadius: 100, borderWidth: 2, borderColor: 'black', textAlign:'center', backgroundColor:'#fff', width: 150, height: 50, left: 20 }}
          onChangeText={match_num => this.setState({match_num})}
          placeholder="Enter Match Number"
           underlineColorAndroid='transparent'
         >
         </TextInput>
         <TouchableHighlight
          onPress={this._RegMatchNum2.bind(this)}
         underlayColor='#fe891f'>
         <Image
           source={{uri: 'http://www.fusion364.com/img/NextButton.png'}}
           style={styles.arrow}
         />
             </TouchableHighlight>


             </View>

          </View>



        {/**  <Text style={{color: 'white', fontSize: 15, backgroundColor: 'blue', padding: 10, borderRadius: 20, textAlign:'center',}}>Playoff Selection</Text>
                    <ScrollView style={"Your custom styles here"}>
         <View style={{flex: 1, marginTop: 20}}>
         <ToggleBox label='Toggle this box' value='Tap Me' style={{backgroundColor: '#ddd', borderBottomWidth: 1}}>
           <ScrollView style={styles.container}>
             <SmartPicker
               selectedValue={this.state.match_num}
               label='Set you favorite country'
               onValueChange={this._RegMatchNum.bind(this)}
               style={Platform.OS === 'ios' ? [styles.iosPicker, this.props.iosPickerStyle] : [styles.androidPicker, this.props.androidPickerStyle]}
             >
               <Picker.Item label='Quarters 1 Match 1' value='Quarters 1 Match 1' />
               <Picker.Item label='Quarters 1 Match 2' value='Quarters 1 Match 2' />
               <Picker.Item label='Quarters 1 Match 3' value='Quarters 1 Match 3' />
               <Picker.Item label='Quarters 2 Match 1' value='Quarters 2 Match 1' />
               <Picker.Item label='Quarters 2 Match 2' value='Quarters 2 Match 2' />
               <Picker.Item label='Quarters 2 Match 3' value='Quarters 2 Match 3' />
               <Picker.Item label='Quarters 3 Match 1' value='Quarters 3 Match 1' />
               <Picker.Item label='Quarters 3 Match 2' value='Quarters 3 Match 2' />
               <Picker.Item label='Quarters 3 Match 3' value='Quarters 3 Match 3' />
               <Picker.Item label='Quarters 4 Match 1' value='Quarters 4 Match 1' />
               <Picker.Item label='Quarters 4 Match 2' value='Quarters 4 Match 2' />
               <Picker.Item label='Quarters 4 Match 3' value='Quarters 4 Match 3' />
               <Picker.Item label='Semis 1 Match 1' value='Semis 1 Match 1' />
               <Picker.Item label='Semis 1 Match 2' value='Semis 1 Match 2' />
               <Picker.Item label='Semis 1 Match 3' value='Semis 1 Match 3' />
               <Picker.Item label='Semis 2 Match 1' value='Semis 2 Match 1' />
               <Picker.Item label='Semis 2 Match 2' value='Semis 2 Match 2' />
               <Picker.Item label='Semis 2 Match 3' value='Semis 2 Match 3' />
               <Picker.Item label='Finals 1' value='Finals 1' />
               <Picker.Item label='Finals 2' value='Finals 2' />
               <Picker.Item label='Finals 3' value='Finals 3' />
             </SmartPicker>
           </ScrollView>
           </ToggleBox>
         </View>
       </ScrollView>*/}


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
 MainContainer:{
   backgroundColor: '#fe891f',
   flex: 1,
   alignItems: 'center',
 },
instructions2:{
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 22,
  textAlign:'center',
  padding: 10,
  backgroundColor:'#1F3A93',
  borderRadius: 100,
},
 block:{
   backgroundColor: '#fe891f',
   height: 200,
 },
 SecondaryContainer:{
   width: 80,
   height: 100,
   justifyContent: 'center',
 },
 row:{
   flexDirection: 'row',
   justifyContent: 'center'
 },
 newTextStyle:{
 fontSize: 30,
 color: 'white',
 textAlign: 'center',
},
input:{
width: 150,
height: 70,
left: -20,

},
arrow:{
 height: 30,
 width: 30,
 top: 10,
 left: 0,
 position: 'relative',
 zIndex: 1,
 marginLeft: 30
},
newUser:{
  fontSize: 12,
  color: 'blue',
  alignItems: 'center',
  left: 8,
  flexDirection: 'column'
},
iosPicker: {
  backgroundColor: 'rgba(178,181,189,0.1)',
  borderColor: 'rgb(178,181,189)',
  borderTopWidth: 1,
  padding: 0,
},
androidBoxStyle: {
   flex: 1,
   flexDirection: 'column',
 },
 androidPicker: {
   flex: 1,
   alignItems: 'center'
 },
 androidPickerWrapper: {
   borderBottomWidth: 1,
   borderColor: 'rgb(178,181,189)'
 },
 toggleBox: {
   borderColor: 'rgb(178,181,189)',
   borderBottomWidth: 1,
 }

});
export default MatchNumberScreen;
