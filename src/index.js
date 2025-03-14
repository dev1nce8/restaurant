import changePage from "./controller/changePage.js";
import "./css/reset.css";
import "./css/style.css";
import home from "./pages/home.js";

const container = document.getElementById("content");
const navButtons = document.querySelectorAll("#nav-buttons button");

changePage(container, home);
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.name === "home") {
      changePage(container, home);
    }
  });
});
