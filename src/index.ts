import confetti from "canvas-confetti";

export const createCelebrationButton = (container: HTMLElement) => {
  const button = document.createElement("button");
  button.classList.add("celebrate-button");
  container.classList.add("celebrate-container");
  button.textContent = " 🎉 Click to Celebrate  🎉";
  button.addEventListener("click", () => {
    confetti();
  });
  container.appendChild(button);
};
