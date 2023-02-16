import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Event from "../screens/event";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <NavigationContainer>
<Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarstyle: {
                    position: "absolute",
                    padding: 0,
                    left: 100,
                    right: 100,
                    paddinHorizontal: 20,
                    bottom: 50,
                    height: 60,
                    borderRadius: 100,
                    backgroundColor: "#ffffff",
                    shadowColor: "#393939",
                    shadowOffset: {
                        width: 3,
                        height: 3,
                    },
                    shadowOpacity: 0.15,
                    shadowRadius: 5,
                    elevation: 0,
                },
            }}
        >
        <Tab.Screen
            name="Home"
            component={Event}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.iconContainer}>
                        <MaterialIcons
                            name="home"
                            style={styles.icon}
                        />
                        <Text style={styles.txtStyle}>Home</Text>
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
                        <MaterialIcons
                            name="star"
                            style={styles.icon}
                        />
                        <Text style={styles.txtStyle}>Starred</Text>
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
                            name="person"
                            style={styles.icon}
                        />
                        <Text style={styles.txtStyle}>User</Text>
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
        alignItems: "center",
        justifyContent: "center",
        top: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    txtStyle: {
        fontSize: 12,
        color: "#000000",
        fontWeight: "bold",
    },
});



export default Tabs;