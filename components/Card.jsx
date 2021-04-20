import React from 'react';
import { View, StyleSheet } from 'react-native';
import Shadow from '../constants/shadow';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    ...Shadow,
  },
});

export default ({ style, children }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};
