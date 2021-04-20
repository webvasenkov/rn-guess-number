import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomWidth: 1,
    borderColor: Colors.accent,
  },
});

export default ({ style, ...rest }) => <TextInput {...rest} style={[style, styles.input]} />;
