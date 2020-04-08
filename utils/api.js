import { AsyncStorage } from 'react-native';

const DECK_STORE_KEY = 'MobileFlashcards:decks';

export const getDecks = () => {
  return AsyncStorage.getItem(DECK_STORE_KEY).then((decks) =>
    JSON.parse(decks)
  );
};

export const addDeck = (deck) => {
  return AsyncStorage.mergeItem(
    DECK_STORE_KEY,
    JSON.stringify({ [deck.id]: deck })
  );
};

export const removeDeck = (deckId) => {
  return AsyncStorage.getItem(DECK_STORE_KEY)
    .then(JSON.parse)
    .then((items) => {
      delete items[deckId];
      AsyncStorage.setItem(DECK_STORE_KEY, JSON.stringify(items));
    });
};
