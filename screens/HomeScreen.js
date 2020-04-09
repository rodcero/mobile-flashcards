import React, { useEffect } from 'react';
import { View } from 'react-native';
import DeckList from '../components/DeckList';

import { useGetDecks } from '../actions/decks';
import { useGetQuestions } from '../actions/questions';

export default function HomeScreen() {
  const getDecks = useGetDecks();
  const getQuestions = useGetQuestions();

  useEffect(() => {
    getDecks();
    getQuestions();
    return () => {};
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <DeckList />
    </View>
  );
}

HomeScreen.navigationOptions = {
  headerTitle: 'How to get Started',
};
