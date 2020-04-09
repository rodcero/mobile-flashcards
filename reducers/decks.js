import {
  ADD_DECK,
  GET_DECKS,
  ADD_QUESTION,
  REMOVE_DECK,
} from '../actions/decks';

export default (state = {}, { type, deck, decks, deckId, question }) => {
  switch (type) {
    case ADD_DECK:
      return { ...state, [deck.id]: { ...deck } };
    case REMOVE_DECK:
      let newState = { ...state };
      delete newState[deckId];
      return newState;
    case GET_DECKS:
      return { ...state, ...decks };
    case ADD_QUESTION:
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          questions: [...state[deckId].questions, question],
        },
      };
    default:
      return state;
  }
};
