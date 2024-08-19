import { saveTodosLocalStorage, todos } from "../utils/todos";
import { TodoList } from "./TodoList";

interface TodoItem {
  text: string;
  id: number | string;
  completed?: boolean;
  fromApi?: boolean;
}

let draggedItem: HTMLLIElement | null = null;

const handleDragStart = (event: DragEvent) => {
  draggedItem = event.currentTarget as HTMLLIElement;
  event.dataTransfer?.setData("text/plain", draggedItem.dataset.id!);
  setTimeout(() => {
    draggedItem!.classList.add("todo__hidden");
  }, 0);
};

const handleDragOver = (event: DragEvent) => {
  event.preventDefault();
};

const handleDrop = (event: DragEvent) => {
  event.preventDefault();

  const target = event.currentTarget as HTMLLIElement;

  if (draggedItem && draggedItem !== target) {
    const ul = target.parentNode as HTMLUListElement;
    const draggedIndex = Array.from(ul.children).indexOf(draggedItem);
    const targetIndex = Array.from(ul.children).indexOf(target);

    const [movedTodo] = todos.splice(draggedIndex, 1);
    todos.splice(targetIndex, 0, movedTodo);

    ul.insertBefore(
      draggedItem,
      targetIndex > draggedIndex ? target.nextSibling : target
    );
    saveTodosLocalStorage();
  }
};

const handleDragEnd = () => {
  draggedItem?.classList.remove("todo__hidden");
  draggedItem = null;
};

export const createTodoItem = (
  todo: TodoItem,
  fromApi: boolean | undefined
): HTMLLIElement => {
  const todoItem = document.createElement("li");
  todoItem.setAttribute("draggable", "true");
  todoItem.dataset.id = todo.id.toString();
  todoItem.classList.add("todo");

  const todoText = document.createElement("p");
  todoText.setAttribute("contenteditable", "true");
  todoText.classList.add("todo__text");
  todoText.textContent = todo.text;

  todoText.addEventListener("blur", () => {
    const updatedText = todoText.textContent?.trim();
    if (updatedText) {
      todo.text = updatedText;
      saveTodosLocalStorage();
    }
  });

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

  todoItem.addEventListener("dblclick", () => {
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

  todoItem.addEventListener("dragstart", handleDragStart);
  todoItem.addEventListener("dragover", handleDragOver);
  todoItem.addEventListener("drop", handleDrop);
  todoItem.addEventListener("dragend", handleDragEnd);

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
