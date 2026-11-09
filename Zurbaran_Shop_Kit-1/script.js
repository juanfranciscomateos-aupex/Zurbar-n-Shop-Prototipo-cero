document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".link-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.parentElement.querySelector("h3")?.textContent || "producto";
      button.textContent = "Solicitado: " + productName;
      button.disabled = true;
      button.style.opacity = "0.7";
      button.style.cursor = "default";
    });
  });
});
