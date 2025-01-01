const colors = [
  "#f9ca24",
  "#f0932b",
  "#eb4d4b",
  "#6ab04c",
  "#6ab04c",
  "#c7ecee",
  "#be2edd",
  "#4834d4",
  "#95afc0",
  "#30336b",
  "#e1b12c",
  "#0097e6",
  "#FDA7DF",
];
const btn = document.querySelector(".btn");
const ramdom = () => Math.floor(Math.random() * colors.length);
btn.addEventListener("click", function () {
  const randomIndex = ramdom();
  document.body.style.background = colors[randomIndex];
});
