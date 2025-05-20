const burgerMenu = document.querySelector(".burger-menu");
const burgerMenuContent = document.querySelector(".burger-menu-content");
const menuLinks = document.querySelectorAll(".burger-menu-content a");


burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  burgerMenuContent.classList.toggle("active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);


    burgerMenu.classList.remove("active");
    burgerMenuContent.classList.remove("active");


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
