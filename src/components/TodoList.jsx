function TodoList({ setTodos, toggleTodo, todos }) {

    function deleteTodos(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
    }

    return (
        <div className='card m-3 p-5'>
            <h1>ToDo List</h1>
            <ul className='list-group p-3'>
                {todos.length === 0 && 'No Todos'}
                {todos.map(todo => {
                    return (
                        <li key={todo.id} className='list-group-item m-1'>
                            <label>
                                <input type="checkbox" className='m-2'
                                    checked={todo.complited}
                                    onChange={e => toggleTodo(todo.id, e.target.checked)} />
                                {todo.tittle}
                            </label>
                            <button onClick={() => deleteTodos(todo.id)} className='btn btn-danger m-3'>Delete</button>
                        </li>
                    )
                })}


            </ul>
        </div>
    )
}

export default TodoList;