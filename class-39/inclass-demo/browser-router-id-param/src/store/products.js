import axios from 'axios';

let initialState = [];

function productsReducer(state = initialState, action){
  switch(action.type){
    case 'GET_PRODUCTS':
      return action.payload.results;
    case 'SELECT_CATEGORY':
      return initialState.filter(product => product.category === action.payload)
    default: 
      return state;
  }
}

export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');

  // filter here based on category maybe pass category as a param?  

  dispatch(setProducts(response.data))
}

export const setProducts = (data) => {
  return {
    type: 'GET_PRODUCTS',
    payload: data
  }
}

export default productsReducer;
