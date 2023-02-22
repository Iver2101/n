import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = ({onPress, text, btnStyles, txtStyles}) => {
  return (
    <TouchableOpacity style={[styles.button, btnStyles]} onPress={onPress}>
      <Text style={[styles.buttonText, txtStyles]}>{text}</Text>
    </TouchableOpacity>
  );
};

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
  },
});

export default MyButton;