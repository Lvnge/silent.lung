const slides = document.querySelectorAll(".slides img");

let slideIndex = 0;

document.addEventListener("DOMContentLoaded", initSlider);

function initSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
  }
  document.getElementById("current-slide").innerHTML = slideIndex + 1;
  document.getElementById("slides-length").innerHTML = slides.length;
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
  document.getElementById("current-slide").innerHTML = slideIndex + 1;
}
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
  document.getElementById("current-slide").innerHTML = slideIndex + 1;
}
