import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

const reducer = combineReducers({
  userInfoState: reducers.userReducer,
  mockState: reducers.mockReducer
});

let store = createStore(reducer);

export default store;