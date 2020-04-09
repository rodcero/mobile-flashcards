import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import DeckList from '../components/DeckList';

import { useGetDecks } from '../actions/decks';
import { useGetQuestions } from '../actions/questions';

export default function HomeScreen() {
  const getDecks = useGetDecks();
  const getQuestions = useGetQuestions();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function load() {
      await getDecks();
      await getQuestions();
      setloading(false);
    }
    load();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator size='large'></ActivityIndicator>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <DeckList />
    </View>
  );
}

HomeScreen.navigationOptions = {
  headerTitle: 'How to get Started',
};
