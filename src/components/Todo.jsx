export default function Todo({ todo, setTodos }) {
  const { id, title, completed } = todo;

  function toggleTodo() {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) return { ...todo, completed: !completed };
        return todo;
      });
    });
  }

  function deleteTodos() {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <li className="list-group-item m-1">
      <label>
        <input
          type="checkbox"
          className="m-2"
          checked={completed}
          onChange={toggleTodo}
        />
        {title}
      </label>
      <button onClick={deleteTodos} className="btn btn-danger m-3">
        Delete
      </button>
    </li>
  );
}
