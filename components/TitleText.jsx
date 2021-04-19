import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = ({ style, children }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default TitleText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'montserrat-bold',
    fontSize: 21,
  },
});
