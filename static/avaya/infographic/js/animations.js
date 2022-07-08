gsap.registerPlugin(ScrollTrigger);

gsap.from("#aco-ccaas-5", { x: 200, autoAlpha: 0, opacity: 0 });

var lineDelay = 0.05;
var lineDuration = 1;
var imageDuration = 0.5;
var ease = "power4";

var photoOffsetX = 15;
var photoOffsetY = 15;
var photoDistance = 20;

for (var i = 1; i <= 9; i++) {
  gsap.from("#aco-ccaas-line" + i, {
    x: -100,
    delay: i * lineDelay,
    opacity: 0,
    duration: lineDuration,
    ease: ease,
  });
}

// for (var i = 1; i <= 4; i++) {
//   gsap.from("#aco-ccaas-mobile-header-line" + i, {
//     x: -100,
//     delay: i * lineDelay,
//     opacity: 0,
//     duration: lineDuration,
//     ease: ease,
//   });
// }

ScrollTrigger.create({
  trigger: "#aco-ccaas-phone",
  start: "top center",
  end: "bottom top",
  // markers: true,
  onUpdate: (self) => {
    document.getElementById("aco-ccaas-phone").style.height =
      self.progress * 200 + 550;
    document.getElementById("aco-ccaas-phone").style.marginLeft =
      -self.progress * 100;
  },
});

// Get element's location in the document
var stripeBlueRect = document
  .getElementById("aco-ccaas-stripe-blue")
  .getBoundingClientRect();

gsap.from("#aco-ccaas-stripe-blue", {
  scrollTrigger: {
    trigger: "#aco-ccaas-stripe-blue",
    // Set the start scroll at the element so it triggers on any scroll
    start: "top " + stripeBlueRect.bottom.toString(), // + bodyRect.top - stripeBlueRect.top,
    // markers: true,
  },
  y: 51,
  duration: 0.2,
});

// section 1 -------------------------------
// let t1 = gsap
//   .timeline()
//   .from("#aco-ccaas-section1-line1", { x: -200, opacity: 0, duration: 0.4 })
//   .from("#aco-ccaas-section1-line2", { x: -200, opacity: 0, duration: 0.3 })
//   .from("#aco-ccaas-section1-line3", { x: -200, opacity: 0, duration: 0.2 })
//   .from("#aco-ccaas-section1-line4", { x: -200, opacity: 0, duration: 0.2 })
//   .from("#aco-ccaas-section1-line5", { x: -200, opacity: 0, duration: 0.2 });

for (var i = 1; i <= 5; i++) {
  gsap.from("#aco-ccaas-section1-line" + i, {
    x: -100,
    delay: i * lineDelay,
    opacity: 0,
    duration: lineDuration,
    ease: ease,
  });
}

gsap.fromTo(
  "#aco-ccaas-section1-img1",
  {
    x: (photoOffsetX + photoDistance) * -1,
    y: (photoOffsetY + photoDistance) * -1,
    autoAlpha: 0,
  },
  {
    x: photoOffsetX * -1,
    y: photoOffsetY * -1,
    autoAlpha: 1,
    duration: imageDuration,
  }
);
gsap.fromTo(
  "#aco-ccaas-section1-img2",
  {
    x: photoOffsetX + photoDistance,
    y: photoOffsetY + photoDistance,
    autoAlpha: 0,
    duration: imageDuration,
  },
  {
    x: photoOffsetX,
    y: photoOffsetY,
    autoAlpha: 1,
    duration: imageDuration,
  }
);

// section 2 -------------------------------
let section2_background_trigger = {
  trigger: "#aco-ccaas-section2",
  start: "top 90%",
};
let section2_trigger = {
  trigger: "#aco-ccaas-section2",
  start: "top 60%",
};

gsap.from("#aco-ccaas-section2-background", {
  scrollTrigger: section2_background_trigger,
  x: "-100%",
  opacity: 0,
  duration: 1,
});

gsap.fromTo(
  "#aco-ccaas-section2-img1",
  {
    x: (photoOffsetX + photoDistance) * -1,
    y: (photoOffsetY + photoDistance) * -1,
    autoAlpha: 0,
  },
  {
    scrollTrigger: section2_trigger,
    x: photoOffsetX * -1,
    y: photoOffsetY * -1,
    autoAlpha: 1,
    duration: imageDuration,
  }
);

gsap.fromTo(
  "#aco-ccaas-section2-img2",
  {
    x: photoOffsetX + photoDistance,
    y: photoOffsetY + photoDistance,
    autoAlpha: 0,
  },
  {
    scrollTrigger: section2_trigger,
    x: photoOffsetX,
    y: photoOffsetY,
    autoAlpha: 1,
    duration: imageDuration,
  }
);

for (var i = 1; i <= 5; i++) {
  gsap.from("#aco-ccaas-section2-line" + i, {
    scrollTrigger: section2_trigger,
    x: -100,
    delay: i * lineDelay,
    opacity: 0,
    duration: lineDuration,
    ease: ease,
  });
}

// section 3 -------------------------------
let section3_trigger = {
  trigger: "#aco-ccaas-section3",
  start: "top 80%",
};

