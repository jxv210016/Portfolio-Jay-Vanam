document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper for the carousel functionality
  var swiper = new Swiper(".swiper-container", {
    loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Code related to modal functionality is intentionally omitted to
  // disable clicking on images to enlarge them in a modal.

  // This ensures users can only swipe through images without additional interactions.
});
