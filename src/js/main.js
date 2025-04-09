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
    markers: true,
  },
});
var branches = document.querySelectorAll(".branches");

branches.forEach((branche) => {
  gsap.to(branche, {
    scrollTrigger: {
      trigger: branche,
      start: "bottom bottom",
      scrub: 1,
      markers: true,
    },
    x: 400,
    rotation: 90,
    duration: 5,
  });
});
