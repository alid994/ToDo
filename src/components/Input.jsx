function Input({ newItem, setNewItem }) {
    return (
        <input value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id='item'
            className='form-control mt-3' />
    )
}

export default Input;