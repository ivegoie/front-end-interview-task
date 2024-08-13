export interface TodoItem {
  text: string;
  id: number | string;
  completed?: boolean;
  fromApi?: boolean;
}

export const todos: TodoItem[] = JSON.parse(
  localStorage.getItem("todos") || "[]"
);

export const saveTodosLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
