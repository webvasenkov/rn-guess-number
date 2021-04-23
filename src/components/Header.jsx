import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import TitleText from './TitleText';
import Colors from '../constants/colors';

const Header = ({ title }) => {
  return (
    <View style={[styles.header, Platform.select({ ios: styles.headerIOS, android: styles.headerAndroid })]}>
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  headerAndroid: {
    height: 90,
    backgroundColor: Colors.primary,
  },
  headerIOS: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.primary,
  },

  headerTitle: {
    textAlign: 'center',
  },
});

export default Header;
