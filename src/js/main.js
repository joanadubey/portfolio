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

var branches = document.querySelector(".branches");

gsap.to(branches, {
  scrollTrigger: {
    pin: branches,
    trigger: branches,
    start: "top",
    end: "+=100000",
    pinSpacing: false,
    // markers: true,
  },
});

var texts = document.querySelectorAll(".branches-text");

texts.forEach((text, index) => {
  gsap.to(text, {
    scrollTrigger: {
      trigger: "body",
      start:
        window.innerHeight * 1.5 +
        "px top+=" +
        (2 - index) * window.innerHeight * 0.5 +
        "px",
      end: "bottom top+=1000",
      // markers: true,
    },
    opacity: 1,
    duration: 3,
  });
  if (index !== 2) {
    gsap.to(text, {
      scrollTrigger: {
        trigger: "body",
        start:
          window.innerHeight * 2 +
          "px top+=" +
          (2 - index) * window.innerHeight * 0.5 +
          "px",
        end: "bottom top+=1000",
        // markers: true,
      },
      opacity: 0,
      duration: 3,
    });
  }
});

// texts.forEach((text, index) => {
//   gsap.to(text, {
//     scrollTrigger: {
//       trigger: ".branches",
//       start: "200px top+=" + ((2 - index) * 100 + 2) + "px",
//       end: "bottom top+=1000",
//       markers: true,
//     },
//     opacity: 1,
//     duration: 3,
//   });
// });

// texts.forEach((text, index) => {
//   gsap.to(text, {
//     scrollTrigger: {
//       trigger: ".branches",
//       start: "top top+=" + ((2 - index) * 200 - 200) + "px",

//       markers: true,
//     },
//     opacity: 0,
//     duration: 3,
//   });
// });

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

module.exports = {
  plugins: {
    "posthtml-extend": {
      root: "./src", // ou le dossier de tes templates
    },
  },
};
