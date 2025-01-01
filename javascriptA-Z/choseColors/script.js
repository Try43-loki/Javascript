var block = document.querySelectorAll(".block");
var title = document.querySelector(".title");
var color = document.querySelector(".color");
const answer = document.querySelector("#answer");
const newColors = document.querySelector("#newColors");
const showWin = document.querySelector("#showWin");
const showLose = document.querySelector("#showLose");
const shwoRate = document.querySelector("#showRate");
let colors = [];
function randomColor() {
  for (let i = 0; i < block.length; i++) {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    colors.push(rgb);
  }
}
randomColor();
function assignColor() {
  for (let i = 0; i < block.length; i++) {
    block[i].style.backgroundColor = colors[i];
  }
}
assignColor();
function randomColorInArr() {
  var ColorArr = colors[Math.floor(Math.random() * block.length)];
  color.innerHTML = ColorArr;
  return ColorArr;
}
var pickerColor = randomColorInArr();
function chckColor() {
  block.forEach((e) => {
    e.addEventListener("click", () => {
      if (pickerColor == e.style.backgroundColor) {
        answer.innerHTML = "Correct";
        newColors.innerHTML = "Play Againt";
        title.style.backgroundColor = pickerColor;
        block.forEach((p) => {
          p.style.opacity = "1";
          p.style.backgroundColor = pickerColor;
        });
      } else {
        answer.innerHTML = "Incorrect";
        newColors.innerHTML = "New Colors";
        e.style.opacity = "0";
      }
    });
  });
}
chckColor();
newColors.addEventListener("click", () => {
  colors = [];
  randomColor();
  assignColor();
  pickerColor = randomColorInArr();
  chckColor();
  answer.innerHTML = "";
  title.style.backgroundColor = "dodgerblue";
  wrong = 0;
  win = 0;
  rate = 0;
  showLose.innerHTML = 0;
  showWin.innerHTML = 0;
  shwoRate.innerHTML = 0;
});
var wrong = 0;
var win = 0;
var rate = 0;
block.forEach((btn) => {
  btn.addEventListener("click", (t) => {
    if (answer.innerHTML == "Correct") {
      win++;
      showWin.innerHTML = win;
    } else {
      wrong++;
      showLose.innerHTML = wrong;
    }
    rate = Math.floor(100 - (wrong / 6) * 100);
    shwoRate.innerHTML = rate + "%";
  });
});
