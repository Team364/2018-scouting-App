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
        Button,
        Picker,
        Image,
        KeyboardAvoidingView,
        ListView} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import SearchableFlatlist from "searchable-flatlist";


const data = [
  { id: 1, name: "Monterrey Regional"},
  { id: 2, name: "Great Notrthern Regional" },
  { id: 3, name: "Maiami Valley Regional" },
  { id: 4, name: "Festival de Robotique - Montreal Regional" },
  { id: 5, name: "Palmetto Regional" },
  { id: 6, name: "Utah Regional" },
  { id: 7, name: "NE District Worcester Polytechnic Institute Event" },
  { id: 8, name: "FIM District Gibraltar Event" },
  { id: 9, name: "FIM District Kettering University Event #1" },
  { id: 10, name: "FIM District Southfeild Event" },
  { id: 11, name: "FIM District Traverse City Event" },
  { id: 12, name: "PNW District Clackamas Academy Event" },
  { id: 13, name: "Central New York Regional" },
  { id: 14, name: "Dallas Regional" },
  { id: 15, name: "PCH District Gainesville Event" },
  { id: 16, name: "NE District Granite State Event" },
  { id: 17, name: "ONT District Georgian College Event" },
  { id: 18, name: "MAR District Hatboro-Horsham Event" },
  { id: 19, name: "CHS District Northern Virginia " },
  { id: 20, name: "PNW District Mount Vernon Event" },
  { id: 21, name: "ISR District Event #1" },
  { id: 22, name: "ISR District Event #2" },
  { id: 23, name: "Arkansas Rock City Regional" },
  { id: 24, name: "Arizona North Regional" },
  { id: 25, name: "San Diego Regional presented by Qualcomm" },
  { id: 26, name: "Orlando Regional"},
  { id: 27, name: "Shenzhen Regional" },
  { id: 28, name: "Lake Superior Regional" },
  { id: 29, name: "Northern Lights Regional" },
  { id: 30, name: "St. Louis Regional" },
  { id: 31, name: "Hub City Regional" },
  { id: 32, name: "PCH District Dalton Event" },
  { id: 33, name: "FIM District Center Line Event" },
  { id: 34, name: "FIM District Kettering University Event #2" },
  { id: 35, name: "FIM District St. Joseph Event" },
  { id: 36, name: "FIM District Waterford Event" },
  { id: 37, name: "PNW District Wilsonville Event" },
  { id: 38, name: "Heartland Regional" },
  { id: 39, name: "NE District Waterbury Event" },
  { id: 40, name: "IN District St. Joseph Event" },
  { id: 41, name: "NE District SE Mass Event" },
  { id: 42, name: "NC District Pitt County Event" },
  { id: 43, name: "MAR District Mount Olive Event" },
  { id: 44, name: "MAR District Westtown Event" },
  { id: 45, name: "CHS District Greater DC Event co-sponsored by Micron" },
  { id: 46, name: "CHS District CentraL Virginia Event" },
  { id: 47, name: "Istanbul Regional" },
  { id: 48, name: "Southern Cross Regional" },
  { id: 49, name: "ISR District Event #3" },
  { id: 50, name: "Canadian Pacific Regional" },
  { id: 51, name: "ISR District Event #4"},
  { id: 52, name: "Rocket City Regional" },
  { id: 53, name: "Los Angeles Regional" },
  { id: 54, name: "Central Illinois Regional" },
  { id: 55, name: "Greater Kansas City Regional" },
  { id: 56, name: "Santa Fe Regional" },
  { id: 57, name: "Finger Lakes Regional" },
  { id: 58, name: "New York Tech Valley Regional" },
  { id: 59, name: "Lone Star Central Regional" },
  { id: 60, name: "PCH District Albany Event" },
  { id: 61, name: "FIM District Escanaba Event" },
  { id: 62, name: "FIM District Gaylord Event" },
  { id: 63, name: "FIM District Gull Lake Event" },
  { id: 64, name: "FIM District Lincoln Event" },
  { id: 65, name: "FIM District Milford Event" },
  { id: 66, name: "ONT District Ryerson University Event" },
  { id: 67, name: "PNW District SunDome Event" },
  { id: 68, name: "San Francisco Regional" },
  { id: 69, name: "Shanghai Regional" },
  { id: 70, name: "South Pacific Regional" },
  { id: 71, name: "NE District Southern CT Event" },
  { id: 72, name: "NE District North Shore Event" },
  { id: 73, name: "CHS District Southern Maryland Event" },
  { id: 74, name: "NE District North Shore Event" },
  { id: 75, name: "CHS District Southern Maryland Event" },
  { id: 76, name: "NC District UNC Pembroke Event"},
  { id: 77, name: "MAR District Bridgewater-Raritan Event" },
  { id: 78, name: "MAR District Springside Chestnut Hill Academy Event" },
  { id: 79, name: "CHS District Hampton Roads event sponsored by Newport News " },
  { id: 80, name: "PNW District Auburn Event" },
  { id: 81, name: "Sacramento Regional" },
  { id: 82, name: "Orange County Regional" },
  { id: 83, name: "Colorado Regional" },
  { id: 84, name: "Hawaii Regional" },
  { id: 85, name: "Iowa Regional" },
  { id: 86, name: "Bayou Regional" },
  { id: 87, name: "Laguna Regional" },
  { id: 88, name: "Las Vegas Regional" },
  { id: 89, name: "Greater Pittsburgh Regional" },
  { id: 90, name: "Smoky Mountains Regional" },
  { id: 91, name: "Wisconsin Regional" },
  { id: 92, name: "PCH District Columbus Event" },
  { id: 93, name: "NE District Columbus Event" },
  { id: 94, name: "FIM District Belleville Event" },
  { id: 95, name: "FIM District Lansing Event" },
  { id: 96, name: "FIM District Midland Event" },
  { id: 97, name: "FIM District West Michigan Event" },
  { id: 98, name: "ONT District University of Waterloo Event" },
  { id: 99, name: "PNW District West Valley Event" },
  { id: 100, name: "Hudson Valley Regional" },
  { id: 101, name: "IN District Plainfield event sponsored by Toyota"},
  { id: 102, name: "CHS District Central Maryland Event sponsored by Leidos" },
  { id: 103, name: "NC District UNC Asheville Event" },
  { id: 104, name: "MAR District Montgomery Event" },
  { id: 105, name: "MAR District Seneca Event" },
  { id: 106, name: "ONT District York Univeristy Event" },
  { id: 107, name: "NE District Rhode Island Event CHS District Southwest Virgina Event" },
  { id: 108, name: "PNW District Glacier Peak Event" },
  { id: 109, name: "First Istael District Championship" },
  { id: 110, name: "Slicon Valley Regional" },
  { id: 111, name: "Ventura Regional" },
  { id: 112, name: "First Chesapeake Districk Championship" },
  { id: 113, name: "South Florida Regional" },
  { id: 114, name: "Idaho Regional" },
  { id: 115, name: "Minnesota 10,000 Lakes Regional" },
  { id: 116, name: "Minnesota North Star Regional" },
  { id: 117, name: "Buckeye Regional" },
  { id: 118, name: "Oklahoma Regional" },
  { id: 119, name: "El Paso Regional" },
  { id: 120, name: "PCH District Duluth Event" },
  { id: 121, name: "IN District Tippecanoe Event" },
  { id: 122, name: "FIM District East Kentwood Event" },
  { id: 123, name: "FIM District Livonia Event" },
  { id: 124, name: "FIM District Shepherd Event" },
  { id: 125, name: "FIM District Troy Event" },
  { id: 126, name: "NC District Forsyth County Event"},
  { id: 127, name: "NE District UNH Event" },
  { id: 128, name: "ONT District North Bay Event" },
  { id: 129, name: "PNW District Lake Oswego Event" },
  { id: 130, name: "PNW District Auburn Mountainview Event" },
  { id: 131, name: "Canadian Rockies Regional" },
  { id: 132, name: "Arizona West Regional" },
  { id: 133, name: "Aerospace Valley Regional" },
  { id: 134, name: "Peachtree Districgt State Championship" },
  { id: 135, name: "Midwest Regional" },
  { id: 136, name: "FIRST Mid-Atlantic District Championship" },
  { id: 137, name: "Pacific Northwest District Championship" },
  { id: 138, name: "Lone Star South Regional" },
  { id: 139, name: "Alamo Regional" },
  { id: 140, name: "Seven Rivers Regional" },
  { id: 141, name: "FIM District Alpena Event" },
  { id: 142, name: "FIM District Ann Arbor Pioneer Event" },
  { id: 143, name: "FIM District Forest Hills Event" },
  { id: 144, name: "FIM District Lakeview Event" },
  { id: 145, name: "FIM District Lake Superior State University Event" },
  { id: 146, name: "FIM District Marysville Event" },
  { id: 147, name: "Central Valley Regional" },
  { id: 148, name: "New York City Regional" },
  { id: 149, name: "NE District Hartford Event" },
  { id: 150, name: "NE District Greater Boston Event" },
  { id: 151, name: "FIRST North Carolina State Championship" },
  { id: 152, name: "ONT District McMaster University Event" },
  { id: 153, name: "ONT District Western University, Western Engineering Event" },
  { id: 154, name: "SBPLI Long Island Regional #1" },
  { id: 155, name: "Michigan State Championship" },
  { id: 156, name: "Michigan State Championship - Feild 1 Division" },
  { id: 157, name: "Michigan State Championship - Feild 2 Division" },
  { id: 158, name: "Michigan State Championship - Feild 3 Division" },
  { id: 159, name: "Michigan State Championship - Feild 4 Division" },
  { id: 160, name: "New England District Championship" },
  { id: 161, name: "FIRST Ontario Provincial Championship" },
  { id: 162, name: "FIRST Ontario Provincial Championship - Science Division" },
  { id: 163, name: "FIRST Ontario Provincial Championship - Technology Division" },
  { id: 164, name: "Indaiana State Championship" },
  { id: 165, name: "SBPLI Long Island Regional #2" },
  { id: 166, name: "Carver Division" },
  { id: 167, name: "FIRST Championship(Houston)" },
  { id: 168, name: "Galileo Division" },
  { id: 169, name: "Hopper Division" },
  { id: 170, name: "Newton Division" },
  { id: 171, name: "Roebling Division" },
  { id: 172, name: "Turing Division" },
  { id: 173, name: "Archimedes Divsion" },
  { id: 174, name: "Carson Divison" },
  { id: 175, name: "FIRST Championship(Detroit)" },
  { id: 176, name: "Curie Division" },
  { id: 177, name: "Curie Division" },
  { id: 178, name: "Daly DivisonDarwin Division" },
  { id: 179, name: "Tesla Divison" },
];
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

 class RegionalScreen extends Component{
   constructor(props){
     super(props);
     this.state = {
       events: 'None',
       searchTerm: ""
     }

   }
   static navigationOptions = {
     title: null ,
     header: null,
   }


    _RegEvents () {
      this.setState({events: 'Bayou Regional' });
      let events = this.state.events

      // Retrieve the existing messages
      AsyncStorage.getItem('events', (res)  => {
        var eventss

        // If this is the first time, set up a new array
        if (res === null) {
          eventss = []
        }else {
          eventss = JSON.parse(res)
        }



        // Save the messages
        AsyncStorage.setItem('events', events, (res) => {})
        this.props.navigation.navigate('TeamNumScreen');
      })
    }
    render(){
     return(
       <View style={styles.MainContainer}>

       <View style={styles.block}></View>
       <Text style={styles.instructions2}>Regional:</Text>
       <View style={styles.instructions3container}>
       <Text style={styles.instructions3}>Please Ensure that your selected Regional is shown below before moving on.</Text>
      </View>
      <TextInput
        placeholder={"Search"}
        style={styles.sSearchBar}
        onChangeText={searchTerm => this.setState({ searchTerm })}
      />
      <TouchableHighlight
       onPress={this._RegEvents.bind(this)}
      underlayColor='#fe891f'>
      <Image
        source={require('../Images/NextButton.png')}
        style={styles.arrow}
      />
          </TouchableHighlight>
         <View>

             <SearchableFlatlist
               searchProperty={"name"}
               searchTerm={this.state.searchTerm}
               data={data}
               containerStyle={{ flex: 1,}}
               renderItem={({ item }) => <Text style={styles.sTextItem}>{item.name}</Text>}
               keyExtractor={item => item.id}
             />



             </View>









          <Text style={{color: 'white', fontSize: 25, textAlign:'center'}}>Selected: {this.state.events}</Text>
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
  sTextItem: {
   height: 50,
   width: "100%",
   textAlign: "center",
   textAlignVertical: "center",
   fontSize: 18
 },
 sSearchBar: {
   paddingHorizontal: 10,
   margin: 10,
   height: 50,
   borderColor: "gray",
   borderWidth: 0,
   fontSize: 18,
   width: '100%',
   alignItems: 'center',
   overlayColor: 'dark blue',
   textAlign: 'center'
 },
 MainContainer:{
   backgroundColor: '#fe891f',
   flex: 1,
   alignItems: 'center',
   width: '100%'
 },
instructions2:{
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 24,
},
instructions3:{
  color: '#fff',
  fontSize: 12,
},
instructions3container:{
width: 300,
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
 top: 0,
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
export default RegionalScreen;