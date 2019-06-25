import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TextInput, Alert, AsyncStorage, ActivityIndicator, Platform, ListView} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';

 class AdminTeamListScreen extends Component{


   constructor(props) {

       super(props);

       this.state = {

         isLoading: true,
         text: '',
         team_num: '',
         username: ''

       }
       this.arrayholder = [] ;
     }

     SearchFilterFunction(text){

         const newData = this.arrayholder.filter(function(item){
             const itemData = item.team_num.toUpperCase()
             const textData = text.toUpperCase()
             return itemData.indexOf(textData) > -1
         })
         this.setState({
             dataSource: this.state.dataSource.cloneWithRows(newData),
             text: text,
             username: this.state.username
         })
     }
  componentDidMount() {

       return fetch('http://www.quotin.co/React/team-feed.php')
         .then((response) => response.json())
         .then((responseJson) => {
           let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
           this.setState({
             isLoading: false,
             dataSource: ds.cloneWithRows(responseJson),
           }, function() {
             // In this block you can do something with new state.
             this.arrayholder = responseJson ;
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }

     GetListViewItem=(team_num)=>{

          this.props.navigation.navigate('OtherTeamScreen', {

            team_num : team_num,


          });
        

     }

     ListViewItemSeparator = () => {
       return (
         <View
           style={{
             height: 1.5,
             width: "100%",
             backgroundColor: "#000",
           }}
         />
       );
     }

     render() {
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }

      return (

        <View style={styles.MainContainer_For_Show_StudentList_Activity}>
        <TextInput
           style={styles.TextInputStyleClass}
           onChangeText={(text) => this.SearchFilterFunction(text)}
           value={this.state.text}
           underlineColorAndroid='transparent'
           placeholder="Search Team Number"
            />

          <ListView

            dataSource={this.state.dataSource}

            enableEmptySections={true}

            renderSeparator= {this.ListViewItemSeparator}

            renderRow={ (rowData) =>
              <Text style={styles.rowViewContainer}
                    onPress={this.GetListViewItem.bind(this, rowData.team_num)}>
                    {rowData.team_num}
              </Text>
            }

          />
        </View>
      );
    }
   }

 const styles = StyleSheet.create({

   MainContainer :{

      alignItems: 'center',
      flex:1,
      paddingTop: 30,
      backgroundColor: '#fff'

    },

    MainContainer_For_Show_StudentList_Activity :{

      flex:1,
      paddingTop: (Platform.OS == 'ios') ? 20 : 0,
      marginLeft: 5,
      marginRight: 5

      },

    TextInputStyleClass: {

    textAlign: 'center',
    width: '100%',
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
      textAlign: 'center'
    }

 });
export default AdminTeamListScreen;
