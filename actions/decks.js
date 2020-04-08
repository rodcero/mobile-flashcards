import { useDispatch, useSelector } from 'react-redux';

import * as API from '../utils/api';

export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const GET_DECKS = 'GET_DECKS';
export const ADD_QUESTION = 'ADD_QUESTION';

const _addDeck = (deck) => ({
  type: ADD_DECK,
  deck,
});

const _removeDeck = (deckId) => ({
  type: REMOVE_DECK,
  deckId,
});

const _getDecks = (decks) => ({
  type: GET_DECKS,
  decks,
});

export function useRemoveDeck() {
  const dispatch = useDispatch();
  return (deckId) => {
    return API.removeDeck(deckId).then(() => {
      dispatch(_removeDeck(deckId));
    });
  };
}

export function useGetDecks() {
  const dispatch = useDispatch();
  return () => {
    return API.getDecks().then((decks) => {
      dispatch(_getDecks(decks));
    });
  };
}

export function useAddQuestion() {
  const dispatch = useDispatch();
  const decks = useSelector((state) => state);
  return (deckId, question) => {
    const deck = {
      ...decks[deckId],
      questions: [...decks[deckId].questions, question],
    };

    return API.addDeck(deck)
      .then(() => {
        dispatch(_addDeck(deck));
      })
      .catch((e) => console.log(e));
  };
}

export function useAddDeck() {
  const dispatch = useDispatch();
  return (id, title) => {
    const deck = { id, title, questions: [] };
    return API.addDeck(deck)
      .then(() => {
        dispatch(_addDeck(deck));
      })
      .catch((e) => console.log(e));
  };
}
