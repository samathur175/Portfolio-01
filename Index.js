const navslide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");
    //Lins Animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navlinkFade 1s ease forwards ${
          index / 7 + 0.5
        }`;
      }
    });
    // Burger icon annimation
    burger.classList.toggle("toggle");

    //Link seperator icons horizontal
  });
};
navslide();

const liTagSap = () => {
  const burger = document.querySelector(".burger");
  const tagsap1 = document.getElementById("li-tag-seperator1");
  const tagsap2 = document.getElementById("li-tag-seperator2");

  burger.addEventListener("click", () => {
    tagsap1.classList.remove("li-tag-seperator");
    tagsap2.classList.remove("li-tag-seperator");
  });
};
liTagSap();
