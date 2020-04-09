import {
  ADD_QUESTION,
  REMOVE_QUESTION,
  GET_QUESTIONS,
} from '../actions/questions';

export default (
  state = {},
  { type, deckId, question, questionId, questions }
) => {
  switch (type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [deckId]: { ...state[deckId], [question.id]: question },
      };
    case REMOVE_QUESTION:
      let newState = { ...state };
      delete newState[deckId][questionId];
      return newState;

    default:
      return state;
  }
};
