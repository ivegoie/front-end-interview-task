// src/components/DeleteButtons.ts
import { TodoList } from "./TodoList";
import { todos } from "../utils/todos";
import { showAlert } from "./Alert";

const createDeleteAllButton = (): HTMLButtonElement => {
  const deleteAllButton = document.createElement("button");
  deleteAllButton.textContent = "Delete All Tasks";
  deleteAllButton.classList.add("delete-buttons__btn");
  deleteAllButton.addEventListener("click", () => {
    todos.length = 0;
    if (todos.length === 0) {
      showAlert("No tasks found to delete.", "error");
    } else {
      showAlert("All tasks have been deleted!", "successfully");
      TodoList();
    }
    TodoList();
  });

  return deleteAllButton;
};

const createDeleteManualButton = (): HTMLButtonElement => {
  const deleteManualButton = document.createElement("button");
  deleteManualButton.textContent = "Delete Manual Tasks";
  deleteManualButton.classList.add("delete-buttons__btn");
  deleteManualButton.addEventListener("click", () => {
    const initialLength = todos.length;
    const filteredTodos = todos.filter((todo) => todo.fromApi);
    todos.length = 0;
    todos.push(...filteredTodos);
    if (todos.length < initialLength) {
      TodoList();
      showAlert("Manually added tasks have been deleted!", "successfully");
    } else {
      showAlert("No manual tasks found to delete.", "error");
    }
  });

  return deleteManualButton;
};

const createDeleteApiButton = (): HTMLButtonElement => {
  const deleteApiButton = document.createElement("button");
  deleteApiButton.textContent = "Delete API Tasks";
  deleteApiButton.classList.add("delete-buttons__btn");
  deleteApiButton.addEventListener("click", () => {
    const initialLength = todos.length;
    const filteredTodos = todos.filter((todo) => !todo.fromApi);
    todos.length = 0;
    todos.push(...filteredTodos);
    if (todos.length < initialLength) {
      TodoList();
      showAlert("API tasks have been deleted!", "successfully");
    } else {
      showAlert("No API tasks found to delete.", "error");
    }
  });

  return deleteApiButton;
};

export const createDeleteButtons = (): HTMLDivElement => {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("delete-buttons");

  const deleteAllButton = createDeleteAllButton();
  const deleteManualButton = createDeleteManualButton();
  const deleteApiButton = createDeleteApiButton();

  buttonContainer.appendChild(deleteAllButton);
  buttonContainer.appendChild(deleteManualButton);
  buttonContainer.appendChild(deleteApiButton);

  return buttonContainer;
};
