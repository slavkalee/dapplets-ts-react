import { combineReducers } from 'redux';
import { tagReducer } from './tags';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  tags: tagReducer,
});

export default rootReducer;
