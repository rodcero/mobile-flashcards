import { useDispatch } from 'react-redux';

import * as API from '../utils/api';

export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const GET_DECKS = 'GET_DECKS';

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

export function useAddDeck() {
  const dispatch = useDispatch();
  return (id, title, icon) => {
    const deck = { id, title, icon };
    return API.addDeck(deck).then(() => {
      dispatch(_addDeck(deck));
    });
  };
}
