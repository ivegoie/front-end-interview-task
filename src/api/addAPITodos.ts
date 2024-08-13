import { showAlert } from "../components/Alert";
import { TodoList } from "../components/TodoList";
import { todos } from "../utils/todos";

export const addAPITodos = async (count: number) => {
  try {
    const response = await fetch(`https://dummyjson.com/todos?limit=${count}`);
    const data = await response.json();
    const apiTodos = data.todos;

    apiTodos.forEach(
      (apiTodo: { todo: string; id: number; completed: boolean }) => {
        todos.push({
          text: apiTodo.todo,
          id: apiTodo.id,
          fromApi: true,
          completed: false,
        });
      }
    );

    showAlert(
      `${
        count === 1
          ? `${count} API Task added successfully! 😁`
          : `${count} API Tasks added successfully! 😁`
      }`,
      "successfully"
    );

    console.log(todos);

    TodoList();
  } catch (error) {
    showAlert("Failed to fetch API todos. Please try again.", "error");
    if (count !== 1) {
      showAlert("Insert a number to fetch Todos.", "warning");
    }
  }
};
