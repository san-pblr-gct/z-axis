/* eslint-disable no-magic-numbers */
import { createAction } from '../../utils/helpers';
import 'isomorphic-fetch';
import AsyncStorage from '@callstack/async-storage';
import questions from './questions';

export const SET_QUESTION = 'APP::QUESTION';
export const SET_ANSWER = 'APP::ANSWER';
export const SET_CLUES = 'APP::CLUES';
export const SET_ERROR = 'APP::ERROR';
export const SET_ANSWER_ERROR = 'APP::ANSWER_ERROR';
export const UPDATE_USER_LEVEL = 'APP::UPDATE_USER_LEVEL';

export const setQuestion = createAction(SET_QUESTION);
export const setAnswer = createAction(SET_ANSWER);
export const setClues = createAction(SET_CLUES);
export const setError = createAction(SET_ERROR);
export const setAnswerErrorAction = createAction(SET_ANSWER_ERROR);

export const getQuestion = () => async (dispatch) => {
  let currentLevel = await getCurrentLevel();
  if(!currentLevel) currentLevel = 1;
  const { question, answer, clues } = questions[currentLevel];
  dispatch([
    setQuestion(question),
    setAnswer(answer),
    setClues(clues),
    setError(false),
  ]);
};

export const setAnswerError = (msg, type = 'error') => dispatch => {
  dispatch(setAnswerErrorAction({
    message: msg,
    time: new Date().getTime(),
    type,
  }));
};

export const getCurrentLevel = async () => {
  let level;
  try {
    level = await AsyncStorage.getItem('level');
  }
  catch {
    return 1;
  }
  return level ? +level : 1;
};

export const updateUserLevel = () => async dispatch => {
  try {
    const currentLevel = await getCurrentLevel();
    await AsyncStorage.setItem('level', currentLevel + 1);
    dispatch(getQuestion());
  } catch {
    return false;
  }
}