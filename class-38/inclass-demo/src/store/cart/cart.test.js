import cartReducer  from'./index';
import {legacy_createStore as createStore, combineReducers } from 'redux';
import { addToCart, removeFromCart } from './index';

/**
 * example state
 * { productsInCart: [] }
 *  */  

describe('Cart Reducer', () => {
  // combine reducers as in index.js
  const reducers = combineReducers({
    cart: cartReducer,
  });
  // createStore to provide
  const store = createStore(reducers);

  // initial state
  // add to state.  add some random object and prove it exists in state
  it('provides initial state', () => {
    let state = store.getState(); // snapshot of state AT THE MOMENT
    expect(state.cart.productsInCart.length).toEqual(0);
    expect(state.cart.productsInCart).toBeTruthy();
  });
  it('adds products', () => {
    let state = store.getState(); // snapshot of state AT THE MOMENT
    expect(state.cart.productsInCart.length).toEqual(0);
    expect(state.cart.productsInCart).toBeTruthy();
    let productOne = {name: 'product one', price: 5}
    let productTwo = {name: 'product two', price: 15}

    store.dispatch(addToCart(productOne));
    store.dispatch(addToCart(productTwo));

    state = store.getState(); // snapshot of state AT THE MOMENT
    expect(state.cart.productsInCart.length).toEqual(2);
    expect(state.cart.productsInCart[0].name).toEqual('product one');
    expect(state.cart.productsInCart[1].name).toEqual('product two');
  });
  it('removes products', () => {
    let state = store.getState();  // snapshot of state AT THE MOMENT
    let productOne = {name: 'product one', price: 5}
    let productTwo = {name: 'product two', price: 15}

    store.dispatch(removeFromCart(productOne))
    state = store.getState(); // snapshot of state AT THE MOMENT
    expect(state.cart.productsInCart.length).toEqual(1);
    expect(state.cart.productsInCart[0].name).toEqual('product two');
    store.dispatch(removeFromCart(productTwo))
    state = store.getState(); // snapshot of state AT THE MOMENT
    expect(state.cart.productsInCart.length).toEqual(0);
  })

});
