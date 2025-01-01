const obj = [
  {
    name: "Mey Soytry",
    imgSource: "img/person1.png",
    position: "Web Developer",
    thouth:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita voluptas beatae repellendus commodi officia nam facilis inventore totam dolor.",
  },
  {
    name: "Iron Man",
    imgSource: "img/person2.png",
    position: "Web Design",
    thouth:
      "Hello sit amet consectetur adipisicing elit. Quam expedita voluptas beatae repellendus commodi officia nam facilis inventore totam dolor.",
  },
  {
    name: "Capitan America",
    imgSource: "img/person3.png",
    position: "Web Frontend",
    thouth:
      "Welcome sit amet consectetur adipisicing elit. Quam expedita voluptas beatae repellendus commodi officia nam facilis inventore totam dolor.",
  },
  {
    name: "Tony Stark",
    imgSource: "img/person4.png",
    position: "Web Backend",
    thouth:
      "Greeting amet consectetur adipisicing elit. Quam expedita voluptas beatae repellendus commodi officia nam facilis inventore totam dolor.",
  },
];
const img = document.querySelector(".img > img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const name = document.querySelector(".name-job > h3");
const though = document.querySelector(".though");
const position = document.querySelector(".name-job .position");

let i = 0;
function show(p) {
  var index = obj[p];
  img.src = index.imgSource;
  name.textContent = index.name;
  though.textContent = index.thouth;
  position.textContent = index.position;
}
prevBtn.addEventListener("click", function () {
  if (i == 0) {
    i = obj.length - 1;
  } else {
    i--;
  }
  show(i);
  console.log(i);
});
nextBtn.addEventListener("click", function () {
  if (i == obj.length - 1) {
    i = 0;
  } else {
    i++;
  }
  show(i);
  console.log(i);
});
document.addEventListener("DOMContentLoaded", function () {
  const random = Math.floor(Math.random() * obj.length);
  show(random);
});
