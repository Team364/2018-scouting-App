import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, Button, Navigator, TouchableHighlight, AsyncStorage, ViewList, ActivityIndicator,ListView, FlatList, TouchableOpacity, Image, Alert} from 'react-native';

export default class ProfileScreen extends React.Component {
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
componentDidMount(){
this._loadInitialState().done();
}

_loadInitialState = async () => {
var value = await AsyncStorage.getItem('username');
if(value === 'admin' || value === 'Keandre364'){
  this.props.navigation.navigate('AdminScreen');
}
}
GetListViewItem=(username)=>{

     this.props.navigation.navigate('UserScoutHistory', {

       username : username,


     });

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
      this.props.navigation.navigate('RegionalScreen');

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







        <TouchableOpacity activeOpacity={0.5} onPress={this.logout} style={styles.backButton} >

          <Image source={{uri: 'http://www.fusion364.com/img/BackButton.png'}}

                 style={styles.FloatingButtonStyle} />

        </TouchableOpacity>
          <Text style={styles.instructions}>Hello, {this.state.username}!</Text>
<Text style={styles.instructions}>Press the plus button to begin Scouting.</Text>
         <TouchableOpacity activeOpacity={0.5} onPress={this.question} style={styles.TouchableOpacityStyle} >

          <Image source={{uri: 'http://www.fusion364.com/img/PlusButton.png'}}

                 style={styles.plusButtonStyle} />

        </TouchableOpacity>
        <TouchableOpacity onPress={this.GetListViewItem.bind(this, this.state.username)}><Text style={styles.sTextItem}> Scouting History</Text></TouchableOpacity>
      {/*  {this.state.username == 'AndrewIngram'  ?
              <Text>Hello Creator!</Text>

              :
              <Text></Text>
        }
        {this.state.username == 'Keanu' ?
              <Text>Hello Co-Creator!</Text>

              :
              <Text></Text>
        }
        {this.state.username == 'KT' ?
              <Text>Or should I say, Katie!</Text>

              :
              <Text></Text>
        }
        {this.state.username == 'Abe' ?
              <Text>Hey Abe, are you secretly a zebra?</Text>

              :
              <Text></Text>
        }
        {this.state.username == 'Bob'  ?
              <Text>Did you know bob spelled backwards still bob?</Text>

              :
              <Text></Text>
        }
        {this.state.username == 'BOB'  ?
              <Text>Did you know bob spelled backwards still bob?</Text>

              :
              <Text></Text>
        }
        {this.state.username == 'GavinB'  ?
              <Text>Psss, Gavin, look behind you.</Text>

              :
              <Text></Text>
        }
        {this.state.username == 'GrantW'  ?
              <Text>Grant? More like grand! ha ha ha&#46; See you&#39;re tall?</Text>

              :
              <Text></Text>
        }
        {this.state.username == 'JaredM'  ?
              <Text>Freaky Moryiky</Text>

              :
              <Text></Text>
        }
        {this.state.username == 'JarredB'  ?
              <Text>Your Sugar! Yes, Please!</Text>

              :
              <Text></Text>
        }
        {this.state.username == 'JASchultz'  ?
              <Text>Grant? More like grand! ha ha ha&#46; See you&#39;re tall?</Text>

              :
              <Text></Text>
        }
        {this.state.username == 'Jcbell19'  ?
              <Text>Grant? More like grand! ha ha ha&#46; See you&#39;re tall?</Text>

              :
              <Text></Text>
        }
        {this.state.username == 'John R. Diaz.'  ?
              <Text>Grant? More like grand! ha ha ha&#46; See you&#39;re tall?</Text>

              :
              <Text></Text>
        }
        {this.state.username == 'Joshua Simpson'  ?
              <Text>Grant? More like grand! ha ha ha&#46; See you&#39;re tall?</Text>

              :
              <Text></Text>
        }
        {this.state.username == 'Parker'  ?
              <Text>Grant? More like grand! ha ha ha&#46; See you&#39;re tall?</Text>

              :
              <Text></Text>
        }
        {this.state.username == 'TannerW'  ?
              <Text>Grant? More like grand! ha ha ha&#46; See you&#39;re tall?</Text>

              :
              <Text></Text>
        }*/}
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
    backgroundColor: '#fe891f'
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
    fontSize: 20,
    height: 44,
    backgroundColor: '#fe891f',
    margin: 10,
    marginLeft: 40,
    position: 'relative',
    textAlign:'center'
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
    sTextItem: {

     width: "100%",
     justifyContent: 'center',
     textAlign: "center",
     textAlignVertical: "center",
     fontSize: 18,
     color: '#fff',
     fontWeight: 'bold',
     padding: 10,
     borderRadius: 100,
     backgroundColor:'#1F3A93',
     marginBottom: 20,
     position:'relative',
     margin: 0,
     alignItems: 'center'
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
