import { combineReducers } from 'redux';
import light from './light-reducer';
import token from './token-reducer';

export default combineReducers({
  light, token,
})
