import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';

function App() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState(() => {
    const localStorageItems = localStorage.getItem('ITEMS')
    if (localStorageItems == null) return []

    return JSON.parse(localStorageItems)
  })

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          tittle: newItem,
          complited: false
        }
      ]
    })

    setNewItem('')
  }

  function toggleTodo(id, complited) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complited }
        }

        return todo
      })
    })
  }

  function deleteTodos(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <div className='card m-3'>
        <form onSubmit={handleSubmit} className='form p-5'>
          <label htmlFor="item">New Item</label>
          <input value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id='item'
            className='form-control mt-3' />
          <button className='btn btn-primary w-100 mt-3'>Add</button>
        </form>
      </div>
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
    </>
  )
}

export default App
