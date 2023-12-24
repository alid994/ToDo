import { useState } from "react"
import Input from "./Input"
import TodoButton from "./TodoButton"

function Form({ setTodos }) {
    const [newItem, setNewItem] = useState('')


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
    return (
        <div className='card m-3'>
            <form onSubmit={handleSubmit} className='form p-5'>
                <label htmlFor="item">New Item</label>
                <Input newItem={newItem} setNewItem={setNewItem} />
                <TodoButton label='Add Todo' />
            </form>
        </div>
    )
}

export default Form;