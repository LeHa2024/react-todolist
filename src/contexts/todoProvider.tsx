import { useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";
import { TodoContext } from "./todoContext";
import { initialState } from "../reducers/todoReducer";

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
