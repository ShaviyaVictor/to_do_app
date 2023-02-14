import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './toDoSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});