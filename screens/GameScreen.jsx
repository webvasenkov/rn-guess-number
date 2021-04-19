// @ts-nocheck
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { NumberContainer, Card } from '../components';
import { TitleText } from '../components';

const generateGuess = (min, max, exclude) => {
  const guess = Math.ceil(Math.random() * (max - min) + min);

  if (guess === exclude) {
    return generateGuess(min, max, exclude);
  }

  return guess;
};

const GameScreen = ({ userNumber, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(generateGuess(1, 100));
  const [rounds, setRounds] = useState(0);
  const lowerNumber = useRef(1);
  const greaterNumber = useRef(100);
  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && userNumber > currentGuess) ||
      (direction === 'greater' && userNumber < currentGuess)
    ) {
      const btn = { text: 'Sorry', style: 'cancel' };
      Alert.alert('You lyi', "Don't lying please...", [btn]);
      return;
    }

    if (direction === 'lower') greaterNumber.current = currentGuess;
    if (direction === 'greater') lowerNumber.current = currentGuess;

    const nextGuess = generateGuess(lowerNumber.current, greaterNumber.current, currentGuess);
    setCurrentGuess(nextGuess);
    setRounds((rounds) => ++rounds);
  };

  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver(rounds);
    }
  }, [userNumber, currentGuess, onGameOver]);

  return (
    <View style={styles.screen}>
      <TitleText>Opponent's Guess</TitleText>
      <NumberContainer style={styles.numberContainer}>{currentGuess}</NumberContainer>
      <Card style={styles.card}>
        <View style={styles.button}>
          <Button title='LOWER' onPress={() => nextGuessHandler('lower')} />
        </View>
        <View style={styles.button}>
          <Button title='GREATER' onPress={() => nextGuessHandler('greater')} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  numberContainer: {
    marginVertical: 10,
  },
  card: {
    width: 300,
    maxWidth: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: 100,
  },
});

export default GameScreen;
