export default (function about() {
  const container = document.createElement("div");
  const heading = document.createElement("h2");
  const textCont = document.createElement("div");

  container.id = "about";
  heading.className = "heading";
  textCont.className = "text-cont";

  heading.innerText = "About us";
  textCont.innerHTML = `
    <p>We are a fake restaurant, the reason why our name is just "Restaurant" :). We do not own the images used on this website, all credits to <a target="_blank" href="https:/allrecipes.com">All Recipes</a> for the Menu's images and <a target="_blank" href="https://pexels.com">Pexels.com</a>'s artists for the Homepage's images. </p>
  `;

  container.append(heading, textCont);

  return container;
})();
