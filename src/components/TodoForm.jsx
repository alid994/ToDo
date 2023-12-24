import TodoInput from "./TodoInput.jsx";
import TodoButton from "./TodoButton.jsx";
import { useState } from "react";

export default function TodoForm({ setTodos }) {
  const [newItem, setNewItem] = useState("");

  function handeOnChange(e) {
    setNewItem(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: newItem,
      completed: false,
    };
    setNewItem("");
    setTodos((prevState) => [...prevState, newTodo]);
    //treba vratiti tip podataka koji je bio u state-u
    //on ima pristup prethodnom stanju
  }

  return (
    <div className="card m-3">
      <form onSubmit={handleOnSubmit} className="form p-5">
        <label htmlFor="item">New Item</label>
        <TodoInput handeOnChange={handeOnChange} newItem={newItem} />
        <TodoButton label="ADD todo" />
      </form>
    </div>
  );
}
