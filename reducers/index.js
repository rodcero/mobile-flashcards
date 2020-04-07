const initialState = {
  "1": {
    id: "1",
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
    ],
  },
  "2": {
    id: "2",
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  },
};

import { ADD_DECK } from "../actions/decks";

export default (state = initialState, { type, deck }) => {
  switch (type) {
    case ADD_DECK:
      return { ...state, [deck.id]: { ...deck } };

    default:
      return state;
  }
};
