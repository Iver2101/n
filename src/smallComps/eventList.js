import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext, useState } from 'react';
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
import { Cont } from '../screens/starred';


const Item = ({ title, img, eventStart, eventEnd, location, manager, func }) => {
    return (

        <TouchableOpacity onPress={func}
            style={styles.item}>
            <Image
                style={styles.image}
                source={{ uri: img }}
            />
            <Text>{title}</Text>
            <Text>{eventStart + " - " + eventEnd}</Text>
            <Text>{location}</Text>
            <Text>{manager}</Text>
        </TouchableOpacity>)
}




const EventList = ({ elements, navigation }) => {

    const { count, setCount } = useContext(Cont)


    const onPress = (item) => {
        navigation.navigate("Event", { item })
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
        <View style={styles.wrapper}>
            <FlatList
                data={elements}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.id}
                style={{ width: "95%", alignContent: "center", backgroundColor: "blue" }}
            />
        </View>

    );
}


const styles = StyleSheet.create({
    wrapper: {
        marginTop: 2,
        height:1000

    },
    item: {
        padding: 20,
        margin: 10,
        borderRadius: 15,
        backgroundColor: "#A59D9D"
    },
    image: {
        height: 20,
        width: 60
    }
})



export default EventList;
