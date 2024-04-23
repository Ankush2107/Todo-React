import Todo from "../Todo/Todo"
import "./TodoList.css"
function TodoList({ list }) {
  return (
    <div>
        {list.length > 0 && list.map(t => <Todo key={t.id} todoData={t.todoData} />)}
    </div>
     
  )
}

export default TodoList
