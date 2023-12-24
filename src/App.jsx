import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState(() => {
    const localStorageItems = localStorage.getItem('ITEMS')
    if (localStorageItems == null) return []

    return JSON.parse(localStorageItems)
  })

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])



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



  return (
    <>
      <Form setTodos={setTodos} />
      <TodoList setTodos={setTodos} toggleTodo={toggleTodo} todos={todos} />
    </>
  )
}

export default App
