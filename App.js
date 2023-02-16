/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import EventList from './src/smallComps/eventList';
import Banner from './src/smallComps/eventBanner';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Event from './src/screens/event';
import { NavigationContainer } from '@react-navigation/native';
import Tab from './src/nav/Tabs';



const elements = [{ id: 0, title: "NM I BRASS", img: "https://i.scdn.co/image/ab67616d0000b2739a50e85b3a378da0aadf3b4b", eventStart: "21. jan", eventEnd: "22.jan", location: "BERGENHVL", manager: "OSLO" },
{ id: 1, title: "VM I BRASS", img: "https://i.scdn.co/image/ab67616d0000b2739a50e85b3a378da0aadf3b4b", eventStart: "21. jan", eventEnd: "23.jan", location: "BERGENHVL", manager: "OSLO" }]

const eventStack = createNativeStackNavigator();
const App = () => {
  return (
    <View>
<EventList elements={elements}/>    </View>


  );
}


const styles = StyleSheet.create({

})
export default App;