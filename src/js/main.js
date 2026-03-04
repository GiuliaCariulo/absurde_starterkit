// BURGER MENU___________________________________________--
var burger = document.querySelector(".menu-burger");
var menu = document.querySelector(".menu-mobile");
var menuItems = document.querySelectorAll(".menu-mobile .menu-item");

function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
}
burger.addEventListener("click", toggleMenu);
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
