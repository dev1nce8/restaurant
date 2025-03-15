import caesarSalad from "../asset/recipes/caesar-salad.webp";
import guinessChili from "../asset/recipes/guiness-chili.webp";
import irishSodaBread from "../asset/recipes/irish-soda-bread.webp";
import misoNoodleSoup from "../asset/recipes/miso-noodle-soup.webp";
import cornedBeef from "../asset/recipes/corned-beef-stroganoff.webp";
import soyButterPasta from "../asset/recipes/soy-butter-pasta-with-chicken.webp";

export default (function menu() {
  const container = document.createElement("div");
  const heading = document.createElement("h2");
  const ul = document.createElement("ul");
  /* prettier-ignore */
  const imgSrcs = [
    ["Caesar Salad", caesarSalad],["Guiness Chili", guinessChili],
    ["Irish Soda Bread",irishSodaBread],["Miso Noodle Soup",misoNoodleSoup],
    ["Corned Beef Stroganoof", cornedBeef],["Soy Butter Pasta w/ Chicken",soyButterPasta],
  ];

  container.id = "menu";
  ul.className = "list";
  heading.className = "heading";

  heading.innerText = "Our Menu";

  imgSrcs.forEach((src) => {
    const li = document.createElement("li");
    const imgCont = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("p");
    img.src = src[1];
    title.innerText = src[0];
    imgCont.append(img);

    imgCont.className = "img-cont";

    li.append(title, imgCont);
    ul.append(li);
  });

  container.append(heading, ul);

  return container;
})();
