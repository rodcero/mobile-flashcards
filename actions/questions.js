import { useDispatch } from 'react-redux';

import * as API from '../utils/api';

export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

const _removeQuestion = (deckId, questionId) => ({
  type: REMOVE_QUESTION,
  deckId,
  questionId,
});

const _addQuestion = (deckId, question) => ({
  type: ADD_QUESTION,
  deckId,
  question,
});

const _getQuestions = (questions) => ({
  type: GET_QUESTIONS,
  questions,
});

export function useRemoveQuestion() {
  const dispatch = useDispatch();
  return (deckId, questionId) => {
    return API.removeQuestion(deckId, questionId).then(() => {
      dispatch(_removeQuestion(deckId, questionId));
    });
  };
}

export function useAddQuestion() {
  const dispatch = useDispatch();
  return (deckId, question) => {
    return API.addQuestion(deckId, question).then(() => {
      dispatch(_addQuestion(deckId, question));
    });
  };
}

export function useGetQuestions() {
  const dispatch = useDispatch();
  return () => {
    return API.getQuestions().then((questions) => {
      dispatch(_getQuestions(questions));
    });
  };
}
