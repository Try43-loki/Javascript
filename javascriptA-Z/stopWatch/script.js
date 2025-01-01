var seconds = 0;
var tens = 0;
var appendSeconds = document.querySelector("#tens");
var appenTens = document.querySelector("#seconds");
const btnStart = document.querySelector("#start");
const btnStop = document.querySelector("#stop");
const btnReset = document.querySelector("#reset");
window.addEventListener("DOMContentLoaded", () => {
  // variable
  var Interval;

  btnStart.addEventListener("click", () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  });
  btnStop.addEventListener("click", () => {
    clearInterval(Interval);
  });
  btnReset.addEventListener("click", () => {
    tens = "00";
    seconds = "00";
    appenTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendSeconds.style.color = "#ffff";
    appenTens.style.color = "#ffff";
    clearInterval(Interval);
  });
  const startTimer = () => {
    tens++;
    if (tens <= 9) {
      appenTens.innerHTML = "0" + tens;
      appenTens.style.color = "yellow";
    }
    if (tens > 9) {
      appenTens.innerHTML = tens;
    }
    if (tens > 99) {
      console.log("seconds");
      appendSeconds.style.color = "#3498db";
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appenTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  };
});

const groupBtn = document.querySelector(".group-btn");
const allBtn = document.querySelectorAll(".btn");
groupBtn.addEventListener("click", (e) => {
  //find btn class for true result
  const btnClass = e.target.classList.contains("btn");
  console.log(btnClass);
  allBtn.forEach((btn) => {
    //loop all btn and find active class and then remove
    if (btnClass) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    }
  });
});
