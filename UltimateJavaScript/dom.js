const arr = [
  { brand: "Toyota", year: 2001 },
  { brand: "BMW", year: 2006 },
  { brand: "Rang", year: 2004 },
  { brand: "BYD", year: 2004 },
];
// const newArr = arr
//   .map((item) => {
//     return `<h3>${item.brand}</h3>`;
//   })
//   .join("");
// const filterArr = arr.filter((items) => {
//   return items.year == 2004;
// });
// const ifItems = filterArr
//   .map((e) => {
//     return `<h3>${e.year}</h3>`;
//   })
//   .join("");
// document.body.innerHTML = ifItems;
const header = document.querySelector(".header");
const btn = document.querySelector("body > button");
// header.style.display = "block";
// btn.addEventListener("click", () => {
//   if (header.style.display == "block") {
//     header.style.display = "none";
//   } else {
//     header.style.display = "block";
//   }
// });

const names = [
  "Soytry",
  "Dara",
  "Daro",
  "Roth",
  "Rith",
  "Heng",
  "Hour",
  "Hong",
  "Pisey",
  "Vannda",
  "G-devith",
  "Ronaldo",
  "Messi",
  "Neymar",
];
// const div = document.createElement("div");
// const h1 = document.createElement("h1");
// const span = document.createElement("span");
// const butt = document.createElement("button");
// header.append(div, h1);
// header.insertBefore(span, h1);
// header.replaceChild(butt, span);
// butt.remove();
// header.removeChild(h1);
// const sortName = names.sort();
btn.addEventListener("click", () => {
  // sortName.forEach((itmes) => {
  //   const p = document.createElement("p");
  //   p.innerHTML = itmes;
  //   header.append(p);
  // });
});

// btn.style.cssText = "color: red; background-color: blue;";

// const p = document.createElement("p");
// p.setAttribute("class", "blue-text");
// document.body.style.height = "100vh";

// document.body.addEventListener("click", () => {
//   // header.innerHTML = "Phnom Penh";
//   btn.classList.toggle("red-text");
//   header.classList.toggle("hide");
//   // console.log(header.textContent);
//   // btn.setAttribute("class", "blue-text");
// });

// const heading = header.getAttribute("class");
// console.log(heading);
window.addEventListener("resize", () => {
  console.log("resize");
});
