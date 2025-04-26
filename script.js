"use strict";
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

const veevaButton = document.querySelector(".veeva-experience"); // moved to an arrary called buttons
const qwotedButton = document.querySelector(".qwoted-experience"); // moved to an arrary called buttons
const menutechButton = document.querySelector(".menutech-experience"); // moved to an arrary called buttons
const experienceSummary = document.querySelectorAll(".experience-summary"); // stayed as it
const openQwotedTab = function () {
  experienceSummary[0].classList.add("hidden");
  experienceSummary[1].classList.remove("hidden");
  experienceSummary[2].classList.add("hidden");
  qwotedButton.style.color = "#64ffda";
  veevaButton.style.color = "#8892b0";
  menutechButton.style.color = "#8892b0";
  qwotedButton.style.fontWeight = "500";
  veevaButton.style.fontWeight = "400";
  menutechButton.style.fontWeight = "400";
};

const openVeevaTab = function () {
  experienceSummary[0].classList.add("hidden");
  experienceSummary[1].classList.add("hidden");
  experienceSummary[2].classList.remove("hidden");
  veevaButton.style.color = "#64ffda";
  menutechButton.style.color = "#8892b0";
  qwotedButton.style.color = "#8892b0";
  qwotedButton.style.fontWeight = "400";
  veevaButton.style.fontWeight = "500";
  menutechButton.style.fontWeight = "400";
};

const openMenutechTab = function () {
  experienceSummary[0].classList.remove("hidden");
  experienceSummary[1].classList.add("hidden");
  experienceSummary[2].classList.add("hidden");
  veevaButton.style.color = "#8892b0";
  menutechButton.style.color = "#64ffda";
  qwotedButton.style.color = "#8892b0";
  qwotedButton.style.fontWeight = "400";
  veevaButton.style.fontWeight = "400";
  menutechButton.style.fontWeight = "500";
};

qwotedButton.addEventListener("click", function () {
  openQwotedTab();
});

veevaButton.addEventListener("click", function () {
  openVeevaTab();
});

menutechButton.addEventListener("click", function () {
  openMenutechTab();
});
