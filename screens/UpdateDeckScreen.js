import React from 'react';
import { useSelector } from 'react-redux';

import DeckEditor from '../components/DeckEditor';
import Message from '../components/Message';
import { useUpdateDeck } from '../actions/decks';

export default function UpdateDeckScreen({ navigation, route }) {
  console.log(route, 'route');
  const deckId = route?.params?.deckId;

  if (!deckId) {
    return <Message>Error: missing Deck Id parameter</Message>;
  }

  const deck = useSelector(({ decks }) => decks[deckId]);
  const updateDeck = useUpdateDeck();

  async function update(title, icon) {
    return updateDeck(deckId, title, icon).then(() => {
      navigation.goBack();
    });
  }

  return <DeckEditor type='update' handler={update} deck={deck}></DeckEditor>;
}
