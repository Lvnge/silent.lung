//Galeria navigation bar

let defaultState = document.getElementById("first-slide");
let loaded = 0;
let rightClickCounter = 0;
let leftClickCounter = 0;
let slide1 = document.getElementById("first-slide");
let slide2 = document.getElementById("second-slide");
let slide3 = document.getElementById("third-slide");
let slide4 = document.getElementById("fourth-slide");
let slide5 = document.getElementById("fifth-slide");
let rightSliderButton = document.getElementById("right-arrow");
let leftSliderButton = document.getElementById("left-arrow");
const sliderImages = [
  slide1.href,
  slide2.href,
  slide3.href,
  slide4.href,
  slide5.href,
];

window.onload = function () {
  loaded = 1;
  defaultState.style.opacity = 1;
  defaultState.style.transition = "opacity 1000ms ease";
  loaded = 0;
};

slide1.addEventListener("click", turnSlide1On);

function turnSlide1On() {
  rightClickCounter = 1;
  leftClickCounter = 0;
  slide1.style.opacity = 1;
  slide2.style.opacity = 0.5;
  slide3.style.opacity = 0.5;
  slide4.style.opacity = 0.5;
  slide5.style.opacity = 0.5;
}

slide2.addEventListener("click", turnSlide2On);

function turnSlide2On() {
  rightClickCounter = 2;
  leftClickCounter = 1;
  slide1.style.opacity = 0.5;
  slide2.style.opacity = 1;
  slide3.style.opacity = 0.5;
  slide4.style.opacity = 0.5;
  slide5.style.opacity = 0.5;
}

slide3.addEventListener("click", turnSlide3On);

function turnSlide3On() {
  rightClickCounter = 3;
  leftClickCounter = 2;
  slide1.style.opacity = 0.5;
  slide2.style.opacity = 0.5;
  slide3.style.opacity = 1;
  slide4.style.opacity = 0.5;
  slide5.style.opacity = 0.5;
}

slide4.addEventListener("click", turnSlide4On);

function turnSlide4On() {
  rightClickCounter = 4;
  leftClickCounter = 3;
  slide1.style.opacity = 0.5;
  slide2.style.opacity = 0.5;
  slide3.style.opacity = 0.5;
  slide4.style.opacity = 1;
  slide5.style.opacity = 0.5;
}

slide5.addEventListener("click", turnSlide5On);

function turnSlide5On() {
  rightClickCounter = 5;
  leftClickCounter = 4;
  slide1.style.opacity = 0.5;
  slide2.style.opacity = 0.5;
  slide3.style.opacity = 0.5;
  slide4.style.opacity = 0.5;
  slide5.style.opacity = 1;
}

rightSliderButton.addEventListener("click", function () {
  if (rightClickCounter == 0) {
    rightClickCounter = 1;
    leftClickCounter = 0;
    rightSliderButton.href = sliderImages[rightClickCounter];
    rightClickCounter++;
    leftClickCounter++;
    console.log(rightClickCounter);
    console.log(leftClickCounter);
    console.log("if == 0");
  } else if (rightClickCounter > 0 && rightClickCounter <= 4) {
    rightSliderButton.href = sliderImages[rightClickCounter];
    rightClickCounter++;
    leftClickCounter++;
    console.log(rightClickCounter);
    console.log(leftClickCounter);
    console.log("if > 0 and <=4");
  } else {
    rightClickCounter = 0;
    leftClickCounter = 0;
    rightSliderButton.href = sliderImages[rightClickCounter];
    rightClickCounter++;
    console.log(rightClickCounter);
    console.log(leftClickCounter);
    console.log("else");
  }

  if (rightClickCounter - 1 == 0) {
    turnSlide1On();
  } else if (rightClickCounter - 1 == 1) {
    turnSlide2On();
  } else if (rightClickCounter - 1 == 2) {
    turnSlide3On();
  } else if (rightClickCounter - 1 == 3) {
    turnSlide4On();
  } else if (rightClickCounter - 1 == 4) {
    turnSlide5On();
  }
});

leftSliderButton.addEventListener("click", function () {
  if (leftClickCounter == 0) {
    leftClickCounter = 4;
    leftSliderButton.href = sliderImages[leftClickCounter];
    rightClickCounter = 5;
    console.log(rightClickCounter);
    console.log(leftClickCounter);
    console.log("else");
  } else if (leftClickCounter > 0 && leftClickCounter <= 4) {
    leftClickCounter--;
    leftSliderButton.href = sliderImages[leftClickCounter];
    rightClickCounter--;
    console.log(rightClickCounter);
    console.log(leftClickCounter);
    console.log("else");
  } else {
    rightClickCounter = 0;
    leftClickCounter = 0;
    rightSliderButton.href = sliderImages[rightClickCounter];
    console.log(rightClickCounter);
    console.log(leftClickCounter);
    console.log("else");
  }

  if (leftClickCounter == 0) {
    turnSlide1On();
  } else if (leftClickCounter == 1) {
    turnSlide2On();
  } else if (leftClickCounter == 2) {
    turnSlide3On();
  } else if (leftClickCounter == 3) {
    turnSlide4On();
  } else if (leftClickCounter == 4) {
    turnSlide5On();
  }
});
