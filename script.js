"use strict";
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

const animatedSections = document.querySelectorAll(".animate-on-scroll");

const reveal = () => {
  animatedSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 100;

    if (isVisible) {
      section.classList.add("in-view");
    } else {
      section.classList.remove("in-view");
    }
  });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

const buttons = document.querySelectorAll(".title-experience-button");

// Menutech = 0
// Qwoted = 1
// Veeva = 2

const summaries = document.querySelectorAll(".experience-summary");

const openTab = function (index) {
  // hides and unhides the summary

  summaries.forEach((summary, i) => {
    summary.classList.toggle("hidden", index !== i);
  });

  //font weight
  buttons.forEach((button, i) => {
    if (index === i) {
      button.style.color = "#64ffda";
      button.style.fontWeight = "500";
    } else {
      button.style.color = "#8892b0";
      button.style.fontWeight = "400";
    }
  });
};

//
buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    openTab(index);
  });
});
//

const contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", function () {
  window.location.href = "mailto:neddarfaddy@gmail.com";
});
