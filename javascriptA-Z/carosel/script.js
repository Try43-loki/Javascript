const flags = [
  { name: "ASEAN", source: "./img/ASEAN.jpg" },
  { name: "CAMBODIA", source: "./img/Cambodia.png" },
  { name: "MALAYSIA", source: "./img/Malasia.png" },
  { name: "INDONESIA", source: "./img/indonesia.jpg" },
  { name: "SINGAPOR", source: "./img/sigapor.jpg" },
  { name: "PHILIPPINE", source: "./img/philipin.jpg" },
  { name: "BRUNEI", source: "./img/Brunei.jpg" },
  { name: "TIMOR LESTE", source: "./img/Timor.png" },
  { name: "THAILAND", source: "./img/Thailand.jpg" },
  { name: "VIETNAM", source: "./img/Vitnames.png" },
  { name: "LAOS", source: "./img/Laos.png" },
];
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const imgSource = document.querySelector(".img > img");
const title = document.querySelector(".title");
var i = 0;
function show() {
  var index = flags[i];
  imgSource.src = index.source;
  title.textContent = index.name;
}
nextBtn.addEventListener("click", function () {
  if (i == flags.length - 1) {
    i = 0;
  } else {
    i++;
  }
  show();
});
prevBtn.addEventListener("click", function () {
  if (i == 0) {
    i = flags.length - 1;
  } else {
    i--;
  }
  show();
});
