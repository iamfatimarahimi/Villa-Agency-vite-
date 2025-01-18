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
  const navbar = document.getElementById("mid-sec");
  if (window.scrollY >= 50) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
};
// Accordion
let headerItems = document.querySelectorAll(".accordion-item");
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
