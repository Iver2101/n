import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Event from "../screens/event";
import EventList from "../smallComps/eventList";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Tab = createBottomTabNavigator();
const eventNav = createNativeStackNavigator();


const Tabs = ({ elements }) => {
    return (
        <NavigationContainer>


            <Tab.Navigator
                initialRouteName="Start"
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,

                }}
            >
                <Tab.Screen
                    name="Start"
                    children={() => {
                        return<eventNav.Navigator>
                                <eventNav.Screen name="EventList" children={() => <EventList elements={elements}/>}/>
                                <eventNav.Screen name="Event" component={Event}/>
                            </eventNav.Navigator>
                            
                    }}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.iconContainer}>
                                <Ionicons
                                    name="home-outline"
                                    style={styles.icon}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen

                    name="Starred"
                    component={Event}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.iconContainer}>
                                <AntDesign
                                    name="staro"
                                    style={styles.icon}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="User"
                    component={Event}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.iconContainer}>
                                <Ionicons
                                    name="person-outline"
                                    style={styles.icon}
                                />
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>

    );
};

const styles = StyleSheet.create({
    iconContainer: {
    },
    icon: {
        fontSize: 30,
        alignSelf: "center",
        color: "#696969",
    },
});

export default Tabs;