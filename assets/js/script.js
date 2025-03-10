'use strict';

/**
 * Utility function to add an event listener to one or multiple elements
 */
const addEventOnElem = (elems, type, callback) => {
  if (NodeList.prototype.isPrototypeOf(elems)) {
    elems.forEach(elem => elem.addEventListener(type, callback));
  } else {
    elems.addEventListener(type, callback);
  }
};

/**
 * Navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

addEventOnElem(navTogglers, "click", () => navbar.classList.toggle("active"));
addEventOnElem(navLinks, "click", () => navbar.classList.remove("active"));

/**
 * Header & back-to-top button toggle on scroll
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY >= 100;
  header.classList.toggle("active", isScrolled);
  backTopBtn.classList.toggle("active", isScrolled);
});

/**
 * Before-After Image Slider
 */
const setupBeforeAfterSlider = (container) => {
  const beforeImg = container.querySelector(".before-img");
  const afterImg = container.querySelector(".after-img");
  const sliderBar = container.querySelector(".slider-bar");

  let isDragging = false;

  const updateSlider = (positionX, rect) => {
    let percent = ((positionX - rect.left) / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    
    beforeImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    afterImg.style.clipPath = `inset(0 0 0 ${percent}%)`;
    sliderBar.style.left = `${percent}%`;
  };

  const startDrag = () => {
    isDragging = true;
    document.body.style.userSelect = "none";
  };

  const stopDrag = () => {
    isDragging = false;
    document.body.style.userSelect = "auto";
  };

  const moveSlider = (event) => {
    if (!isDragging) return;
    const rect = container.getBoundingClientRect();
    const positionX = event.touches ? event.touches[0].clientX : event.clientX;
    updateSlider(positionX, rect);
  };

  addEventOnElem(sliderBar, "mousedown", startDrag);
  addEventOnElem(document, "mouseup", stopDrag);
  addEventOnElem(document, "mousemove", moveSlider);

  addEventOnElem(sliderBar, "touchstart", startDrag, { passive: true });
  addEventOnElem(document, "touchend", stopDrag);
  addEventOnElem(document, "touchmove", moveSlider, { passive: true });
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".before-after-image").forEach(setupBeforeAfterSlider);
});

/**
 * FAQ Accordion
 */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-item").forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});

/**
 * Trainers Carousel
 */
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".trainers-carousel");
  if (!carousel) return;

  document.querySelector(".left").addEventListener("click", () => {
    carousel.scrollBy({ left: -250, behavior: "smooth" });
  });

  document.querySelector(".right").addEventListener("click", () => {
    carousel.scrollBy({ left: 250, behavior: "smooth" });
  });
});
