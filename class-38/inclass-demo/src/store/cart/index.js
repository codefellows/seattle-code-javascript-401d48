let initialState = {
  productsInCart: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      // do we need quantity(number of "pizzas" in cart - not referring to adjusting inventory) 
      // do we need adjust inventory?  sounds like something to happen in product reducer
      return {
        productsInCart: [...state.productsInCart, action.payload]
      }
    case 'REMOVE':
      // do we remove ALL the "pizzas"?
      // do we manage a quantityInCart property?
      return {
        productsInCart: state.productsInCart.filter(product => product.name !== action.payload.name)
      }
    default:
      return state;
  }
}

// actions
export const addToCart = (product) => {
  return {
    type: 'ADD',
    payload: product,
  }
}

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE',
    payload: product,
  }
}

export default cartReducer;
