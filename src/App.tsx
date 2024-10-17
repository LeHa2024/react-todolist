import { TodoProvider } from "./contexts/todoProvider";
import TodoList from "./todos/todoList";
import AddTodo from "./todos/todoForm";
import "./App.css";

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
