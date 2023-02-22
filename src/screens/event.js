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
import Banner from '../smallComps/eventBanner';

const Event = () => {
    return (
        <Banner styles={styles.banner}/>
    );
}
 

const styles = StyleSheet.create({
    banner: {
        height:250,
        width: "100%",
        flex:1,
    }
})

export default Event;