gsap.fromTo(
  "#aco-ccaas-section3-img1",
  {
    x: (photoOffsetX + photoDistance) * -1,
    y: (photoOffsetY + photoDistance) * -1,
    autoAlpha: 0,
  },
  {
    scrollTrigger: section3_trigger,
    x: photoOffsetX * -1,
    y: photoOffsetY * -1,
    autoAlpha: 1,
    duration: imageDuration,
  }
);

gsap.fromTo(
  "#aco-ccaas-section3-img2",
  {
    x: photoOffsetX + photoDistance,
    y: photoOffsetY + photoDistance,
    autoAlpha: 0,
  },
  {
    scrollTrigger: section3_trigger,
    x: photoOffsetX,
    y: photoOffsetY,
    autoAlpha: 1,
    duration: imageDuration,
  }
);

for (var i = 1; i <= 6; i++) {
  gsap.from("#aco-ccaas-section3-line" + i, {
    scrollTrigger: section3_trigger,
    x: -100,
    delay: i * lineDelay,
    opacity: 0,
    duration: lineDuration,
    ease: ease,
  });
}

// section 4 -------------------------------
let section4_background_trigger = {
  trigger: "#aco-ccaas-section4",
  start: "top 90%",
};
let section4_trigger = {
  trigger: "#aco-ccaas-section4",
  start: "top 60%",
};

gsap.from("#aco-ccaas-section4-background", {
  scrollTrigger: section4_background_trigger,
  x: "-100%",
  opacity: 0,
  duration: 1,
});

gsap.fromTo(
  "#aco-ccaas-section4-img1",
  {
    x: (photoOffsetX + photoDistance) * -1,
    y: (photoOffsetY + photoDistance) * -1,
    autoAlpha: 0,
  },
  {
    scrollTrigger: section4_trigger,
    x: photoOffsetX * -1,
    y: photoOffsetY * -1,
    autoAlpha: 1,
    duration: imageDuration,
  }
);

gsap.fromTo(
  "#aco-ccaas-section4-img2",
  {
    x: photoOffsetX + photoDistance,
    y: photoOffsetY + photoDistance,
    autoAlpha: 0,
  },
  {
    scrollTrigger: section4_trigger,
    x: photoOffsetX,
    y: photoOffsetY,
    autoAlpha: 1,
    duration: imageDuration,
  }
);

for (var i = 1; i <= 7; i++) {
  gsap.from("#aco-ccaas-section4-line" + i, {
    scrollTrigger: section4_trigger,
    x: -100,
    delay: i * lineDelay,
    opacity: 0,
    duration: lineDuration,
    ease: ease,
  });
}

// section 5 -------------------------------
let section5_trigger = {
  trigger: "#aco-ccaas-section5",
  start: "top 80%",
};

gsap.fromTo(
  "#aco-ccaas-section5-img1",
  {
    x: (photoOffsetX + photoDistance) * -1,
    y: (photoOffsetY + photoDistance) * -1,
    autoAlpha: 0,
  },
  {
    scrollTrigger: section5_trigger,
    x: photoOffsetX * -1,
    y: photoOffsetY * -1,
    autoAlpha: 1,
    duration: imageDuration,
  }
);

gsap.fromTo(
  "#aco-ccaas-section5-img2",
  {
    x: photoOffsetX + photoDistance,
    y: photoOffsetY + photoDistance,
    autoAlpha: 0,
  },
  {
    scrollTrigger: section5_trigger,
    x: photoOffsetX,
    y: photoOffsetY,
    autoAlpha: 1,
    duration: imageDuration,
  }
);

for (var i = 1; i <= 6; i++) {
  gsap.from("#aco-ccaas-section5-line" + i, {
    scrollTrigger: section5_trigger,
    x: -100,
    delay: i * lineDelay,
    opacity: 0,
    duration: lineDuration,
    ease: ease,
  });
}

// section 6 ---------------------------------------------------------------
let section6_trigger = {
  trigger: "#aco-ccaas-section6",
  start: "top 80%",
};
// let t6 = gsap.timeline({ scrollTrigger: section6_trigger });
// t6.from("#aco-ccaas-section6-line1", { x: -200, opacity: 0, duration: 0.3 });
// t6.from("#aco-ccaas-section6-line2", { x: -200, opacity: 0, duration: 0.3 });
// t6.from("#aco-ccaas-section6-line3", { x: -200, opacity: 0, duration: 0.4 });
// t6.from("#aco-ccaas-section6-button", { x: 0, opacity: 0, duration: 2 });

for (var i = 1; i <= 3; i++) {
  gsap.from("#aco-ccaas-section6-line" + i, {
    scrollTrigger: section6_trigger,
    x: -100,
    delay: i * lineDelay,
    opacity: 0,
    duration: lineDuration,
    ease: ease,
  });
}
gsap.from("#aco-ccaas-section6-button", {
  scrollTrigger: section6_trigger,
  x: 0,
  delay: 0.2,
  opacity: 0,
  duration: 1,
  ease: ease,
});
