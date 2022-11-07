import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import votesReducer from './votes.js';

let reducers = combineReducers({
  votes: votesReducer,
  // more reducers could be present as key: value pairs
});

export default function store(){
  return createStore(reducers, composeWithDevTools());
}
