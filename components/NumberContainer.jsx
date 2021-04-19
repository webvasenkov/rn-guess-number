import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BodyText from './BodyText';
import Color from '../constants/colors';

const NumberContainer = ({ style, children }) => {
  return (
    <View style={[styles.container, style]}>
      <BodyText style={styles.number}>{children}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Color.accent,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
});

export default NumberContainer;
