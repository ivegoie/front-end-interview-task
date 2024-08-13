import TodoInput from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { createDeleteButtons } from "./components/DeleteButtons";

const main = document.querySelector("main");
const todosSection = main?.querySelector(".todos-section");
const inputSection = main?.querySelector(".input-section");

inputSection?.appendChild(
  TodoInput({ placeholder: "Add a new task", type: "text", title: "ADD" })
);
inputSection?.appendChild(
  TodoInput({
    placeholder: "Number of API Tasks",
    type: "number",
    title: "Add API Tasks",
    min: "1",
  })
);
inputSection?.appendChild(createDeleteButtons());

if (todosSection) {
  const existingContainer = todosSection.querySelector("#todo-container");
  if (existingContainer) {
    existingContainer.remove();
  }

  const todoContainer = document.createElement("div");
  todoContainer.id = "todo-container";
  todosSection.appendChild(todoContainer);

  TodoList();
}
