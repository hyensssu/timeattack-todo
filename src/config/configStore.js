import { combineReducers } from 'redux';
import { createStore } from 'redux';
import todos from '../modules/todos';

const rootReducer = combineReducers({
  todos
});

const store = createStore(rootReducer);

export default store;
