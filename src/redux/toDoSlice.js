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

// thunk to add todos to the api
export const addTodoAsync = createAsyncThunk(
  'todos/addTodoAsync',
  async(payload) => {
    const response = await fetch('http://localhost:7000/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      }, 
      body: JSON.stringify({
        title: payload.title
      })
    });

    if(response.ok) {
      const todo = await response.json();
      return { todo };
    }

  } 
);

// thunk to enable the toggle effect to persist on the server-side
export const toggleCompleteAsync = createAsyncThunk(
  'todos/toggleCompleteAsync',
  async(payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        completed: payload.completed
      })
    });

    if(response.ok) {
      const todo = await response.json();
      return {
        id: todo.id,
        completed: todo.completed
      }
    }

  }
);

// thunk to delete todos from the api 
export const deleteTodoAsync = createAsyncThunk(
  'todos/deleteTodoAsync', 
  async(payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
      method: 'DELETE',
    });
    
  }
);

const toDoSlice = createSlice({
  
  name: 'todos',
  initialState: [
    // { id: 1, title: 'Todo1', completed: false },
    // { id: 2, title: 'Todo2', completed: true },
    // { id: 3, title: 'Todo3', completed: false },
    // { id: 4, title: 'Todo4', completed: true },
    // { id: 5, title: 'Todo5', completed: false },
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

  },
  
  // thunk reducer logic
  extraReducers: {

    // get todos reducers
    [getTodosAsync.pending]: (state, action) => {
      console.log("Fetching data from the API...")
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      console.log("Data has been fetched from the API...")
      return action.payload.todos;
    },

    // add todo reducers
    [addTodoAsync.pending]: (state, action) => {
      console.log('AT WORK: Request received!');
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      console.log('SUCCESS: The new todo has been added.');
      state.push(action.payload.todo);
    },

    // toggle completed actions reducers
    [toggleCompleteAsync.pending]: (state, action) => {
      console.log('Action detected. Onto it...')
    },
    [toggleCompleteAsync.fulfilled]: (state, action) => {
      console.log('SUCCESS: Toggle action completed')
      const index = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state[index].completed = action.payload.completed;
    },

  },

});

export const { 
  addTodo,
  toggleComplete, 
  deleteTodo, 
} = toDoSlice.actions;

export default toDoSlice.reducer;