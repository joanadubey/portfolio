const burgerMenu = document.querySelector(".burger-menu");
const burgerMenuContent = document.querySelector(".burger-menu-content");
const menuLinks = document.querySelectorAll(".burger-menu-content a");

// Ouvre ou ferme le menu au clic sur l'icône
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  burgerMenuContent.classList.toggle("active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    // Ferme le menu
    burgerMenu.classList.remove("active");
    burgerMenuContent.classList.remove("active");

    // Laisse le temps à l’animation du menu de se fermer
    setTimeout(() => {
      const offset =
        targetElement.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }, 300);
  });
});
