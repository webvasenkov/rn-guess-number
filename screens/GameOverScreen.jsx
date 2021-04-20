// @ts-nocheck
import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import { TitleText, BodyText, MainButton } from '../components';
import Shadow from '../constants/shadow';
import Colors from '../constants/colors';

const GameOverScreen = ({ rounds, userNumber, onReset }) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Count rounds: <Text style={styles.highlight}>{rounds}</Text> and Guess number:{' '}
          <Text style={styles.highlight}>{userNumber}</Text>
        </BodyText>
      </View>
      <View style={styles.imageContainer}>
        {/* <Image style={styles.image} source={require('../assets/game-over.jpg')} resizeMode='contain' /> */}
        <Image
          style={styles.image}
          source={{
            uri:
              'https://m.media-amazon.com/images/M/MV5BZDFkNjlhZDItMTM5YS00NjA1LTk5OWEtMzBmMTVlOGRkOGJjXkEyXkFqcGdeQXVyMzI4MzEwNQ@@._V1_.jpg',
          }}
          fadeDuration={500}
        />
      </View>
      <MainButton title='Try again' onPress={onReset} />
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
  resultContainer: {
    width: '60%',
  },
  resultText: {
    textAlign: 'center',
  },
  highlight: {
    fontFamily: 'montserrat-bold',
    color: Colors.primary,
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    overflow: 'hidden',
    marginVertical: 20,
    ...Shadow,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
