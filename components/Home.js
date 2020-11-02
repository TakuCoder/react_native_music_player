import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import  {createBottomTabNavigation,createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-elements';

import About from './About'
import Player from './Player'
import TextUs from './TextUs'
import Playlist from './Playlist'
import Support from './Support'
class Home extends React.Component
{
  componentDidMount()
  {
    console.log("adsadad");
  	var self = this;
  	axios
  	.get("https://fakerestapi.azurewebsites.net/api/Authors", {
  		"Content-Type": "application/xml; charset=utf-8"
  	 })
  	.then(function(response) {

      //console.log(response.data);
  		//self.setState({ authors: response.data });
  	})
  	.catch(function(error) {
  		console.log(error);
  	});
  }

render()
{


  var parseString = require('xml2js').parseString;
var xml = "<root>Hello xml2js!</root>"
parseString(xml, function (err, result) {
    console.dir(result);
});

return (

<View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
<Text>Home</Text>
</View>

);

}

}

const TabNavigator = createMaterialBottomTabNavigator(

{

// ABOUT :
// {screen:About,
// navigationOptions:{
//   tabBarLabel:'Home',
//   activeColor:'#ff0000',
//   inactiveColor:'#000000',
//   barStyle:{backgroundColor:'#67bafb'},
//   tabBarIcon:()=>(
//     <View>
//     <Icon name={'home'} size={25} style={{color:'#ff0000'}}/>
//     </View>
//   )
// }
// },
// HOME :
// {screen:Home,
// navigationOptions:{
//   tabBarLabel:'aaa',
//   activeColor:'#ff0000',
//   inactiveColor:'#000000',
//   barStyle:{backgroundColor:'#67bafb'},
//   tabBarIcon:()=>(
//     <View>
//     <Icon name={'home'} size={25} style={{color:'#ff0000'}}/>
//     </View>
//   )
// }
// },
//
//
//
// PLAYER :
// {screen:Player,
// navigationOptions:{
//   tabBarLabel:'Player',
//   activeColor:'#ff0000',
//   inactiveColor:'#000000',
//   barStyle:{backgroundColor:'#67bafb'},
//   tabBarIcon:()=>(
//     <View>
//     <Icon name={'home'} size={25} style={{color:'#ff0000'}}/>
//     </View>
//   )
// }
// },
//
//
// TEXTUS :
// {screen:TextUs,
// navigationOptions:{
//   tabBarLabel:'Text Us',
//   activeColor:'#ff0000',
//   inactiveColor:'#000000',
//   barStyle:{backgroundColor:'#67bafb'},
//   tabBarIcon:()=>(
//     <View>
//     <Icon name={'home'} size={25} style={{color:'#ff0000'}}/>
//     </View>
//   )
// }
// }



  About:
  {
   screen: About,
   navigationOptions: {
   tabBarLabel: 'About Us',
   tabBarIcon: ({tintColor}) => (
    // <Icon name="ios-profile" color = {tintColor} size = {24}/>
     <Image
         source={require('../assets/radio.png')}
            style={{
             marginLeft: 1,
             marginTop: 1,
             width: 25,
             height: 25,
             tintColor: '#0A84FF',
       }}
     />
   )
  }
},
Playlist:
{
 screen: Playlist,
 navigationOptions: {
 tabBarLabel: 'Playlist',
 tabBarIcon: ({tintColor}) => (
  // <Icon name="ios-profile" color = {tintColor} size = {24}/>
   <Image
       source={require('../assets/playlist.png')}
          style={{
           marginLeft: 1,
           marginTop: 1,
           width: 25,
           height: 25,
           tintColor: '#0A84FF',
     }}
   />
 )
}
},



Player:
{
 screen: Player,
 navigationOptions: {
 tabBarLabel: '',
 tabBarIcon: ({tintColor}) => (
  // <Icon name="ios-profile" color = {tintColor} size = {24}/>
   <Image
       source={require('../assets/radio.png')}
          style={{
           marginLeft: 1,
           marginTop: 1,
           width: 25,
           height: 25,
           tintColor: '#0A84FF',
     }}
   />
 )
}
},

TextUs:
{
 screen: TextUs,
 navigationOptions: {
 tabBarLabel: 'Text Us',
 tabBarIcon: ({tintColor}) => (
  // <Icon name="ios-profile" color = {tintColor} size = {24}/>
   <Image
       source={require('../assets/textus.png')}
          style={{
           marginLeft: 1,
           marginTop: 1,
           width: 25,
           height: 25,
           tintColor: '#0A84FF',
     }}
   />
 )
}
},


Support:
{
 screen: Support,
 navigationOptions: {
 tabBarLabel: 'Support',
 tabBarIcon: ({tintColor}) => (
  // <Icon name="ios-profile" color = {tintColor} size = {24}/>
   <Image
       source={require('../assets/support.png')}
          style={{
           marginLeft: 1,
           marginTop: 1,
           width: 25,
           height: 25,
           tintColor: '#0A84FF',
     }}
   />
 )
}
},






},{  

  activeColor: '#0A84FF',  
  inactiveColor: '#ffffff',  
  barStyle: { backgroundColor: '#161616F0' },  
}, 

);

export default createAppContainer(TabNavigator);
