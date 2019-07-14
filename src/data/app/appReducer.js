import { handleActions, updateProperty } from '../../utils/helpers';
import state from '../state';
import {
  SET_CONTENT,
  SET_ERROR,
} from './appActions';

const setContent = (state, action) => updateProperty([ 'content' ], action.payload, state);
const setError = (state, action) => updateProperty([ 'error' ], action.payload, state);

export default handleActions({
  [SET_CONTENT]: setContent,
  [SET_ERROR]: setError,
}, state.app);
