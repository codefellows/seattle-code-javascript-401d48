import { createAction, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 * create constants used for two things:  
 * 1. actual actions 
 * 2.use them as keys for my reducer
 */
const ADD_TODOS = 'ADD_TODOS';
const SET_TODOS = 'SET_TODOS';

// create actions
export const addTodos = createAction(ADD_TODOS);
export const setTodos = createAction(SET_TODOS);

// function to be used by thunk
export const getTodos = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
  dispatch(setTodos(response.data.results));
}

const todoReducer = createReducer({
  list: [],
},
{
  [ADD_TODOS]: (state, action) => {
    return {
      list: [...state.list, action.payload]
    }
  },
  [SET_TODOS]: (state, action) => {
    // I could do some other things here... not in this example, but could
    return {
      list: action.payload,
    }
  }
}
)

export default todoReducer;
