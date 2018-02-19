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
  { id: 1, regional: "Monterrey Regional"},
  { id: 2, regional: "Great Notrthern Regional" },
  { id: 3, regional: "Miami Valley Regional" },
  { id: 4, regional: "Festival de Robotique - Montreal Regional" },
  { id: 5, regional: "Palmetto Regional" },
  { id: 6, regional: "Utah Regional" },
  { id: 7, regional: "NE District Worcester Polytechnic Institute Event" },
  { id: 8, regional: "FIM District Gibraltar Event" },
  { id: 9, regional: "FIM District Kettering University Event #1" },
  { id: 10, regional: "FIM District Southfeild Event" },
  { id: 11, regional: "FIM District Traverse City Event" },
  { id: 12, regional: "PNW District Clackamas Academy Event" },
  { id: 13, regional: "Central New York Regional" },
  { id: 14, regional: "Dallas Regional" },
  { id: 15, regional: "PCH District Gainesville Event" },
  { id: 16, regional: "NE District Granite State Event" },
  { id: 17, regional: "ONT District Georgian College Event" },
  { id: 18, regional: "MAR District Hatboro-Horsham Event" },
  { id: 19, regional: "CHS District Northern Virginia " },
  { id: 20, regional: "PNW District Mount Vernon Event" },
  { id: 21, regional: "ISR District Event #1" },
  { id: 22, regional: "ISR District Event #2" },
  { id: 23, regional: "Arkansas Rock City Regional" },
  { id: 24, regional: "Arizona North Regional" },
  { id: 25, regional: "San Diego Regional presented by Qualcomm" },
  { id: 26, regional: "Orlando Regional"},
  { id: 27, regional: "Shenzhen Regional" },
  { id: 28, regional: "Lake Superior Regional" },
  { id: 29, regional: "Northern Lights Regional" },
  { id: 30, regional: "St. Louis Regional" },
  { id: 31, regional: "Hub City Regional" },
  { id: 32, regional: "PCH District Dalton Event" },
  { id: 33, regional: "FIM District Center Line Event" },
  { id: 34, regional: "FIM District Kettering University Event #2" },
  { id: 35, regional: "FIM District St. Joseph Event" },
  { id: 36, regional: "FIM District Waterford Event" },
  { id: 37, regional: "PNW District Wilsonville Event" },
  { id: 38, regional: "Heartland Regional" },
  { id: 39, regional: "NE District Waterbury Event" },
  { id: 40, regional: "IN District St. Joseph Event" },
  { id: 41, regional: "NE District SE Mass Event" },
  { id: 42, regional: "NC District Pitt County Event" },
  { id: 43, regional: "MAR District Mount Olive Event" },
  { id: 44, regional: "MAR District Westtown Event" },
  { id: 45, regional: "CHS District Greater DC Event co-sponsored by Micron" },
  { id: 46, regional: "CHS District CentraL Virginia Event" },
  { id: 47, regional: "Istanbul Regional" },
  { id: 48, regional: "Southern Cross Regional" },
  { id: 49, regional: "ISR District Event #3" },
  { id: 50, regional: "Canadian Pacific Regional" },
  { id: 51, regional: "ISR District Event #4"},
  { id: 52, regional: "Rocket City Regional" },
  { id: 53, regional: "Los Angeles Regional" },
  { id: 54, regional: "Central Illinois Regional" },
  { id: 55, regional: "Greater Kansas City Regional" },
  { id: 56, regional: "Santa Fe Regional" },
  { id: 57, regional: "Finger Lakes Regional" },
  { id: 58, regional: "New York Tech Valley Regional" },
  { id: 59, regional: "Lone Star Central Regional" },
  { id: 60, regional: "PCH District Albany Event" },
  { id: 61, regional: "FIM District Escanaba Event" },
  { id: 62, regional: "FIM District Gaylord Event" },
  { id: 63, regional: "FIM District Gull Lake Event" },
  { id: 64, regional: "FIM District Lincoln Event" },
  { id: 65, regional: "FIM District Milford Event" },
  { id: 66, regional: "ONT District Ryerson University Event" },
  { id: 67, regional: "PNW District SunDome Event" },
  { id: 68, regional: "San Francisco Regional" },
  { id: 69, regional: "Shanghai Regional" },
  { id: 70, regional: "South Pacific Regional" },
  { id: 71, regional: "NE District Southern CT Event" },
  { id: 72, regional: "NE District North Shore Event" },
  { id: 73, regional: "CHS District Southern Maryland Event" },
  { id: 74, regional: "NE District North Shore Event" },
  { id: 75, regional: "CHS District Southern Maryland Event" },
  { id: 76, regional: "NC District UNC Pembroke Event"},
  { id: 77, regional: "MAR District Bridgewater-Raritan Event" },
  { id: 78, regional: "MAR District Springside Chestnut Hill Academy Event" },
  { id: 79, regional: "CHS District Hampton Roads event sponsored by Newport News " },
  { id: 80, regional: "PNW District Auburn Event" },
  { id: 81, regional: "Sacramento Regional" },
  { id: 82, regional: "Orange County Regional" },
  { id: 83, regional: "Colorado Regional" },
  { id: 84, regional: "Hawaii Regional" },
  { id: 85, regional: "Iowa Regional" },
  { id: 86, regional: "Bayou Regional" },
  { id: 87, regional: "Laguna Regional" },
  { id: 88, regional: "Las Vegas Regional" },
  { id: 89, regional: "Greater Pittsburgh Regional" },
  { id: 90, regional: "Smoky Mountains Regional" },
  { id: 91, regional: "Wisconsin Regional" },
  { id: 92, regional: "PCH District Columbus Event" },
  { id: 93, regional: "NE District Columbus Event" },
  { id: 94, regional: "FIM District Belleville Event" },
  { id: 95, regional: "FIM District Lansing Event" },
  { id: 96, regional: "FIM District Midland Event" },
  { id: 97, regional: "FIM District West Michigan Event" },
  { id: 98, regional: "ONT District University of Waterloo Event" },
  { id: 99, regional: "PNW District West Valley Event" },
  { id: 100, regional: "Hudson Valley Regional" },
  { id: 101, regional: "IN District Plainfield event sponsored by Toyota"},
  { id: 102, regional: "CHS District Central Maryland Event sponsored by Leidos" },
  { id: 103, regional: "NC District UNC Asheville Event" },
  { id: 104, regional: "MAR District Montgomery Event" },
  { id: 105, regional: "MAR District Seneca Event" },
  { id: 106, regional: "ONT District York Univeristy Event" },
  { id: 107, regional: "NE District Rhode Island Event CHS District Southwest Virgina Event" },
  { id: 108, regional: "PNW District Glacier Peak Event" },
  { id: 109, regional: "First Istael District Championship" },
  { id: 110, regional: "Slicon Valley Regional" },
  { id: 111, regional: "Ventura Regional" },
  { id: 112, regional: "First Chesapeake Districk Championship" },
  { id: 113, regional: "South Florida Regional" },
  { id: 114, regional: "Idaho Regional" },
  { id: 115, regional: "Minnesota 10,000 Lakes Regional" },
  { id: 116, regional: "Minnesota North Star Regional" },
  { id: 117, regional: "Buckeye Regional" },
  { id: 118, regional: "Oklahoma Regional" },
  { id: 119, regional: "El Paso Regional" },
  { id: 120, regional: "PCH District Duluth Event" },
  { id: 121, regional: "IN District Tippecanoe Event" },
  { id: 122, regional: "FIM District East Kentwood Event" },
  { id: 123, regional: "FIM District Livonia Event" },
  { id: 124, regional: "FIM District Shepherd Event" },
  { id: 125, regional: "FIM District Troy Event" },
  { id: 126, regional: "NC District Forsyth County Event"},
  { id: 127, regional: "NE District UNH Event" },
  { id: 128, regional: "ONT District North Bay Event" },
  { id: 129, regional: "PNW District Lake Oswego Event" },
  { id: 130, regional: "PNW District Auburn Mountainview Event" },
  { id: 131, regional: "Canadian Rockies Regional" },
  { id: 132, regional: "Arizona West Regional" },
  { id: 133, regional: "Aerospace Valley Regional" },
  { id: 134, regional: "Peachtree Districgt State Championship" },
  { id: 135, regional: "Midwest Regional" },
  { id: 136, regional: "FIRST Mid-Atlantic District Championship" },
  { id: 137, regional: "Pacific Northwest District Championship" },
  { id: 138, regional: "Lone Star South Regional" },
  { id: 139, regional: "Alamo Regional" },
  { id: 140, regional: "Seven Rivers Regional" },
  { id: 141, regional: "FIM District Alpena Event" },
  { id: 142, regional: "FIM District Ann Arbor Pioneer Event" },
  { id: 143, regional: "FIM District Forest Hills Event" },
  { id: 144, regional: "FIM District Lakeview Event" },
  { id: 145, regional: "FIM District Lake Superior State University Event" },
  { id: 146, regional: "FIM District Marysville Event" },
  { id: 147, regional: "Central Valley Regional" },
  { id: 148, regional: "New York City Regional" },
  { id: 149, regional: "NE District Hartford Event" },
  { id: 150, regional: "NE District Greater Boston Event" },
  { id: 151, regional: "FIRST North Carolina State Championship" },
  { id: 152, regional: "ONT District McMaster University Event" },
  { id: 153, regional: "ONT District Western University, Western Engineering Event" },
  { id: 154, regional: "SBPLI Long Island Regional #1" },
  { id: 155, regional: "Michigan State Championship" },
  { id: 156, regional: "Michigan State Championship - Feild 1 Division" },
  { id: 157, regional: "Michigan State Championship - Feild 2 Division" },
  { id: 158, regional: "Michigan State Championship - Feild 3 Division" },
  { id: 159, regional: "Michigan State Championship - Feild 4 Division" },
  { id: 160, regional: "New England District Championship" },
  { id: 161, regional: "FIRST Ontario Provincial Championship" },
  { id: 162, regional: "FIRST Ontario Provincial Championship - Science Division" },
  { id: 163, regional: "FIRST Ontario Provincial Championship - Technology Division" },
  { id: 164, regional: "Indaiana State Championship" },
  { id: 165, regional: "SBPLI Long Island Regional #2" },
  { id: 166, regional: "Carver Division" },
  { id: 167, regional: "FIRST Championship(Houston)" },
  { id: 168, regional: "Galileo Division" },
  { id: 169, regional: "Hopper Division" },
  { id: 170, regional: "Newton Division" },
  { id: 171, regional: "Roebling Division" },
  { id: 172, regional: "Turing Division" },
  { id: 173, regional: "Archimedes Divsion" },
  { id: 174, regional: "Carson Divison" },
  { id: 175, regional: "FIRST Championship(Detroit)" },
  { id: 176, regional: "Curie Division" },
  { id: 177, regional: "Curie Division" },
  { id: 178, regional: "Daly DivisonDarwin Division" },
  { id: 179, regional: "Tesla Divison" },
];
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

 class RegionalScreen extends Component{
   constructor(props){
     super(props);
     this.state = {
       searchTerm: "",
       regional: ''
     }

   }
   static navigationOptions = {
     title: null ,
     header: null,
   }



    _RegEvents () {

      let regional = this.state.regional

      // Retrieve the existing messages
      AsyncStorage.getItem('regional', (res)  => {
        var regionals

        // If this is the first time, set up a new array
        if (res === null) {
          regionals = []
        }else {
          regionals = JSON.parse(res)
        }



        // Save the messages
        AsyncStorage.setItem('regional', regional, (res) => {})
        this.props.navigation.navigate('TeamNumScreen');
      })
    }
    render(){
     return(
       <View style={styles.MainContainer}>

       <View style={styles.block}></View>
       <Text style={styles.instructions2}>Regional:</Text>
       <Text style={styles.instructions2}>{this.state.regional}</Text>
       <View style={styles.instructions3container}>
       <Text style={styles.instructions3}>Please Ensure that your selected Regional is shown below before moving on.</Text>
      </View>
      <TextInput
        placeholder={"Search"}
        style={styles.sSearchBar}
        onChangeText={searchTerm => this.setState({ searchTerm, regional })}
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
               searchProperty={"regional"}
               searchTerm={this.state.searchTerm}
               data={data}
               containerStyle={{ flex: 1,}}
               renderItem={({ item }) => <Text onPress={regional => this.setState({ regional: item.regional})} style={styles.sTextItem}>{item.regional}</Text>}
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
   width: 100,
   alignItems: 'center',
   overlayColor: 'dark blue',
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







/** NOTE: STRUCTURE IS IMPORTANT. FOR EXAMPLE, FOR SOMETHINGS TO WORK YOU HAVE TO PUT THEM IN THE RIGHT PLACE. IN THIS CASE, YOU NEED TO CHANGE THE STATE INLINE INSTEAD OF IN A FUNCTION. */
