import React,{Component} from 'react';
import {View,Text,FlatList,Button,Image,ImageBackground,TouchableOpacity,StyleSheet} from 'react-native';
import { ListItem } from "react-native-elements"
import { parse } from 'fast-xml-parser';
export default class Playlist extends Component
{

    constructor() {
        super();
    
        this.state = {
          dataSource: [{key:1, name:'const abc item'}, {key:2, name:'const def item'}],
          data:[]
        };
        this.getRemoteData();
      }

      // <Text>{item.title._text}</Text>
      // <Image
      // source={{ uri: item.cover._text}}
      // style={{ width: 40, height: 40, margin: 6 }}
      // />


render() {
    return (
      <View>
             <View style={styles.TextViewStyleRed}>
            <Text style={styles.TextStyle1}>The Revocation Radio</Text>
            <Text style={styles.TextStyle2}> Playlist </Text>
          </View>
        <FlatList
         contentContainerStyle={headerStyles.gap}
          data={this.state.data}
          renderItem={({item,index}) => 
          

          

<TouchableOpacity style={headerStyles.row}>
   
   
   {item.cover._text == "" ? <ImageBackground style={headerStyles.image} source={{ uri: item.cover._text}} /> : <ImageBackground style={headerStyles.image} source={{ uri: item.cover._text}} /> }
   <View style={headerStyles.column}>
    <Text>{item.title._text}</Text>
     
   </View>
    <Text style={headerStyles.duration}>{index}</Text>
    <Text style={headerStyles.duration}>{item.duration._text}</Text>
 </TouchableOpacity>

       
  
        }
          
        />
        
      </View>
    );
  }




getRemoteData = () => 


{
   


fetch('https://streamdb9web.securenetsystems.net/player_status_update/REVRADIO_history.xml')
.then((response) => response.text())
.then((textResponse) => {
 

    var convert = require('xml-js');
    var xml = textResponse
    var result1 = convert.xml2js(xml, {compact: true, spaces: 1});
    console.log(result1.playHistory.song);
    this.setState({ data: result1.playHistory.song})
})
.catch((error) => {
    console.log(error);
});

  }

}
const headerStyles = StyleSheet.create({
  headerStyle: {
    position: "absolute",
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    elevation: 0
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "grey",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 8,
    marginTop:5,
    marginBottom:5
  },
  column: {
    flex: 1,
    marginLeft: 16,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  headerTitle: {
    
  },
  headerIconContainer: {
    flexDirection: "row"
  },
  headerIcon: {
    color: "#FFFFFF",
    marginRight: 16,
   
  }, image: {
    marginTop: 4,
    borderRadius: 0,
    marginLeft: 0,
    height: 100,
    width: 100
  },
  gap:{
    margin: 0
  }
});

const styles = StyleSheet.create(
  {
  MainContainer: {
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  TextViewStyle: {
    borderWidth: 1,

    borderColor: '#2B2A2A',
    width: '100%',

    backgroundColor: '#2B2A2A',
  },
  TextViewStyleRed: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#830000',
    width: '100%',

    backgroundColor: '#830000',
  },



  TextViewStyleGrey: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#830000',
    width: '100%',

    backgroundColor: '#830000',
  },


  TextViewStyle2: {
    borderWidth: 0,
    paddingTop: 10,
    borderColor: '#2B2A2A',
    width: '100%',

    backgroundColor: '#ffffff',
  },

  TextStyle1: {
    fontSize: 17,
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 0,
  },

  TextStyle2: {
    fontSize: 29,
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 0,
  },
  TextStyle3: {
    fontSize: 12,
    paddingLeft: 40,
    paddingRight: 40,

    textAlign: 'left',
    color: '#4E4E4E',
    padding: 0,
  },

  container: {
    flex: 1,

    justifyContent: 'center',

    paddingTop: 1,

    backgroundColor: '#ecf0f1',

    padding: 8,
  },
  scrollView: {
    backgroundColor: '#ffffff',
    marginHorizontal: 0,
    
  },

  TextViewStyleRed: {
    borderWidth: 1,
    marginTop: 0,
    borderColor: '#830000',
    width: '100%',

    backgroundColor: '#830000',
  }
});