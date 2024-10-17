import { useContext } from "react";
import { TodoContext } from "../contexts/todoContext";
import { TodoState } from "../reducers/todoReducer";
import { TodoAction } from "../reducers/todoReducer";

type UseTodoReturn = {
  state: TodoState;
  addTodo: (text: string) => void;
  handleToggleTodo: (id: number) => void;
  todoRemove: (id: number) => void;
  removeAll: () => void;
  setFilter: (filter: "all" | "active" | "completed") => void;
};

export const useTodo = (): UseTodoReturn => {
  const { state, dispatch } = useContext<{
    state: TodoState;
    dispatch: React.Dispatch<TodoAction>;
  }>(TodoContext);

  const addTodo = (text: string) => {
    dispatch({ type: "ADD_TODO", payload: text });
  };

  const handleToggleTodo = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const todoRemove = (id: number) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const removeAll = () => {
    dispatch({ type: "REMOVE_ALL" });
  };

  const setFilter = (filter: "all" | "active" | "completed") => {
    dispatch({ type: "SET_FILTER", payload: filter });
  };

  return {
    state,
    addTodo,
    handleToggleTodo,
    todoRemove,
    removeAll,
    setFilter,
  };
};
