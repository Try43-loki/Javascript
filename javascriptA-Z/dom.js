const list1 = document.getElementsByClassName("item")[0];

const list2 = document.querySelector("ul :last-child");
const list3 = document.querySelector("ul :nth-child(2)");
console.log(list);
const list4 = document.querySelectorAll("ul>li");
const arr = [
  "Mey Soytry",
  "Dy Henghour",
  "Khud dalin",
  "Kheang lita",
  "Hout Nali",
  "long daro",
  "Heng menghuy",
  "Hell okey",
];

arr.sort((a, b) => {
  return a - b;
});
arr.reverse();
console.log(arr);
