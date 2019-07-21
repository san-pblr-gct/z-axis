import { handleActions, updateProperty } from '../../utils/helpers';
import state from '../state';
import {
  SET_QUESTION,
  SET_ANSWER,
  SET_CLUES,
  SET_ERROR,
  SET_ANSWER_ERROR,
} from './appActions';

const setQuestion = (state, action) => updateProperty([ 'question' ], action.payload, state);
const setAnswer = (state, action) => updateProperty([ 'answer' ], action.payload, state);
const setClues = (state, action) => updateProperty([ 'clues' ], action.payload, state);
const setError = (state, action) => updateProperty([ 'error' ], action.payload, state);
const setAnswerError = (state, action) => updateProperty([ 'error' ], action.payload, state);

export default handleActions({
  [SET_QUESTION]: setQuestion,
  [SET_ANSWER]: setAnswer,
  [SET_CLUES]: setClues,
  [SET_ERROR]: setError,
  [SET_ANSWER_ERROR]: setAnswerError,
}, state.app);
