import React,{ useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ToastAndroid,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
const About=()=>{
    return(
        <View style={{flex:1,paddingHorizontal:20}}>
        <Text style={{fontWeight:'bold',fontSize:20,textAlign:'center',paddingTop:20}}>About:</Text>
        <Text style={{textAlign:'left',fontSize:18,paddingTop:20,}}>Hello World!</Text>
        <Text style={{textAlign:'left',fontSize:18}}>I'm Manuhya</Text>
        <Text style={{textAlign:'left',fontSize:18}}>This app implements:</Text>
        <Text style={{textAlign:'left',fontSize:18}}>API_Calls</Text>
        <Text style={{textAlign:'left',fontSize:18}}>Bottom Tab Navigation</Text>
        <Text style={{textAlign:'left',fontSize:18}}>Drawer Navigation</Text>
        </View>

    );
}
export default About;