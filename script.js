const header = document.getElementById("header");
const hero = document.getElementById("hero");

function checkIfOffScreen() {
  const rect = hero.getBoundingClientRect();
  const isOffScreen =
    rect.bottom < 0 ||
    rect.top > window.innerHeight ||
    rect.right < 0 ||
    rect.left > window.innerWidth;

  if (isOffScreen) {
    header.classList.remove("hidden");
  } else {
    if (!(header.classList.contains("hidden"))) {
      header.classList.add("hidden");
    }
  }
}

let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      checkIfOffScreen();
      ticking = false;
    });
    ticking = true;
  }
});
