import mainImage from "../assets/main2x.jpg";

function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const mainImgElement = document.createElement("img");
  mainImgElement.src = mainImage;

  const introParagraph = document.createElement("p");
  introParagraph.textContent =
    "Welcome to Veridian, where the essence of fresh, seasonal ingredients is artfully transformed into a sophisticated dining experience. Our meticulously crafted menu emphasizes clean flavors and elegant presentation, served in an atmosphere of understated refinement.";
  introParagraph.className = "intro-p";

  content.appendChild(mainImgElement);
  content.appendChild(introParagraph);
}

export default loadHome;
