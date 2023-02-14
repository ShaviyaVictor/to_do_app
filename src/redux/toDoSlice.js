import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  
  name: 'todos',
  initialState: [
    { id: 1, title: 'todo1', completed: true },
    { id: 2, title: 'todo2', completed: false },
    { id: 3, title: 'todo3', completed: true }
  ],
  reducers: {

    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state[index].completed = action.payload.completed;
    }

  },

});

export const { addTodo } = toDoSlice.actions;

export default toDoSlice.reducer;