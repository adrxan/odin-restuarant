console.log("hello!");
import "./styles.css";
import homePage from "./modules/homePage.js";
import menuPage from "./modules/menuPage.js";
import contactPage from "./modules/contactPage.js";

function setActiveButton(buttonId) {
  document.querySelectorAll(".button-group button").forEach((btn) => {
    btn.classList.remove("active");
  });

  document.getElementById(buttonId).classList.add("active");
}

document.getElementById("home-btn").addEventListener("click", () => {
  homePage();
  setActiveButton("home-btn");
});

document.getElementById("menu-btn").addEventListener("click", () => {
  menuPage();
  setActiveButton("menu-btn");
});

document.getElementById("contact-btn").addEventListener("click", () => {
  contactPage();
  setActiveButton("contact-btn");
});

document.addEventListener("DOMContentLoaded", () => {
  homePage();
  setActiveButton("home-btn");
});
