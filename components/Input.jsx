import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Color from '../constants/colors';

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomWidth: 1,
    borderColor: Color.accent,
  },
});

export default ({ style, ...rest }) => <TextInput {...rest} style={[style, styles.input]} />;
