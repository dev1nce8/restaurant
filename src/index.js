import changePage from "./controller/changePage.js";
import "./css/reset.css";
import "./css/style.css";
import home from "./pages/home.js";
import menu from "./pages/menu.js";
import about from "./pages/about.js";

const container = document.getElementById("content");
const navButtons = document.querySelectorAll("#nav-buttons button");

// initial page render
changePage(container, home);

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.dataset.name) {
      case "home":
        changePage(container, home);
        break;
      case "menu":
        changePage(container, menu);
        break;
      case "about":
        changePage(container, about);
        break;
    }
  });
});
