import Todo from "./Todo.jsx";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className="card m-3 p-5">
      <h1>ToDo List</h1>
      <ul className="list-group p-3">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => (
          <Todo todo={todo} setTodos={setTodos} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}
