import { createStore, combineReducers } from 'redux';
import { userReducer } from './reducers';

const reducers = combineReducers({
  userInfoState: userReducer
});

let store = createStore(reducers);

default export store;