const hours = document.querySelector("#hours");
const minuts = document.querySelector("#minuts");
const second = document.querySelector("#seconds");
const real = document.querySelector("#real");
window.addEventListener("DOMContentLoaded", () => {
  showTime();
});
function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";
  if (h == 12) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  const time = h + ":" + m + ":" + s + ":" + session;
  real.innerHTML = time;
  setTimeout(showTime, 1000);
}

// function showTime(){
//     var date = new Date();
//     var h = date.getHours(); // 0 - 23
//     var m = date.getMinutes(); // 0 - 59
//     var s = date.getSeconds(); // 0 - 59
//     var session = "AM";

//     if(h == 0){
//         h = 12;
//     }

//     if(h > 12){
//         h = h - 12;
//         session = "PM";
//     }

//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;

//     var time = h + ":" + m + ":" + s + " " + session;
//     document.getElementById("MyClockDisplay").innerText = time;
//     document.getElementById("MyClockDisplay").textContent = time;

//     setTimeout(showTime, 1000);

// }

// showTime();
