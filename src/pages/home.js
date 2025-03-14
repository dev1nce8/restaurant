import galleryImg1 from "../asset/gallery-img-01.jpg";
import galleryImg2 from "../asset/gallery-img-02.jpg";
import galleryImg3 from "../asset/gallery-img-03.jpg";

export default (function home() {
  const container = document.createElement("div");
  const heroSect = document.createElement("section");
  const gallerySect = document.createElement("section");
  const heroHeading = document.createElement("h2");
  const heroSlogan = document.createElement("p");

  const imgSources = [galleryImg1, galleryImg2, galleryImg3];

  heroHeading.innerText = "Welcome to Restaurant!";
  heroSlogan.innerText = "Relax and just wait for your order";

  container.id = "home";
  heroSect.id = "hero";
  gallerySect.id = "gallery";

  heroHeading.className = "main-heading";
  heroSlogan.className = "slogan";

  imgSources.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    gallerySect.append(img);
  });

  heroSect.append(heroHeading, heroSlogan);
  container.append(heroSect, gallerySect);

  return container;
})();
