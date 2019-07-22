/* eslint-disable no-magic-numbers */
import { createAction } from '../../utils/helpers';
// import fetch from 'isomorphic-fetch';
import md5 from 'md5';
import AsyncStorage from '@callstack/async-storage';
import questions from './questions';

export const SET_QUESTION = 'APP::QUESTION';
export const SET_ANSWER = 'APP::ANSWER';
export const SET_CLUES = 'APP::CLUES';
export const SET_ERROR = 'APP::ERROR';
export const SET_CHECKSUM = 'APP::CHECKSUM';
export const SET_LEVEL = 'APP::SET_LEVEL';
export const UPDATE_USER_LEVEL = 'APP::UPDATE_USER_LEVEL';

export const setQuestion = createAction(SET_QUESTION);
export const setAnswer = createAction(SET_ANSWER);
export const setClues = createAction(SET_CLUES);
export const setError = createAction(SET_ERROR);
export const setChecksum = createAction(SET_CHECKSUM);
export const setLevel = createAction(SET_LEVEL);

export const getQuestion = () => async (dispatch) => {
  const currentLevel = await getCurrentLevel();
  const currentClues = await getCurrentClues();

  const { question, answer, clues } = questions[currentLevel];
  dispatch([
    setQuestion(question),
    setAnswer(answer),
    setLevel(currentLevel),
    setClues(clues.slice(0, currentClues)),
  ]);
};

export const setAnswerError = (msg, type = 'error') => dispatch => {
  dispatch(setError({
    message: msg,
    type,
  }));
};

export const getCurrentLevel = async () => {
  try {
    const level = await AsyncStorage.getItem('level');
    return level ? +level : 1;
  }
  catch {
    return 1;
  }
};

export const getCurrentClues = async () => {
  try {
    const clues = await AsyncStorage.getItem('clues');
    return clues ? +clues : 0;
  }
  catch {
    return 0;
  }
};

export const updateUserLevel = () => async (dispatch, getState) => {
  const { app : { level } } = getState();
  try {
    const currentLevel = level;
    await AsyncStorage.setItem('level', currentLevel + 1);
    await AsyncStorage.setItem('clues', 0);
    dispatch([
      getQuestion(),
      setAnswerError('Well done. Right answer!', 'success'),
    ]);
  } catch {
    return false;
  }
}

export const revealClues = async () => {
  try {
    await AsyncStorage.setItem('clues', 2);
    return true;
  } catch {
    return false;
  }
};

export const checkPayment = () => async dispatch => {
  const paymentMade = getParameterByName('payment');
  if (paymentMade) {
    if (paymentMade === 'true') {
      if (await revealClues()) {
        dispatch(setAnswerError('Payment Success!', 'info'));
      }
    } else if (paymentMade === 'false') {
      dispatch(setAnswerError('Payment Failure!', 'error'));
    }
    window.history.replaceState(null, null, window.location.pathname);
  }
};

export const checkAnswer = givenAnswer => (dispatch, getState) => {
  const { app: { answer } } = getState();
  if (md5(givenAnswer.toLowerCase()) === answer) {
    dispatch(updateUserLevel());
  } else {
    dispatch(setAnswerError('Wrong answer. Try again!', 'error'));
  }
}

export const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[[\]]/g, '\\$&');
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

export const getCheckSum = (body = {}) => dispatch => {
  fetch('/checksum', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if(response.ok) return response.text();
      throw new Error('Network response was not ok.');
    })
    .then(text => {
      dispatch([
        setChecksum(text),
      ]);
    })
    .catch(() => {
      dispatch(setError({
        message: 'Techincal error! Clues not enabled.',
        type: 'warning',
      }));
    });
}