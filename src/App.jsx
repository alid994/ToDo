import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localStorageItems = localStorage.getItem("ITEMS");
    if (localStorageItems == null) setTodos([]);
    setTodos(JSON.parse(localStorageItems));
  }, []);

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
