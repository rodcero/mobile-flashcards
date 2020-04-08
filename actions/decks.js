import { useDispatch } from "react-redux";

import * as API from "../utils/api";

export const ADD_DECK = "ADD_DECK";
export const GET_DECKS = "GET_DECKS";

const _addDeck = (deck) => ({
  type: ADD_DECK,
  deck,
});

const _getDecks = (decks) => ({
  type: GET_DECKS,
  decks,
});

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
  return (deck) => {
    return API.addDeck(deck)
      .then(() => {
        dispatch(_addDeck(deck));
      })
      .catch((e) => console.log(e));
  };
}
