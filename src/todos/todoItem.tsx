type Todo = {
  id: number;
  text: string;
  status: "active" | "completed";
};

type TodoItemProps = {
  todo: Todo;
  handleToggleTodo: (id: number) => void; // Thay đổi kiểu thành đúng
  todoRemove: (id: number) => void; // Thay đổi kiểu thành đúng
};
export function TodoItem({
  todo,
  handleToggleTodo,
  todoRemove,
}: TodoItemProps) {
  const handleCheckboxChange = () => {
    handleToggleTodo(todo.id);
  };

  const handleDelete = () => {
    todoRemove(todo.id);
  };

  return (
    <div className="todo_item">
      <input
        type="checkbox"
        className="checkbox"
        checked={todo.status === "completed"}
        onChange={handleCheckboxChange}
      />
      <span className="todo-label">{todo.text}</span>
      <button className="button-delete" onClick={handleDelete}>
        x
      </button>
    </div>
  );
}

export default TodoItem;
