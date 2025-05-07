import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".visuel-homepage", {
  scrollTrigger: {
    pin: ".visuel-homepage",
    trigger: ".visuel-homepage",
    start: "top",
    end: "bottom",
    pinSpacing: false,
    // markers: true,
  },
});

var branches = document.querySelectorAll(".branches");

branches.forEach((branche) => {
  gsap.to(branche, {
    scrollTrigger: {
      pin: branche,
      trigger: branche,
      start: "top",
      end: "+=1000",
      pinSpacing: false,
      // markers: true,
    },
  });
});

var texts = document.querySelectorAll(".branches-text");

texts.forEach((text, index) => {
  gsap.to(text, {
    scrollTrigger: {
      trigger: ".branches",
      start: "top top+=" + (2 - index) * 100 + "px",

      // markers: true,
    },
    opacity: 1,
    duration: 3,
  });
});

texts.forEach((text, index) => {
  gsap.to(text, {
    scrollTrigger: {
      trigger: ".branches",
      start: "top top+=" + ((2 - index) * 200 - 200) + "px",

      markers: true,
    },
    opacity: 0,
    duration: 3,
  });
});

var projects = document.querySelectorAll(".projets");

projects.forEach((project) => {
  gsap.to(project, {
    scrollTrigger: {
      pin: project,
      trigger: project,
      start: "top",
      end: "bottom",
      pinSpacing: false,
      // markers: true,
    },
  });
});

var aProposSection = document.querySelector(".a-propos-homepage");
var contactSection = document.querySelector(".contact-homepage");

gsap.to(aProposSection, {
  scrollTrigger: {
    pin: true,
    trigger: aProposSection,
    start: "top top",
    end: "+=100%",
    pinSpacing: false,
    // markers: true,
  },
});

gsap.to(contactSection, {
  scrollTrigger: {
    pin: true,
    trigger: contactSection,
    start: "top top",
    end: "+=100%", // ou "bottom bottom"
    pinSpacing: true,
    // markers: true,
  },
});
