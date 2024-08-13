import { addAPITodos } from "../api/addAPITodos";
import { todos } from "../utils/todos";
import { showAlert } from "./Alert";
import { TodoList } from "./TodoList";

interface TodoInput {
  title: string;
  placeholder: string;
  type: string;
  min?: string;
}

const TodoInput = (props: TodoInput): HTMLDivElement => {
  const container = document.createElement("div");
  const input = document.createElement("input");
  const button = document.createElement("button");

  input.classList.add("input-container__todo-input");
  input.setAttribute("placeholder", props.placeholder);
  input.setAttribute("type", props.type);
  props.min && input.setAttribute("min", props.min);

  button.classList.add("input-container__add-btn");
  button.textContent = props.title;

  container.classList.add("input-container");
  container.appendChild(input);
  container.appendChild(button);

  if (input.getAttribute("type") === "number") {
    button.addEventListener("click", () => {
      const count = parseInt(input.value);
      addAPITodos(count);
      input.value = "";
    });
  } else {
    button.addEventListener("click", () => {
      const todo = input.value;
      if (input.value === "") {
        showAlert("Please enter a task!", "warning");
      }

      if (todo) {
        let uid = Date.now().toString(36) + Math.random().toString(36);
        todos.push({ text: todo, id: uid, completed: false });
        input.value = "";
        TodoList();
        showAlert("Task added successfully! 😁", "successfully");
      }
    });
  }

  return container;
};

export default TodoInput;
