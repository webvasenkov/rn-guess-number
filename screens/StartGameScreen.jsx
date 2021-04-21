// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert, Dimensions, ScrollView } from 'react-native';
import { Card, Input, NumberContainer, TitleText, BodyText, MainButton } from '../components';
import Colors from '../constants/colors';

const StartGameScreen = ({ setUserNumberHandler }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [number, setNumber] = useState();
  const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 2.9);

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 2.9);
    };
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.addEventListener('change', updateLayout);
    };
  });

  const numberValueHandler = (value) => setEnteredValue(value.replace(/[^0-9]/g, ''));
  const resetValueHandler = () => {
    setConfirm(false);
    setEnteredValue('');
  };

  const confirmNumberHandler = () => {
    const confirmNumber = parseInt(enteredValue);
    if (isNaN(confirmNumber) || confirmNumber <= 0 || confirmNumber >= 99) {
      const btn = { text: 'Okay', style: 'destructive', onPress: resetValueHandler };
      Alert.alert('Invalid number', 'Your number should be in range 0 - 99', [btn]);
      return;
    }

    setNumber(confirmNumber);
    setConfirm(true);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let outputConfirm;

  if (confirm) {
    outputConfirm = (
      <Card style={styles.summaryContainer}>
        <TitleText>Your number</TitleText>
        <NumberContainer style={styles.numberContainer}>{number}</NumberContainer>
        <MainButton title='START GAME' onPress={() => setUserNumberHandler(number)} />
      </Card>
    );
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <TitleText>Start a New Game!</TitleText>
          <Card style={styles.inputContainer}>
            <BodyText>Select a Number</BodyText>
            <Input
              keyboardType='number-pad'
              maxLength={2}
              style={styles.input}
              onChangeText={numberValueHandler}
              value={enteredValue}
            />
            <View style={styles.buttonContainer}>
              <MainButton
                title='RESET'
                color={Colors.accent}
                onPress={resetValueHandler}
                size={12}
                style={{ width: buttonWidth }}
              />
              <MainButton
                title='CONFIRM'
                color={Colors.primary}
                onPress={confirmNumberHandler}
                size={12}
                style={{ width: buttonWidth }}
              />
            </View>
          </Card>
          {outputConfirm}
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '80%',
    marginVertical: 10,
    alignItems: 'center',
  },
  input: {
    width: 30,
    marginVertical: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: Dimensions.get('window').width / 4,
  },
  summaryContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  numberContainer: {
    marginVertical: 10,
  },
});

export default StartGameScreen;
