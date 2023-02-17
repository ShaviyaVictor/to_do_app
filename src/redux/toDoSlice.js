import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// thunk action logic to fetch the payload from the api
const getTodosAsync = createAsyncThunk(
  'todos/getTodosAsync', 
  async() => {
    const response = await fetch('http://localhost:7000/todos');

    if(response.ok) {
      const todos = await response.json();
      return { todos }
    }
    
  }
);

const toDoSlice = createSlice({
  
  name: 'todos',
  initialState: [
    { id: 1, title: 'Todo1', completed: false },
    { id: 2, title: 'Todo2', completed: true },
    { id: 3, title: 'Todo3', completed: false },
    { id: 4, title: 'Todo4', completed: true },
    { id: 5, title: 'Todo5', completed: false },
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
    },
    deleteTodo: (state, action) => {
      return state.filter(
        (todo) => todo.id !== action.payload.id
      );
    },

    // thunk reducer logic
    extraReducers: {
      [getTodosAsync.fulfilled]: (state, action) => {
        return action.payload.todos;
      },
    },

  },

});

export const { 
  addTodo,
  toggleComplete, 
  deleteTodo, 
} = toDoSlice.actions;

export default toDoSlice.reducer;