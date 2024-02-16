import { useSelector, useDispatch } from "react-redux";
import { todoAdded, toggleComplete, deleteTodo } from "../redux/todoSlice";
import { useState } from "react";
import Link from "next/link";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  function handleInputChange(e) {
    setInput(e.target.value);
    console.log(input);
  }

  //action.payload.text = input som är lika med setInput(e.target.value)
  function handleAddItem(input) {
    input && dispatch(todoAdded({ text: input }));
    setInput("");
  }

  function handleDeleteItem(id) {
    dispatch(deleteTodo(id));
  }

  function handleToggleItem(id) {
    dispatch(toggleComplete(id));
  }

  return (
    <div className="flex flex-col items-center">
      <Link href="/Todos-with-zustand">To zustand</Link>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className="w-40 my-2"
      />
      <button onClick={() => handleAddItem(input)} className="w-40">
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
