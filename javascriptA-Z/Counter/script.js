const btns = document.querySelectorAll(".btn");
const count = document.querySelector(".number");
let number = 0;
btns.forEach(function (p) {
  p.addEventListener("click", function (e) {
    const check = e.currentTarget.classList;
    if (check.contains("increase")) {
      number++;
    } else if (check.contains("decrease")) {
      number--;
    } else {
      number = 0;
    }
    count.innerHTML = number;
  });
});
