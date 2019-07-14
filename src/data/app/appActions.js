import { createAction } from '../../utils/helpers';
require('isomorphic-fetch');

export const SET_CONTENT = 'APP::CONTENT';
export const SET_ERROR = 'APP::ERROR';

export const setContent = createAction(SET_CONTENT);
export const setError = createAction(SET_ERROR);

export const getContent = (folder = 'home', subfolder = 'home', post = 'home') => (dispatch, getState) => {
  const { app: { content } } = getState();

  if (content[`${folder}/${subfolder}/${post}`]) return;

  fetch(`/data?folder=${folder}&subfolder=${subfolder}&post=${post}`)
    .then(response => response.text())
    .then(text => {
      content[`${folder}/${subfolder}/${post}`] = text;
      dispatch([
        setContent(content),
        setError(false),
      ]);
    })
    .catch(() => {
      dispatch(setError(true));
    });
};