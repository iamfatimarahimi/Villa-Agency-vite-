import { addPrevNextBtnsClickHandlers } from "./EmblaCarouselArrowButtons.js";
import { addDotBtnsAndClickHandlers } from "./EmblaCarouselDotButton.js";

const OPTIONS = { dragFree: true, loop: true };

const emblaNode = document.querySelector(".embla");
const prevBtnNode = emblaNode.querySelector(".embla__button--prev");
const nextBtnNode = emblaNode.querySelector(".embla__button--next");
const dotsNode = emblaNode.querySelector(".embla__dots");

const emblaApi = EmblaCarousel(emblaNode, OPTIONS);

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
  emblaApi,
  prevBtnNode,
  nextBtnNode
);
const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
  emblaApi,
  dotsNode
);

emblaApi.on("destroy", removePrevNextBtnsClickHandlers);
emblaApi.on("destroy", removeDotBtnsAndClickHandlers);
//Navbar scroll
window.onscroll = function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY >= 50) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
};
// Accordion
let headerItems = document.querySelectorAll(".accordion-head");
function closeAllAccordion(i) {
  headerItems.forEach((item) => {
    if (!(item === i)) {
      item.classList.remove("active");
    }
  });
}
function addActiveFunc(i) {
  if (i.classList.contains("active")) {
    i.classList.remove("active");
  } else {
    i.classList.add("active");
  }
}
for (let i of headerItems) {
  i.addEventListener("click", () => {
    closeAllAccordion(i);
    addActiveFunc(i);
  });
}
//PAGE CHANGE
let buttons = document.querySelectorAll(".bulding");
let buttonsSelected = document.querySelector(".bulding-active");
// for (let b of buttons) {
// function addColor(b) {
//   if (b.classList.contains("bulding-active")) {
//     b.classList.remove("bulding-active");
//   } else {
//     b.classList.add("bulding-active");
//   }
// }

// b.addEventListener("click", () => {
//   // addColor(b);
//   if (buttonsSelected) {
//     buttonsSelected.classList.remove("bulding-active");
//     b.classList.add("bulding-active");
//   }
// });
let Apartment = document.querySelector("#Apartment");
let Villa = document.querySelector("#Villa");
let Petnhouse = document.querySelector("#Penthouse");
function closeAll(b) {
  buttons.forEach((itemColor) => {
    if (!(itemColor === b)) {
      itemColor.classList.remove("bulding-active");
    }
  });
}
function addActive(b) {
  if (b.classList.contains("bulding-active")) {
    b.classList.remove("bulding-active");
  } else {
    b.classList.add("bulding-active");
  }
}
function showPage(b) {
  if (b.id === "bulding1") {
    Apartment.classList.remove("shown");
    Villa.classList.add("shown");
    Petnhouse.classList.add("shown");
  } else if (b.id === "bulding2") {
    Villa.classList.remove("shown");
    Apartment.classList.add("shown");
    Petnhouse.classList.add("shown");
  } else if (b.id === "bulding3") {
    Petnhouse.classList.remove("shown");
    Apartment.classList.add("shown");
    Villa.classList.add("shown");
  }
  // console.log(b);
}
for (let b of buttons) {
  b.addEventListener("click", () => {
    closeAll(b);
    addActive(b);
    showPage(b);
  });
}
// }
