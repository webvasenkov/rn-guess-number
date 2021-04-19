import React from 'react';
import { View, StyleSheet } from 'react-native';
import Color from '../constants/colors';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    padding: 15,
    elevation: 10,
  },
});

export default ({ style, children }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};
