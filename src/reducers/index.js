import { combineReducers } from 'redux';

import token from './token';
import modal from './modal';
import wallet from './wallet';
import language from './language';

export default combineReducers({
  token,
  modal,
  wallet,
  language,
});
