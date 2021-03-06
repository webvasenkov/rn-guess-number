import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Header } from './src/components';
import { StartGameScreen, GameScreen, GameOverScreen } from './src/screens';

const fetchFonts = () => {
  return Font.loadAsync({
    'montserrat-light': require('./src/assets/fonts/Montserrat-Light.ttf'),
    'montserrat-bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [numberRounds, setNumberRounds] = useState(0);
  const [dataLoading, setDataLoading] = useState(false);

  if (!dataLoading) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoading(true)} onError={console.warn} />;
  }

  const setUserNumberHandler = (number) => {
    setUserNumber(number);
    setNumberRounds(0);
  };

  const gameOverHandler = (numRounds) => setNumberRounds(numRounds);

  const configureGameHandler = () => {
    setNumberRounds(0);
    setUserNumber(null);
  };

  let content = <StartGameScreen setUserNumberHandler={setUserNumberHandler} />;

  if (userNumber && numberRounds <= 0) {
    content = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  } else if (numberRounds > 0) {
    content = <GameOverScreen rounds={numberRounds} userNumber={userNumber} onReset={configureGameHandler} />;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header title='Guess a Number' />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
