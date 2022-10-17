// ------------------------------ navbar
const navBtn = document.querySelector("#nav-btn");
const navMobile = document.querySelector(".nav-mobile");
const navBg = document.querySelector(".nav-container");
const links = document.querySelectorAll(".header-nav-mobile");

navBtn.addEventListener("click", toggleNav);

navBg.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-container")) {
    toggleNav();
  }
});

links.forEach((link) => {
  link.addEventListener("click", toggleNav);
});

function toggleNav() {
  navBtn.classList.toggle("bx-menu");
  navBtn.classList.toggle("bx-x");
  navMobile.classList.toggle("hidden");
  navBg.classList.toggle("hidden");
}

// ----------------------------------- Smooth Scroll
const Scroll = new SmoothScroll("nav a[href*='#']", {
  speed: 800,
});
