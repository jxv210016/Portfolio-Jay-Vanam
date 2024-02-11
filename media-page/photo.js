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
