import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  game: questionReducer,
  users: userReducer,
});

export default rootReducer;
