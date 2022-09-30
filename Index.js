const header = document.getElementById("header");
const banner = document.querySelector(".main-banner");

const sectionOneoptions = {};

const sectionOneobserver = new IntersectionObserver(function (
  entries,
  sectionOneobserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scroll");
    } else {
      header.classList.remove("nav-scroll");
    }
  });
},
sectionOneoptions);

sectionOneobserver.observe(banner);
