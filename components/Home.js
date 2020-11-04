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





import Header from '../components/playerComponents/Header';
//import AlbumArt from './AlbumArt';
//import TrackDetails from './TrackDetails';
import SeekBar from '../components/playerComponents/SeekBar';
import Controls from '../components/playerComponents/Controls';
import Video from 'react-native-video';


class Home extends React.Component
{
  constructor(props) 
  {
    super(props);

    this.state = {
      paused: true,
      totalLength: 1,
      currentPosition: 0,
      selectedTrack: 0,
      repeatOn: false,
      shuffleOn: false,
    };
  }

  setDuration(data) {
    // console.log(totalLength);
    this.setState({totalLength: Math.floor(data.duration)});
  }

  setTime(data) {
    //console.log(data);
    this.setState({currentPosition: Math.floor(data.currentTime)});
  }

  seek(time) {
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.setState({
      currentPosition: time,
      paused: false,
    });
  }
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


  //const track = this.props.tracks[this.state.selectedTrack];
  const video = this.state.isChanging ? null : (
    <Video source={{uri: 'http://ice42.securenetsystems.net/REVRADIO'}} // Can be a URL or a local file.
      ref="audioElement"
      paused={this.state.paused}               // Pauses playback entirely.
      resizeMode="cover"           // Fill the whole screen at aspect ratio.
      repeat={true}                // Repeat forever.
      onLoadStart={this.loadStart} // Callback when video starts to load
      onLoad={this.setDuration.bind(this)}    // Callback when video loads
      onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
      onEnd={this.onEnd}           // Callback when playback finishes
      onError={this.videoError}    // Callback when video cannot be loaded
      style={styles.audioElement} />
  );



return (

<View style={styles.container}>
            <View style={styles.audio}>
        <StatusBar hidden={true} />
        <Header message="Playing From Charts" />
     
   
        {/* <SeekBar
          onSeek={this.seek.bind(this)}
          trackLength={this.state.totalLength}
          onSlidingStart={() => this.setState({paused: true})}
          currentPosition={this.state.currentPosition} /> */}
        <Controls
          onPressRepeat={() => this.setState({repeatOn : !this.state.repeatOn})}
          repeatOn={this.state.repeatOn}
          shuffleOn={this.state.shuffleOn}
 
          onPressShuffle={() => this.setState({shuffleOn: !this.state.shuffleOn})}
          onPressPlay={() => this.setState({paused: false})}
          onPressPause={() => this.setState({paused: true})}
          onBack={this.onBack.bind(this)}
          onForward={this.onForward.bind(this)}
          paused={this.state.paused}/>
        {video}
        <View style={styles.TextViewStyleRed}>



</View>
</View>
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
const styles = 
{
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
  audio: {
    position: 'absolute',
    bottom:0,
    left:0,
    right:0,
    backgroundColor: '#ff00ff',
    
  },
  audioElement: {
    height: 0,
    width: 0,
  }
};