import React from 'react';
import { FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native-safe-area-context';

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

const DeckList = props => {
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={item => `${item.id}`}
      ></FlatList>
    </SafeAreaView>
  );
};

DeckList.propTypes = {};

export default DeckList;
