import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: (state, action) => {
      const todo = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      };
      state.push(todo);
    },
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo && (todo.completed = !todo.completed);
    },

    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { todoAdded, toggleComplete, deleteTodo } = todoSlice.actions;
