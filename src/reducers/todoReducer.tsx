export type todo = {
  id: number;
  text: string;
  status: "active" | "completed";
};

export type TodoState = {
  todos: todo[];
  filter: "all" | "active" | "completed";
};

export type TodoAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "REMOVE_TODO"; payload: number }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "REMOVE_ALL" }
  | { type: "SET_FILTER"; payload: "all" | "active" | "completed" };

export const initialState: TodoState = {
  todos: [
    {
      id: 1,
      text: "Tập thể dục buổi sáng",
      status: "active",
    },
    {
      id: 2,
      text: " Ăn sáng",
      status: "completed",
    },
    {
      id: 3,
      text: "Thực hành code",
      status: "active",
    },
  ],
  filter: "all",
};

export const todoReducer = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload,
            status: "active",
          },
        ],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? {
                ...todo,
                status: todo.status === "completed" ? "active" : "completed",
              }
            : todo
        ),
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "REMOVE_ALL":
      return {
        ...state,
        todos: [],
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
};
