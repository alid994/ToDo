export default function TodoInput({ handeOnChange, newItem }) {
  return (
    <input
      value={newItem}
      onChange={handeOnChange}
      type="text"
      id="item"
      className="form-control mt-3"
    />
  );
}
