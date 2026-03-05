import { gsap } from "gsap";

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

// ACCORDION___________________________________________--

var accordionHeaders = document.querySelectorAll(".accordion h2");

accordionHeaders.forEach(function (header) {
  header.addEventListener("click", function (event) {
    event.stopPropagation();
    var accordionItem =
      this.closest(".accordion").querySelector(".accordion-item");
    if (accordionItem.classList.contains("accordion-item-open")) {
      accordionItem.classList.remove("accordion-item-open");
    } else {
      document.querySelectorAll(".accordion-item").forEach(function (item) {
        item.classList.remove("accordion-item-open");
      });
      accordionItem.classList.add("accordion-item-open");
    }
  });
});
