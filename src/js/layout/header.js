const hamburger = document.querySelector(".hamburger--spin");
const mobileNavs = document.querySelector(".header__menu-mobile");
const overlay = document.querySelector(".header__menu-mobile--overlay");
const search = document.querySelector(".header__search");



hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  mobileNavs.classList.toggle("is-active");
  overlay.classList.toggle("is-active");
});

search.addEventListener("click", () => {
  search.classList.toggle("is-active");
});
