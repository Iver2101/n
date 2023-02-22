import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Event from '../screens/event';
import EventList from './eventList';




const Tab = createMaterialTopTabNavigator();

const elements = [{ id: 0, title: "NM I BRASS", img: "https://i.scdn.co/image/ab67616d0000b2739a50e85b3a378da0aadf3b4b", eventStart: "21. jan", eventEnd: "22.jan", location: "BERGENHVL", manager: "OSLO" },
{ id: 1, title: "VM I BRASS", img: "https://i.scdn.co/image/ab67616d0000b2739a50e85b3a378da0aadf3b4b", eventStart: "21. jan", eventEnd: "23.jan", location: "BERGENHVL", manager: "OSLO" },{ id: 5, title: "VM I BRASS", img: "https://i.scdn.co/image/ab67616d0000b2739a50e85b3a378da0aadf3b4b", eventStart: "21. jan", eventEnd: "23.jan", location: "BERGENHVL", manager: "OSLO" },{ id: 2, title: "VM I BRASS", img: "https://i.scdn.co/image/ab67616d0000b2739a50e85b3a378da0aadf3b4b", eventStart: "21. jan", eventEnd: "23.jan", location: "BERGENHVL", manager: "OSLO" },{ id: 3, title: "VM I BRASS", img: "https://i.scdn.co/image/ab67616d0000b2739a50e85b3a378da0aadf3b4b", eventStart: "21. jan", eventEnd: "23.jan", location: "BERGENHVL", manager: "OSLO" }]

const EventMenu = ({ names }) => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Beskrivelse" children={() => <EventList elements={elements}/>}/>
                <Tab.Screen name="Program" component={EventList} />
                <Tab.Screen name="Favoritter" component={EventList} />
                <Tab.Screen name="Resultter" component={EventList} />
            </Tab.Navigator>
        </NavigationContainer>

    );
}

export default EventMenu;