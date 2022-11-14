import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
  },
  reducers: {
    set(state, action) {
      console.log('set reducer action', action);
      return { ...state, list: action.payload }
    },
  },
})

export const getCategories = () => async (dispatch, getState) => {
  // destructuring the "set" action form the slice
  const { set } = categorySlice.actions;
  let response = await axios.get(`https://api-js401.herokuapp.com/api/v1/categories`);
  // dispatching set action with payload
  dispatch(set(response.data.results));
};

export default categorySlice;
