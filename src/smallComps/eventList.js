import { useNavigation } from '@react-navigation/native';
import React, { useState, Component } from 'react';

import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Touchable,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';


const Item = ({ title, img, eventStart, eventEnd, location, manager, func }) => {
    return (

        <TouchableOpacity onPress={func}
            style={styles.item}>
            <Image
                style={styles.image}
                source={{ uri: img }}
            />
            <Text style = {styles.titleStyle}>{title}</Text>
            <Text style = {styles.dateStyle}>{eventStart + " - " + eventEnd}</Text>
            <Text style = {styles.locationStyle}>{location}</Text>
            <Text style = {styles.managerStyle}>{manager}</Text>
        </TouchableOpacity>)
}




const EventList = ({ elements}) => {
    const navigation = useNavigation()
    console.log(navigation);

    const onPress = (item) => {
        navigation.navigate("Event", {item})
    }

    const renderItem = ({ item }) => {
        return <Item
            title={item.title}
            func={() => onPress(item.id)}
            img={item.img}
            eventStart={item.eventStart}
            eventEnd={item.eventEnd}
            location={item.location}
            manager={item.manager}
        />
    }
    
    return (
        <FlatList
            data={elements}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id}
            style={{ 
                width: "95%", 
                alignContent: "center", 
                alignSelf: "center"}}
        />
    );
}


const styles = StyleSheet.create({
    item: {
        marginTop: 50,
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10,
        margin: 5,
        borderRadius: 15,
        backgroundColor: "#f0f0f0",
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 15
    },
    titleStyle: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: "bold"
    },
    dateStyle: {
        marginLeft: -85,
        marginTop: 20,
        fontSize: 12,
        color: "#808080"
    },
    locationStyle: {
        marginLeft: -125,
        marginTop: 40,
        fontSize: 12,
        color: "#808080"
    },
    managerStyle: {
        marginLeft: -115,
        marginTop: 60,
        fontSize: 12,
        color: "#808080"
    }
    
})

export default EventList;
