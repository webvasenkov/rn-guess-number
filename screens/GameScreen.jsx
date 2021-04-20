// @ts-nocheck
import React, { useState, useRef, useEffect } from 'react';
import { View, Alert, FlatList, StyleSheet } from 'react-native';
import { NumberContainer, Card, MainButton } from '../components';
import { TitleText, BodyText } from '../components';
import { Ionicons } from '@expo/vector-icons';

const generateGuess = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const guess = Math.floor(Math.random() * (max - min) + min);

  if (guess === exclude) {
    return generateGuess(min, max, exclude);
  }

  return guess;
};

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateGuess(0, 98);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [listGuess, setListGuess] = useState([initialGuess.toString()]);
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
    setListGuess((listGuess) => [nextGuess.toString(), ...listGuess]);
  };

  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver(listGuess.length);
    }
  }, [userNumber, currentGuess, onGameOver]);

  const renderItemGuess = ({ item, index }, length) => {
    return (
      <View style={styles.listItem}>
        <BodyText>#{length - index}</BodyText>
        <TitleText>{item}</TitleText>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <TitleText>Opponent's Guess</TitleText>
      <NumberContainer style={styles.numberContainer}>{currentGuess}</NumberContainer>
      <Card style={styles.card}>
        <MainButton onPress={() => nextGuessHandler('lower')}>
          <Ionicons name='remove-outline' size={21} color='#fff' />
        </MainButton>
        <MainButton onPress={() => nextGuessHandler('greater')}>
          <Ionicons name='add-outline' size={21} color='#fff' />
        </MainButton>
      </Card>
      <TitleText style={styles.listTitle}>History</TitleText>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>{listGuess.map(renderListGuess)}</ScrollView> */}
        <FlatList
          keyExtractor={(item) => item}
          data={listGuess}
          renderItem={(item) => renderItemGuess(item, listGuess.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
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
  listTitle: {
    marginTop: 15,
  },
  listContainer: {
    flex: 1,
    width: '80%',
  },
  list: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 7.5,
    borderRadius: 10,
    width: '100%',
  },
});

export default GameScreen;
