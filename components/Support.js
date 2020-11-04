import React,{Component} from 'react';
import {View,Text,StyleSheet,ImageBackground} from 'react-native';
import { Button } from 'react-native-paper';


export default class Support extends Component
{


render()
{

return (



<View style = {{justifyContent:'center',alignItems:'center'}}>

<Text style={{fontSize:20,paddingTop:60,color:'#4E4E4E'}}>Want to Join the Conversation?</Text>
<Text style={{fontSize:20,paddingTop:10,color:'#4E4E4E'}}>Request a Song?</Text>

<Text style={{fontSize:53,paddingTop:10,color:'#4E4E4E'}}>It’s Simple!</Text>
<Text style={{fontSize:44,paddingTop:10,color:'#4E4E4E',marginTop:50}}>(805) 2-TEXT-US</Text>
<View>
<Text style={{fontSize:29,paddingTop:10,color:"#4E4E4E"}}>(805) 283-9887</Text>
<Text style={{fontSize:25,textAlign:'left',color:'#4E4E4E'}}>or…</Text>

<ImageBackground source={require('../assets/images/iphone.png')} style={styles.backgroundImage} >  
<View style={styles.TextViewStyleRed}>

<Text style={{ alignItems: 'center',color:'#ffffff',fontSize:15}}>Click Here to</Text>
<Text style={{ alignItems: 'center',color:'#ffffff',fontSize:32}}>Text US!</Text>

</View>

</ImageBackground>
</View>

        </View>


);

}

}
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
    backgroundImage: {
       
        width: 300,
        height: 300,
        resizeMode: 'cover'
    },
    TextViewStyleRed: {
        marginRight:100,
        width:214,
        height:73,
        alignItems: 'center',
        alignContent:'center',
        marginLeft:1,
        marginTop:20,
        paddingTop:5,
        paddingBottom:0,
        backgroundColor:'#830000',
        borderRadius:30,
        borderWidth: 0,
        borderColor: '#fff'
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
  });
  const addItemStyles = StyleSheet.create({
    wrapper: {
      marginTop:20,
        padding: 5,
        backgroundColor: '#484848'
    },
    inputLabels: {
        fontSize: 16,
        color: '#000000',
        marginBottom: 7,
    },
    inputField: {
        backgroundColor: '#EEEEEE',
        padding: 10,
        color: '#505050',
        height: 50
    },
    inputWrapper: {
        paddingBottom: 20,
    },
    saveBtn: {
        backgroundColor: '#003E7D',
        alignItems: 'center',
        padding: 12,
    },
    saveBtnText: {
        color: '#FFFFFF',
        fontSize: 18,
    }
  
  
  });
  