document.addEventListener("DOMContentLoaded", function () {
  // Get the modal element
  var modal = document.getElementById("modal");

  // Get the modal image content
  var modalImg = document.getElementById("modal-image");

  // Get the close button
  var closeBtn = document.querySelector(".close");

  // Get the images that open the modal
  var images = document.querySelectorAll(".photo-container img");

  // Loop through all images and add click event listeners
  images.forEach(function (image) {
    image.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  // Close the modal when the user clicks on the close button
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close the modal when the user clicks outside of it
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Randomly reorder the photos
  var photos = document.querySelectorAll(".photo");

  function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  var shuffledPhotos = shuffle(Array.from(photos));
  shuffledPhotos.forEach(function (photo, index) {
    photo.style.order = index;
  });
});
