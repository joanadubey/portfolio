const cursor = document.querySelector(".custom-cursor");
let mouseX = 0,
  mouseY = 0;
let currentX = 0,
  currentY = 0;

function animateCursor() {
  currentX += (mouseX - currentX) * 0.03;
  currentY += (mouseY - currentY) * 0.03;
  cursor.style.transform = `translate(${currentX - 60}px, ${currentY - 60}px)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const projets = document.querySelectorAll(".projets");
projets.forEach((projet) => {
  projet.addEventListener("mouseenter", () => {
    cursor.style.opacity = 1;
  });
  projet.addEventListener("mouseleave", () => {
    cursor.style.opacity = 0;
  });
});

const nextElements = document.querySelectorAll(".next");
nextElements.forEach((nextEl) => {
  nextEl.addEventListener("mouseenter", () => {
    cursor.style.opacity = 1;
  });
  nextEl.addEventListener("mouseleave", () => {
    cursor.style.opacity = 0;
  });
});
