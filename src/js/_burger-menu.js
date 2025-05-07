const burgerMenu = document.querySelector(".burger-menu");
const burgerMenuContent = document.querySelector(".burger-menu-content");
const menuLinks = document.querySelectorAll(".burger-menu-content a");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  burgerMenuContent.classList.toggle("active");
});

// Ferme le menu quand on clique sur un lien
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    burgerMenuContent.classList.remove("active");
  });
});
