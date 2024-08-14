import { saveTodosLocalStorage, todos } from "../utils/todos";
import { TodoList } from "./TodoList";

interface TodoItem {
  text: string;
  id: number | string;
  completed?: boolean;
  fromApi?: boolean;
}

export const createTodoItem = (
  todo: TodoItem,
  fromApi: boolean | undefined
): HTMLLIElement => {
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo");

  const todoText = document.createElement("p");
  todoText.classList.add("todo__text");
  todoText.textContent = todo.text;

  if (fromApi) {
    todoItem.classList.add("api");
  }

  if (todo.completed) {
    todoText.classList.add("completed");
  }

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("todo__checkbox");
  checkbox.checked = todo.completed || false;

  todoText.addEventListener("click", () => {
    todo.completed = !todo.completed;
    checkbox.checked = todo.completed;
    todo.completed
      ? todoText.classList.add("completed")
      : todoText.classList.remove("completed");
    updateCompletedTasksCount();
    saveTodosLocalStorage();
  });

  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;
    todo.completed
      ? todoText.classList.add("completed")
      : todoText.classList.remove("completed");
    updateCompletedTasksCount();
    saveTodosLocalStorage();
  });

  const removeTodo = document.createElement("button");
  removeTodo.classList.add("todo__delete-btn");
  removeTodo.textContent = "Delete";
  removeTodo.addEventListener("click", () => {
    todos.splice(todos.indexOf(todo), 1);
    TodoList();
    updateCompletedTasksCount();
    saveTodosLocalStorage();
  });

  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(removeTodo);

  return todoItem;
};

export const updateCompletedTasksCount = () => {
  const completedTasksCount = todos.filter((todo) => todo.completed).length;
  const completedTasksElement = document.querySelector("#completed-tasks");
  if (completedTasksElement) {
    completedTasksElement.textContent = `Completed Tasks: ${completedTasksCount}`;
  }
};
