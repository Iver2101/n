import React, { useState } from 'react';


import {
    FlatList,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,TouchableOpacity,Text

} from 'react-native';
import Banner from '../smallComps/eventBanner';
import { Button } from '@rneui/base';
import MyButton from '../smallComps/myButton';
import EventMenu from '../smallComps/eventMenu';

const onPress = () => {
    console.log("hei")
}

const Event = () => {
    return (
<><Banner />
<MyButton text={"hei"} onPress={onPress} btnStyles={{backgroundColor:"black"}}/>

<EventMenu/>

</>
        
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007AFF', // or any other color you prefer
        borderRadius: 10,
        paddingHorizontal: 2,
        paddingVertical: 2,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF', // or any other color you prefer
        fontSize: 14,
    }
});
export default Event;