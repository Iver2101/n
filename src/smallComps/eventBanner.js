import React, { useState } from 'react';
import {
    FlatList,
    ImageBackground,
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

import { Card, ListItem, Button, Icon } from '@rneui/base'

const Banner = ({styles}) => {
    return (
    <ImageBackground style={styles} source={{ uri: "https://akamai.vgc.no/v2/images/d0131e19-b7fe-47fc-bfbb-e5784d61073a?fit=crop&format=auto&h=733&w=1100&s=dc5273f5ed0b3638485d7183e448ce914bd5b826" }}>
        <Text style={{ color: "pink",alignSelf:"flex-end"}}>aaaaasdfdsaf"!"#!¤#¤%</Text>
    </ImageBackground>
    );
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: "green",
        width: "100%"
    },
    img: {
        width: "100%",
        height: 200
    }
})
export default Banner;