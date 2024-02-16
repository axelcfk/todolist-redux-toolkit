import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (text) => {
    set((state) => {
      const todo = {
        id: Date.now(),
        text: text,
        completed: false,
      };
      return { todos: [...state.todos, todo] };
    });
  },
  toggleComplete: (id) => {
    set((state) => {
      return {
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    });
  },
  deleteTodo: (id) => {
    set((state) => {
      return { todos: state.todos.filter((todo) => todo.id !== id) };
    });
  },
}));

export default useTodoStore;
