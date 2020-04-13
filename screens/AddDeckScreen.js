import React from 'react';

import { useAddDeck } from '../actions/decks';
import DeckEditor from '../components/DeckEditor';

export default function AddDeckScreen({ navigation }) {
  const addDeck = useAddDeck();

  async function add(title, icon) {
    const id = `${Math.random().toString(36)}-${Math.random().toString(36)}`;
    return addDeck(id, title, icon).then(() => {
      navigation.goBack();
      navigation.navigate('Deck', { id });
    });
  }

  return <DeckEditor type='add' handler={add} />;
}
