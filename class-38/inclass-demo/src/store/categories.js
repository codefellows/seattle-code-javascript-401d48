import axios from 'axios';

const initialState = {
  categories: [],
  activeCategory: ''
};

// reducer function
function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload
      }
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      }
    default:
      return state;
  }
}

  // relevant to lab-38
export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get(`https://api-js401.herokuapp.com/api/v1/categories`);
  dispatch(setCategories(response.data.results));
};

export const setCategories = (data) => {
  return {
    type: 'GET_CATEGORIES',
    payload: data,
  }
}

export default categoryReducer;
