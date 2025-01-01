const toggle = document.querySelector(".toggle");
const lists = document.querySelector(".nav-lists");
const icon = document.querySelector("#icon");
var btn = true;
toggle.addEventListener("click", function () {
  lists.classList.toggle("active");
  if (btn == true) {
    icon.classList.add("fa-times");
    icon.classList.remove("fa-bars");
    btn = false;
  } else {
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
    btn = true;
  }
});
