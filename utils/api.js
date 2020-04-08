import { AsyncStorage } from "react-native";

const DECK_STORE_KEY = "decks-storage";

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
