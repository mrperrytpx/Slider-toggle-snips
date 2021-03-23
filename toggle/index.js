const checkbox = document.querySelector(".input");
const text = document.querySelector("#gang");

checkbox.addEventListener("click", () => text.textContent = checkbox.checked);
