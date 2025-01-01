const imgs = document.querySelectorAll(".img-wrapper > img");
const nextBtn = document.querySelector(".next-btn");
const preBtn = document.querySelector(".prev-btn");
const dots = document.querySelectorAll(".dot");
let counter = 0;
nextBtn.addEventListener("click", nextFunc);
function nextFunc() {
  imgs[counter].style.animation = "nextOut 0.5s forwards";
  if (counter >= imgs.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  imgs[counter].style.animation = "nextIn 0.5s forwards";
  pointDots();
}
preBtn.addEventListener("click", prevFunc);
function prevFunc() {
  imgs[counter].style.animation = "prevOut 0.5s forwards";
  if (counter == 0) {
    counter = imgs.length - 1;
  } else {
    counter--;
  }
  imgs[counter].style.animation = "prevIn 0.5s forwards";
  pointDots();
}

function auto() {
  deleteInterval = setInterval(function () {
    nextFunc();
  }, 1000);
}
auto();
const slideContainer = document.querySelector(".slide-container");
slideContainer.addEventListener("mouseover", function () {
  clearInterval(deleteInterval);
});
slideContainer.addEventListener("mouseleave", function () {
  auto();
});
function pointDots() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active-btn", "");
  }
  dots[counter].className += " active-btn";
}
