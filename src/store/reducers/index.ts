import { combineReducers } from 'redux';
import { dappletReducer } from './dapplets';
import { tagReducer } from './tags';

const rootReducer = combineReducers({
  dapplets: dappletReducer,
  tags: tagReducer,
});

export default rootReducer;
