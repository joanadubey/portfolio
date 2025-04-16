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
      end: "bottom",
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
      start: "top top+=" + (2 - index) * 200 + "px",
      // markers: true,
    },
    color: "blue",
    duration: 0.5,
  });
});

texts.forEach((text, index) => {
  console.log("bottom top+=" + ((2 - index) * 200 - 200) + "px");
  gsap.to(text, {
    scrollTrigger: {
      trigger: ".branches",
      start: "top top+=" + ((2 - index) * 200 - 200) + "px",
      markers: true,
    },
    color: "red",
    duration: 3,
  });
});

var projects = document.querySelectorAll(".projets");

projects.forEach((project) => {
  gsap.to(project, {
    scrollTrigger: {
      pin: project,
      trigger: "project",
      start: "top",
      end: "bottom",
      pinSpacing: false,
      // markers: true,
    },
  });
});

// gsap.to(".projets", {
//   scrollTrigger: {
//     pin: ".projets",
//     trigger: ".projets",
//     start: "top",
//     end: "bottom",
//     pinSpacing: false,
//     markers: true,
//   },
// });
// var branches = document.querySelectorAll(".projets");

// branches.forEach((branche) => {
//   gsap.to(branche, {
//     scrollTrigger: {
//       trigger: branche,
//       start: "bottom bottom",
//       scrub: 1,
//       markers: true,
//     },
//     duration: 5,
//   });
// });
