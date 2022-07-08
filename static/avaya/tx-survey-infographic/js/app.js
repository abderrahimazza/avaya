// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {
  // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
  // you could also use addEventListener() instead
  window.onload = function () {
    window.requestAnimationFrame(function () {
      // Loop Over Lotties
      gsap.utils.toArray(".cxtllp-lottie").forEach(function (elem, i) {
        ScrollTrigger.create({
          trigger: elem,
          start: "top 70%",
          // end: "bottom top",
          // markers: true,
          onUpdate: (self) => {
            // console.log("start", self.trigger.src);
            // Start Lottie Animation
            self.trigger.play();
          },
        });
      });

      gsap.to("#avaya-hero-image", {
        scrollTrigger: {
          trigger: "#avaya-hero-image",
          //   markers: true,
          start: "top top",
        },
        y: -50,
        duration: 3,
      });

      gsap.to("#avaya-hero-image2", {
        scrollTrigger: {
          trigger: "#avaya-hero-image2",
          // markers: true,
          start: "top 30%",
        },
        y: -50,
        duration: 3,
      });

      let triggered1 = false;
      ScrollTrigger.create({
        trigger: "#avaya-number1a",
        start: "top 70%",
        // markers: true,
        onToggle: (self) => {
          if (!triggered1) {
            let n1 = document.getElementById("avaya-number1a");
            let n2 = document.getElementById("avaya-number1b");
            let n3 = document.getElementById("avaya-number1c");

            let i = 0;
            let counter = setInterval(() => {
              i++;
              if (i <= 82) {
                n1.innerHTML = i;
              }
              if (i <= 83) {
                n2.innerHTML = i;
              }
              if (i <= 83) {
                n3.innerHTML = i;
              }
              if (i == 100) {
                clearInterval(counter);
              }
            }, 10);

            triggered1 = true;
          }
        },
      });

      let triggered1m = false;
      ScrollTrigger.create({
        trigger: "#avaya-number1a-mobile",
        start: "top 50%",
        // markers: true,
        onToggle: (self) => {
          if (!triggered1m) {
            let n1 = document.getElementById("avaya-number1a-mobile");
            let n2 = document.getElementById("avaya-number1b-mobile");
            let n3 = document.getElementById("avaya-number1c-mobile");

            let i = 0;
            let counter = setInterval(() => {
              i++;
              if (i <= 82) {
                n1.innerHTML = i;
              }
              if (i <= 83) {
                n2.innerHTML = i;
              }
              if (i <= 83) {
                n3.innerHTML = i;
              }
              if (i == 100) {
                clearInterval(counter);
              }
            }, 10);

            triggered1m = true;
          }
        },
      });

      let triggered2 = false;
      ScrollTrigger.create({
        trigger: "#avaya-number2a",
        start: "top 70%",
        // markers: true,
        onToggle: (self) => {
          if (!triggered2) {
            let n1 = document.getElementById("avaya-number2a");
            let n2 = document.getElementById("avaya-number2b");
            let n3 = document.getElementById("avaya-number2c");
            let n4 = document.getElementById("avaya-number2d");
            let n5 = document.getElementById("avaya-number2e");

            let i = 0;
            let counter = setInterval(() => {
              i++;
              if (i <= 61) {
                n1.innerHTML = i;
              }
              if (i <= 64) {
                n2.innerHTML = i;
              }
              if (i <= 53) {
                n3.innerHTML = i;
              }
              if (i <= 48) {
                n4.innerHTML = i;
              }
              if (i <= 43) {
                n5.innerHTML = i;
              }
              if (i == 100) {
                clearInterval(counter);
              }
            }, 10);

            triggered2 = true;
          }
        },
      });

      let triggered2m = false;
      ScrollTrigger.create({
        trigger: "#avaya-number2a-mobile",
        start: "top 60%",
        // markers: true,
        onToggle: (self) => {
          if (!triggered2m) {
            let n1 = document.getElementById("avaya-number2a-mobile");
            let n2 = document.getElementById("avaya-number2b-mobile");
            let n3 = document.getElementById("avaya-number2c-mobile");
            let n4 = document.getElementById("avaya-number2d-mobile");
            let n5 = document.getElementById("avaya-number2e-mobile");

            let i = 0;
            let counter = setInterval(() => {
              i++;
              if (i <= 61) {
                n1.innerHTML = i;
              }
              if (i <= 64) {
                n2.innerHTML = i;
              }
              if (i <= 53) {
                n3.innerHTML = i;
              }
              if (i <= 48) {
                n4.innerHTML = i;
              }
              if (i <= 43) {
                n5.innerHTML = i;
              }
              if (i == 100) {
                clearInterval(counter);
              }
            }, 10);

            triggered2m = true;
          }
        },
      });

      let triggered3 = false;
      ScrollTrigger.create({
        trigger: "#avaya-number3a",
        start: "top 70%",
        // markers: true,
        onToggle: (self) => {
          if (!triggered3) {
            let n1 = document.getElementById("avaya-number3a");
            let n2 = document.getElementById("avaya-number3b");

            let i = 0;
            let counter = setInterval(() => {
              i++;
              if (i <= 71) {
                n1.innerHTML = i;
              }
              if (i <= 24) {
                n2.innerHTML = i;
              }
              if (i == 100) {
                clearInterval(counter);
              }
            }, 20);

            triggered3 = true;
          }
        },
      });

      let checkmarkdelay = 400;
      let checknumber = 0;
      let checkmarkInterval;
      ScrollTrigger.create({
        trigger: "#avaya-checkmarks-container",
        start: "top 70%",
        once: true,
        // markers: true,
        onToggle: (self) => {
          console.log("starting checkmarks");

          checkmarkInterval = setInterval(function () {
            if (checknumber < 5) {
              checknumber = checknumber + 1;
              let s = document.getElementById(
                "cxtllp-lottie-checkmark-" + checknumber
              );
              s.play();
            } else {
              clearInterval(checkmarkInterval);
            }
          }, checkmarkdelay);
        },
      });

      let step = 1;
      ScrollTrigger.create({
        trigger: "#avaya-section6-steps",
        start: "top 60%",
        // markers: true,
        onToggle: (self) => {
          if (step == 1) {
            let s = document.getElementById("avaya-section6-steps");
            s.src = "images/step2.png";
            step = 2;
          }
        },
      });

      ScrollTrigger.create({
        trigger: "#avaya-section6-steps",
        start: "top 45%",
        // markers: true,
        onToggle: (self) => {
          if (step == 2) {
            let s = document.getElementById("avaya-section6-steps");
            s.src = "images/step3.png";
            step = 3;
          }
        },
      });

      document
        .getElementById("avaya-section6-steps")
        .addEventListener("click", function (e) {
          console.log("click", step);
          if (step < 4) {
            step = step + 1;
            let s = document.getElementById("avaya-section6-steps");
            s.src = "images/step" + step + ".png";
          }
        });

      ScrollTrigger.create({
        trigger: "#avaya-section6-steps",
        start: "top 30%",
        // markers: true,
        onToggle: (self) => {
          if (step == 3) {
            let s = document.getElementById("avaya-section6-steps");
            s.src = "images/step4.png";
            step = 4;
          }
        },
      });

      let stepm = 1;
      ScrollTrigger.create({
        trigger: "#avaya-section6-steps-mobile",
        start: "top 20%",
        // markers: true,
        onToggle: (self) => {
          if (stepm == 1) {
            let s = document.getElementById("avaya-section6-steps-mobile");
            s.src = "images/step2m.png";
            stepm = 2;
          }
        },
      });

      ScrollTrigger.create({
        trigger: "#avaya-section6-steps-mobile",
        start: "top top",
        // markers: true,
        onToggle: (self) => {
          if (stepm == 2) {
            let s = document.getElementById("avaya-section6-steps-mobile");
            s.src = "images/step3m.png";
            stepm = 3;
          }
        },
      });

      document
        .getElementById("avaya-section6-steps-mobile")
        .addEventListener("click", function (e) {
          // console.log("click", stepm);
          if (stepm < 4) {
            stepm = stepm + 1;
            let s = document.getElementById("avaya-section6-steps-mobile");
            s.src = "images/step" + stepm + "m.png";
          }
        });

      ScrollTrigger.create({
        trigger: "#avaya-section6-button",
        start: "top bottom",
        // markers: true,
        onToggle: (self) => {
          if (stepm == 3) {
            let s = document.getElementById("avaya-section6-steps-mobile");
            s.src = "images/step4m.png";
            stepm = 4;
          }
        },
      });
    });
  };
});
