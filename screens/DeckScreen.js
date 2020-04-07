import React from 'react';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { MonoText } from '../components/StyledText';
import {Container} from '../components/StyledLayout'
import { Button } from '../components/StyledControls';
import colors from '../constants/Colors'

function DeckScreen(props) {
  const navigation = useNavigation();
  return (
    <Container>
      <MonoText size={25}>Deck Title</MonoText>
      <MonoText size={20}>23 Cards</MonoText>
      <Button
        onPress={() => navigation.navigate('Quiz')}
      >
        <MonoText color={colors.light}>Start Quiz</MonoText>
      </Button>
      <Button
        onPress={() => navigation.navigate('AddQuestion')}
      >
        <MonoText color={colors.light}>Add Question</MonoText>
      </Button>
    </Container>
  );
}

DeckScreen.propTypes = {};

export default DeckScreen;
