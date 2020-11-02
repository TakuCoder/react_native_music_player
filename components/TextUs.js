import React,{Component} from 'react';
import {View,Text} from 'react-native';
import { Button } from 'react-native-paper';


export default class TextUs extends Component
{


render()
{

return (

<View style = {{justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:20,paddingTop:60}}>Want to Join the Conversation?</Text>
<Text style={{fontSize:20,paddingTop:10}}>Request a Song?</Text>

<Text style={{fontSize:53,paddingTop:10}}>It’s Simple!</Text>
<Text style={{fontSize:44,paddingTop:10}}>(805) 2-TEXT-US</Text>
<Text style={{fontSize:29,paddingTop:10}}>(805) 283-9887</Text>
<Text>or…</Text>
<Button>Click Here to</Button>
</View>

);

}

}
