function Todo({ todoData }) {
  return (
    <div>
        <input type="checkbox" checked={true} />
        {todoData}
        <button>Edit</button>
        <button>Delete</button>
    </div>
  )
}

export default Todo
