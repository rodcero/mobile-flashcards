import { ADD_DECK, GET_DECKS, ADD_QUESTION } from "../actions/decks";

export default (state = {}, { type, deck, decks, deckId, question }) => {
  switch (type) {
    case ADD_DECK:
      return { ...state, [deck.id]: { ...deck } };
    case GET_DECKS:
      if (decks === null) return { ...initialState };
      else return { ...decks };
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
