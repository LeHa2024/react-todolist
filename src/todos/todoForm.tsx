import { useTodo } from "../hooks/useTodo";

function TodoForm() {
  // Đổi tên hàm thành TodoForm
  const { addTodo } = useTodo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định của form
    const input = e.currentTarget.elements[0] as HTMLInputElement; // Sử dụng e.currentTarget để lấy phần tử đúng
    const text = input.value; // Lấy giá trị từ input
    if (text.trim() === "") return; // Kiểm tra nếu input rỗng
    addTodo(text); // Thêm todo mới
    e.currentTarget.reset(); // Reset form sau khi submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-text"
        placeholder="Thêm công việc..."
      />
      <button type="submit" className="submit-btn">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
