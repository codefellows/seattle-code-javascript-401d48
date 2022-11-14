import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo';
import categorySlice from './categories.slice';

export default function createStore(){
  return configureStore({
    reducer: {
      todos: todoReducer,
      categories: categorySlice.reducer,
    }
  })
}
