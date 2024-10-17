import { createContext } from "react";
import { TodoState, TodoAction } from "../reducers/todoReducer";

type TodoContextType = {
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
};

export const TodoContext = createContext<TodoContextType>({
  state: {
    todos: [],
    filter: "all",
  },
  dispatch: () => {},
});
