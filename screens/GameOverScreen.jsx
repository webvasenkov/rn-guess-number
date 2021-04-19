// @ts-nocheck
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TitleText, BodyText } from '../components';

const GameOverScreen = ({ rounds, userNumber, onReset }) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <BodyText>Count rounds: {rounds}</BodyText>
      <BodyText>Guess number: {userNumber}</BodyText>
      <View style={styles.button}>
        <Button title='Try again' onPress={onReset} />
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
  },
});
