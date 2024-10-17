import TodoItem from "./todoItem";
import { useTodo } from "../hooks/useTodo";

function TodoList() {
  const { state, handleToggleTodo, todoRemove, removeAll, setFilter } =
    useTodo();

  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === "completed") return todo.status === "completed";
    if (state.filter === "active") return todo.status === "active";
    return true;
  });

  return (
    <div>
      <h3>Danh sách công việc:</h3>

      <div className="filter">
        <button onClick={() => setFilter("all")}>Tất cả</button>
        <button onClick={() => setFilter("active")}>Chưa hoàn thành</button>
        <button onClick={() => setFilter("completed")}>Đã hoàn thành</button>
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleToggleTodo={() => handleToggleTodo(todo.id)}
            todoRemove={() => todoRemove(todo.id)}
          />
        ))}
      </ul>
      <button className="clear-all" onClick={removeAll}>
        Clear all
      </button>
    </div>
  );
}

export default TodoList;
