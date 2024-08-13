const Alert = (message: string, style: string) => {
  const container = document.createElement("div");
  const span = document.createElement("span");

  span.textContent = message;
  container.classList.add(style);
  container.appendChild(span);

  return container;
};

export const showAlert = (
  message: string,
  style: "warning" | "successfully" | "error"
) => {
  const alertElement = Alert(message, style);
  document.body.appendChild(alertElement);

  setTimeout(() => {
    alertElement.remove();
  }, 3000);
};
