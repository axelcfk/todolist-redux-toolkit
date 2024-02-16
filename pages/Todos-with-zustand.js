import Link from "next/link";
import useTodoStore from "@/redux/ZustandStore";
import { useState } from "react";

export default function Todo() {
  const { todos, addTodo, toggleComplete, deleteTodo } = useTodoStore();
  const [text, setText] = useState("");

  function handleAddItem(text) {
    text ? addTodo(text) : null;
    setText("");
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleToggleItem(id) {
    toggleComplete(id);
  }

  function handleDeleteItem(id) {
    deleteTodo(id);
  }

  return (
    <div className="flex flex-col items-center ">
      <Link href="/Todos-with-redux">To redux</Link>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        className="w-40 my-2"
      />
      <button onClick={() => handleAddItem(text)} className="w-40">
        Add Todo
      </button>
      <ul>
        {Array.isArray(todos) &&
          todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "",
              }}
            >
              {todo.text}{" "}
              <button onClick={() => handleToggleItem(todo.id)}>
                Toggle Complete
              </button>{" "}
              <button onClick={() => handleDeleteItem(todo.id)}>
                Delete Todo
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
