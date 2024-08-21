document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("modal");
  var body = document.body;
  var images = document.querySelectorAll(
    ".vertical-photo-container img, .horizontal-photo-container img"
  );
  var modalImg = document.getElementById("modal-image");
  var closeBtn = document.querySelector(".close");

  function addModalOpenClass() {
    body.classList.add("modal-open");
    body.style.overflow = "hidden"; // Disable scrolling
  }

  function removeModalOpenClass() {
    body.classList.remove("modal-open");
    body.style.overflow = ""; // Enable scrolling
  }

  images.forEach(function (image) {
    image.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
      addModalOpenClass();
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
    removeModalOpenClass();
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      removeModalOpenClass();
    }
  };

  // Ensure modal is hidden initially
  modal.style.display = "none";
});

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
