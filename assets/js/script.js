'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


document.querySelectorAll(".before-after-image").forEach(container => {
    const beforeImg = container.querySelector(".before-img");
    const afterImg = container.querySelector(".after-img");
    const sliderBar = container.querySelector(".slider-bar");

    let isDragging = false;

    sliderBar.addEventListener("mousedown", (e) => {
        isDragging = true;
        document.body.style.userSelect = "none"; // Prevent text selection
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        document.body.style.userSelect = "auto";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        let rect = container.getBoundingClientRect();
        let offsetX = e.clientX - rect.left;
        let percent = (offsetX / rect.width) * 100;

        if (percent < 0) percent = 0;
        if (percent > 100) percent = 100;

        beforeImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
        afterImg.style.clipPath = `inset(0 0 0 ${percent}%)`;
        sliderBar.style.left = `${percent}%`;
    });

    // For touch screens
    sliderBar.addEventListener("touchstart", (e) => {
        isDragging = true;
    });

    document.addEventListener("touchend", () => {
        isDragging = false;
    });

    document.addEventListener("touchmove", (e) => {
        if (!isDragging) return;

        let touch = e.touches[0];
        let rect = container.getBoundingClientRect();
        let offsetX = touch.clientX - rect.left;
        let percent = (offsetX / rect.width) * 100;

        if (percent < 0) percent = 0;
        if (percent > 100) percent = 100;

        beforeImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
        afterImg.style.clipPath = `inset(0 0 0 ${percent}%)`;
        sliderBar.style.left = `${percent}%`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const sliderBar = document.querySelector(".slider-bar");
  const sliderHandle = document.querySelector(".slider-handle");
  const progressFill = document.querySelector(".unique-progress-fill");
  const beforeImg = document.querySelector(".before-img");
  const afterImg = document.querySelector(".after-img");
  const imageContainer = document.querySelector(".before-after-image");

  let isDragging = false;

  sliderBar.addEventListener("mousedown", function (event) {
    isDragging = true;
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
    document.body.style.userSelect = "auto";
  });

  document.addEventListener("mousemove", function (event) {
    if (!isDragging) return;

    let rect = imageContainer.getBoundingClientRect(); // Get full image container width
    let offsetX = event.clientX - rect.left;
    let percentage = (offsetX / rect.width) * 100;

    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    beforeImg.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    afterImg.style.clipPath = `inset(0 0 0 ${percentage}%)`;
    sliderBar.style.left = `${percentage}%`;
    progressFill.style.width = `${percentage}%`; // 🔹 Fixed: Uses full image width now
  });

  // Touchscreen support
  sliderBar.addEventListener("touchstart", function () {
    isDragging = true;
  });

  document.addEventListener("touchend", function () {
    isDragging = false;
  });

  document.addEventListener("touchmove", function (event) {
    if (!isDragging) return;

    let touch = event.touches[0];
    let rect = imageContainer.getBoundingClientRect();
    let offsetX = touch.clientX - rect.left;
    let percentage = (offsetX / rect.width) * 100;

    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    beforeImg.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    afterImg.style.clipPath = `inset(0 0 0 ${percentage}%)`;
    sliderBar.style.left = `${percentage}%`;
    progressFill.style.width = `${percentage}%`; // 🔹 Fixed: Uses full image width now
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
      const question = item.querySelector(".faq-question");

      question.addEventListener("click", function () {
          item.classList.toggle("active");
      });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".trainers-carousel");

  if (!carousel) {
    console.error("Carousel element not found");
    return;
  }

  document.querySelector(".left").addEventListener("click", function () {
    carousel.scrollBy({ left: -250, behavior: "smooth" });
  });

  document.querySelector(".right").addEventListener("click", function () {
    carousel.scrollBy({ left: 250, behavior: "smooth" });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  let heroSection = document.querySelector(".hero"); 
  let heroTitle = document.querySelector(".hero-title");
  let heroSubtitle = document.querySelector(".hero-subtitle");
  let heroText = document.querySelector(".hero-text");

  // Check if elements exist before applying changes
  if (heroSection) {
      console.log("Hero section found!");
      heroSection.classList.add("hero-active");
  } else {
      console.error("Element not found! Check if the class exists in the HTML.");
  }

  if (heroTitle) {
      heroTitle.style.opacity = "1";
      heroTitle.style.transform = "translateY(0)";
  }

  if (heroSubtitle) {
      heroSubtitle.style.opacity = "1";
      heroSubtitle.style.transform = "translateY(0)";
  }

  if (heroText) {
      heroText.style.opacity = "1";
      heroText.style.transform = "translateY(0)";
  }
});

