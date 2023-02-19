import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Event from "../screens/event";

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
       
    <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { 
                    position: 'absolute',
                    padding: 0,
                    left: 50,
                    right: 50,
                    paddinHorizontal: 20,
                    bottom: -180,
                    height: 45,
                    borderRadius: 100,
                    backgroundColor: "#FAF9F6",
                },      
            }}
        >
        <Tab.Screen
            name="Home"
            component={Event}
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