import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import candidatesReducer from './candidates.js';
import categoryReducer from './categories.js';
import productsReducer from './products.js';
import votesReducer from './votes.js';

let reducers = combineReducers({
  votes: votesReducer,
  candidates: candidatesReducer,
  categories: categoryReducer,
  products: productsReducer,
  // more reducers could be present as key: value pairs
});

export default function store(){
  return createStore(reducers, composeWithDevTools());
}
