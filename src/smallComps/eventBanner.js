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
    ImageBackground
} from 'react-native';

import { Card, ListItem, Button, Icon } from '@rneui/base'

const Banner = () => {
    return (
<ImageBackground
        source={{uri:"https://akamai.vgc.no/v2/images/d0131e19-b7fe-47fc-bfbb-e5784d61073a?fit=crop&format=auto&h=733&w=1100&s=dc5273f5ed0b3638485d7183e448ce914bd5b826"}}
        style={styles.imageBackground}
      >
        <View style={styles.textContainer}>
          <Text style={styles.bottomText}>Text at the bottom of the image</Text>
        </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      maxHeight:200
    },
    textContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 10,
    },
    bottomText: {
      color: 'white',
      fontSize: 18,
      textAlign: 'center',
    },
  });


export default Banner;