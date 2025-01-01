const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "f"];
const btn = document.getElementById("btn");

const randomeCode = () => Math.floor(Math.random() * hexCode.length);
function changeColors() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexCode[randomeCode()];
  }
  document.getElementById("span").innerHTML = hexColor;
  document.body.style.background = hexColor;
}
btn.addEventListener("click", changeColors);
