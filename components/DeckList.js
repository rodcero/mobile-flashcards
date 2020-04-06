import React from 'react';
import { FlatList, Text, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

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

const DeckListItem = ({ deck, navigation }) => {
  console.log(navigation);
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Deck')}>
      <View>
        <Text>{deck.title}</Text>
        <MonoText>Cards: {deck.questions.length}</MonoText>
      </View>
    </TouchableWithoutFeedback>
  );
};

const DeckList = props => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <DeckListItem deck={item} navigation={navigation} />
        )}
        keyExtractor={item => `${item.id}`}
      ></FlatList>
    </SafeAreaView>
  );
};

DeckList.propTypes = {};

export default DeckList;