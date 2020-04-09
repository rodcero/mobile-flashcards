import { AsyncStorage } from 'react-native';

const DECK_STORE_KEY = 'MobileFlashcards:decks';
const QUESTION_STORE_KEY = 'MobileFlashCards:questions';

export const getDecks = () => {
  return AsyncStorage.getItem(DECK_STORE_KEY).then(JSON.parse);
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

export const getQuestions = () => {
  return AsyncStorage.getItem(QUESTION_STORE_KEY).then(JSON.parse);
};

export const addQuestion = (deckId, question) => {
  return AsyncStorage.mergeItem(
    QUESTION_STORE_KEY,
    JSON.stringify({ [deckId]: { [question.id]: question } })
  );
};

export const removeQuestion = (deckId, questionId) => {
  return AsyncStorage.getItem(QUESTION_STORE_KEY)
    .then(JSON.parse)
    .then((qs) => {
      delete qs[deckId][questionId];
      AsyncStorage.setItem(QUESTION_STORE_KEY, JSON.stringify(qs));
    });
};
