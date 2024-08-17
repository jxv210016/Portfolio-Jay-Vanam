function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  // Move the bubble cursor
  customCursor.style.left = `${e.clientX - customCursor.offsetWidth / 2}px`;
  customCursor.style.top = `${e.clientY - customCursor.offsetHeight / 2}px`;

  // Adjust the magnified content inside the bubble
  const cursorRect = customCursor.getBoundingClientRect();
  const offsetX = e.clientX - cursorRect.left;
  const offsetY = e.clientY - cursorRect.top;

  customCursor.style.backgroundPosition = `-${offsetX * 3}px -${offsetY * 3}px`;
});

document.addEventListener("mouseleave", () => {
  customCursor.style.opacity = "0";
});

document.addEventListener("mouseenter", () => {
  customCursor.style.opacity = "1";
});

document.addEventListener("mousemove", (e) => {
  // Move the bubble cursor
  customCursor.style.left = `${e.clientX - customCursor.offsetWidth / 2}px`;
  customCursor.style.top = `${e.clientY - customCursor.offsetHeight / 2}px`;

  // Update the background image to reflect the element under the cursor
  customCursor.style.backgroundImage = `url(${
    getComputedStyle(document.elementFromPoint(e.clientX, e.clientY))
      .backgroundImage
  })`;
  customCursor.style.backgroundPosition = `-${e.clientX * 3}px -${
    e.clientY * 3
  }px`;
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#000000", // Set particles color to black
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#000000", // Set line color to black
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing");

  // Set a timeout to add the finished-typing class after the typing animation is complete
  setTimeout(() => {
    typingElement.classList.add("finished-typing");
  }, 2000); // 2000ms is the duration of the typing animation
});
