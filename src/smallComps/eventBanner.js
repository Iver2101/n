import React, { useState } from 'react';
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

import { Card, ListItem, Button, Icon } from '@rneui/base'

const Banner = () => {
    return (<View>
        <Image style={styles.img}
        
        source={{uri: "https://e24.no/vgc/drfront/images/2023/02/16/c=0,24,1280,679;w=980;h=520;147052.jpg?format=auto"}}
        />
    </View>);
}


const styles = StyleSheet.create({
    item: {
        backgroundColor:"green",
        width:"100%"
    },
    img: {
        width:"100%",
        height:200
    }
})
export default Banner;