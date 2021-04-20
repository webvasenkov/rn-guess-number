// @ts-nocheck
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { BodyText } from '../components';
import Colors from '../constants/colors';

const MainButton = ({ title, style = {}, onPress, children, size = 16, color = Colors.accent }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, style, { backgroundColor: color }]}>
        <BodyText style={[styles.buttonText, { fontSize: size }]}>{title ? title : children}</BodyText>
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  buttonText: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    color: '#fff',
    textAlign: 'center',
  },
});
