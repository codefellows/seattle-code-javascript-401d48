import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import candidatesReducer from './candidates.js';
import categoryReducer from './categories.js';
import productsReducer from './products.js';
import votesReducer from './votes.js';
import cartReducer from './cart/index';
// import thunk from 'redux-thunk';
// import logger from './middleware/logger';
import thunk from './middleware/thunk';
import todoReducer from './todo.js';

let reducers = combineReducers({
  votes: votesReducer,
  candidates: candidatesReducer,
  categories: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
  todo: todoReducer,
  // more reducers could be present as key: value pairs
});

export default function store(){
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}
