import { showAlert } from "../components/Alert";
import { TodoList } from "../components/TodoList";
import { todos } from "../utils/todos";
import { z } from "zod";

const todoSchema = z.object({
  todo: z.string(),
  id: z.number(),
  completed: z.boolean(),
});

const apiResponseSchema = z.object({
  todos: z.array(todoSchema),
});

type ApiTodo = z.infer<typeof todoSchema>;

export const addAPITodos = async (count: number) => {
  try {
    const response = await fetch(`https://dummyjson.com/todos?limit=${count}`);
    const data = await response.json();

    const parsedData = apiResponseSchema.safeParse(data);

    if (!parsedData.success) {
      throw new Error("Invalid API response format");
    }

    const apiTodos: ApiTodo[] = parsedData.data.todos;

    apiTodos.forEach((apiTodo) => {
      todos.push({
        text: apiTodo.todo,
        id: apiTodo.id,
        fromApi: true,
        completed: false,
      });
    });

    showAlert(
      `${
        count === 1
          ? `${count} API Task added successfully! 😁`
          : `${count} API Tasks added successfully! 😁`
      }`,
      "successfully"
    );

    TodoList();
  } catch (error) {
    showAlert("Failed to fetch API todos. Please try again.", "error");

    if (count !== 1) {
      showAlert("Insert a number to fetch Todos.", "warning");
    }
  }
};
