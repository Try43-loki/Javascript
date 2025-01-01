const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const dots = document.querySelectorAll(".dot");
const imgs = document.querySelectorAll(".img > img");
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
  dotting();
}
prevBtn.addEventListener("click", prevFunc);
function prevFunc() {
  imgs[counter].style.animation = "prevOut 0.5s forwards";
  if (counter == 0) {
    counter = imgs.length - 1;
  } else {
    counter--;
  }
  imgs[counter].style.animation = "prevIn 0.5s forwards";
  dotting();
}
function dotting() {
  for (let i = 0; i < imgs.length; i++) {
    dots[i].className = dots[i].className.replace("active-dot", "");
  }
  dots[counter].className += " active-dot";
}
dotting();
function slideAuto() {
  runInterval = setInterval(function () {
    nextFunc();
  }, 1000);
}
slideAuto();
const carousel = document.getElementsByClassName("carousel")[0];
carousel.addEventListener("mouseover", function () {
  clearInterval(runInterval);
});
carousel.addEventListener("mouseleave", slideAuto);
const nextBtnCourse = document.querySelector("#next-btn-course");
const prevBtnCourse = document.querySelector("#prev-btn-course");
const course = document.querySelectorAll(".course");
let index = 0;
nextBtnCourse.addEventListener("click", nextCourse);
function nextCourse() {
  course[index].style.animation = "nextOutCourse 0.5s forwards";
  if (index >= course.length - 1) {
    index = 0;
  } else {
    index++;
  }
  course[index].style.animation = "nextInCourse 0.5s forwards";
}
prevBtnCourse.addEventListener("click", prevCourse);
function prevCourse() {
  course[index].style.animation = "prevOutCourse 0.5s forwards";
  if (index == 0) {
    index = course.length - 1;
  } else {
    index--;
  }
  course[index].style.animation = "prevInCourse 0.5s forwards";
}
