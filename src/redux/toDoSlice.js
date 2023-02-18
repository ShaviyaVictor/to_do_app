import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// thunk middleware logic with the action that uses fetch function to get the payload from the api
export const getTodosAsync = createAsyncThunk(
  'todos/getTodosAsync', 
  async() => {
    const response = await fetch('http://localhost:7000/todos');

    if(response.ok) {
      const todos = await response.json();
      return { todos };
    }
    
  }
);

const toDoSlice = createSlice({
  
  name: 'todos',
  initialState: [ ],
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

  },

  // thunk reducer logic
  extraReducers: {

    [getTodosAsync.pending]: (state, action) => {
      console.log("Fetching data from the API...")
    },

    [getTodosAsync.fulfilled]: (state, action) => {
      console.log("Data has been fetched from the API...")
      return action.payload.todos;
    },

  },

});

export const { 
  addTodo,
  toggleComplete, 
  deleteTodo, 
} = toDoSlice.actions;

export default toDoSlice.reducer;