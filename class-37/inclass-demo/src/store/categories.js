const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  activeCategory: ''
};

// reducer function
function categoryReducer (state = initialState, action){
  switch(action.type){
    case 'SELECT_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload
      }
    default:
      return state;
  }
}

export default categoryReducer;
