import React from 'react';
import { FlatList, Text, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native'

import { MonoText } from './StyledText';

const DATA = [
  {
    id: 1,
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  {
    id: 2,
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
];

const StyledDeckListItem = styled.View`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  margin: 10px 10px 0 10px;
  box-shadow: 5px 5px 2px #eee;
`

const DeckListItem = ({ deck, navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Deck')}>
      <StyledDeckListItem>
        <MonoText size={24}>{deck.title}</MonoText>
        <MonoText>Cards: {deck.questions.length}</MonoText>
      </StyledDeckListItem>
    </TouchableWithoutFeedback>
  );
};

const DeckList = props => {
  const navigation = useNavigation();
  return (
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <DeckListItem deck={item} navigation={navigation} />
        )}
        keyExtractor={item => `${item.id}`}
      ></FlatList>
  );
};

DeckList.propTypes = {};

export default DeckList;
