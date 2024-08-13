import { saveTodosLocalStorage, todos } from "../utils/todos";
import {
  createTodoItem,
  updateCompletedTasksCount,
} from "../components/TodoItem";

export const TodoList = (): void => {
  const todoContainer = document.querySelector("#todo-container");
  if (!todoContainer) return;

  todoContainer.innerHTML = "";

  if (todos.length === 0) {
    const noTasksMessage = document.createElement("p");
    noTasksMessage.textContent = "No tasks to show! 😁";
    noTasksMessage.classList.add("no-todo");
    todoContainer.appendChild(noTasksMessage);
  } else {
    const ul = document.createElement("ul");
    ul.classList.add("todos-list");

    todos.forEach((todo) => {
      const fromApi = todo.fromApi;
      const todoItem = createTodoItem(todo, fromApi);
      ul.appendChild(todoItem);
    });

    todoContainer.appendChild(ul);
  }

  updateCompletedTasksCount();

  saveTodosLocalStorage();
};

document.addEventListener("DOMContentLoaded", () => {
  TodoList();
});
