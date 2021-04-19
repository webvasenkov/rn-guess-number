import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = ({ style, children }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default BodyText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'montserrat-light',
    fontSize: 18,
  },
});
