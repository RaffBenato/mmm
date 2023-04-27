"use strict";

const logo = document.querySelector(`.logo-box`);
const landing = document.querySelector(`.landing-main`);
const logoInitialSize = logo.offsetWidth;
const logoSmallSize = logoInitialSize / 3;
const logoInitialPosition = logo.getBoundingClientRect().top;
console.log(logoInitialPosition);

let logoSize = 400;

window.addEventListener("scroll", function (e) {
  let logoPosition = logo.getBoundingClientRect().top;
  let landingPosition = landing.getBoundingClientRect().bottom;
  let screenPosition = window.innerHeight;

  if (logoPosition < 10) {
    logo.style.position = `fixed`;
    logo.style.top = `10px`;
    logo.style.width = `${logoSmallSize}px`;
    logo.style.height = `${logoSmallSize}px`;
    logo.style.backgroundColor = `rgba(245, 245, 245, 1)`;
  }

  if (landingPosition > screenPosition - 50) {
    logo.style.width = `${logoInitialSize}px`;
    logo.style.height = `${logoInitialSize}px`;
    logo.style.position = `absolute`;
    logo.style.top = `${logoInitialPosition}px`;
    logo.style.backgroundColor = `rgba(245, 245, 245, 0.24)`;
  }
});
