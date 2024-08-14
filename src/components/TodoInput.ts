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

  let isLoading = false;

  input.classList.add("input-container__todo-input");
  input.setAttribute("placeholder", props.placeholder);
  input.setAttribute("type", props.type);
  props.min && input.setAttribute("min", props.min);

  button.classList.add("input-container__add-btn");
  button.textContent = props.title;

  container.classList.add("input-container");
  container.appendChild(input);
  container.appendChild(button);

  const setLoadingState = (loading: boolean) => {
    isLoading = loading;

    if (isLoading) {
      button.disabled = true;
      button.textContent = "Loading...";
      button.style.cursor = "default";
    } else {
      button.disabled = false;
      button.textContent = props.title;
      button.style.cursor = "pointer";
    }
  };

  if (input.getAttribute("type") === "number") {
    button.addEventListener("click", async () => {
      const count = parseInt(input.value);
      if (!isNaN(count)) {
        setLoadingState(true);
        try {
          await addAPITodos(count);
        } finally {
          setLoadingState(false);
          input.value = "";
        }
      } else {
        showAlert("Please enter a valid number!", "warning");
      }
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
