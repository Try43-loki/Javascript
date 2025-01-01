const name = "SoyTry";

// console.log(name.charAt(0));
let fistname = "S";
if (fistname == "S") {
  //   console.log(true);
}
const find =
  " Hello my name is soytry and i was 18 years old in country from cambodia";
if (find.includes(18) == true) {
  //   console.log("true");
}
const names = "meysoytry";
// console.log(names.toUpperCase());
// console.log(names.toLowerCase());
// console.log(names.indexOf("y"));
// // // array properties
const arr = [1, 2, 43, 5, 8, 0, 56, 44, 2, 5, 5, 66, 6];
const newArr = [88, 33, 22, 11, 55];
const totalArr = arr.concat(arr, newArr);
// console.log(totalArr);
totalArr.shift();
// console.log(totalArr);
// console.log(arr.shift());
const fruits = ["banana", "apple", "orange"];
fruits.shift();
// console.log(fruits);
let i;
while (i < totalArr.length) {
  //   console.log(totalArr[i]);
  i++;
}
do {
  //   console.log(totalArr[i]);
  i++;
} while (i < totalArr.length);
totalArr.unshift(110);
// console.log(totalArr);
totalArr.push(99);
// console.log(totalArr);

totalArr.pop();

// console.log(totalArr);
totalArr.splice(0, 30);
// console.log(totalArr);
function math(b) {
  return b;
}
function total(a) {
  return `${a(10)}`;
}
// console.log(total(math));
arr.forEach(function (p) {
  //   console.log(p);
});
// alert(arr.includes(5));

const ann = arr.map(function (p) {
  return p;
});
// console.log(ann);
const blue = [
  {
    id: 1,
    name: " try",
    age: 14,
  },
  { id: 2, name: "soy", age: 15 },
];
const anne = blue.map(function (d) {
  return d.name;
});
anne.push("heelo");
// console.log(anne);
const wel = document.querySelector("ul");
// console.log(wel);
const wll = document.querySelectorAll("li");
// console.log(wll);
const well = document.querySelector("ul").children;
// console.log(well);
const classs = document.querySelector(".ip");
// console.log(classs.nextElementSibling);
const ull = document.querySelector(".bro");
// console.log(ull.nextElementSibling);
list.remove();
const ulll = document.querySelector(".bro");
const list = document.querySelector(".ip");
ulll.removeChild(list);
const name1 = document.createElement("h1");
const text = document.createTextNode("Hello");
name.appendChild(text);
document.body.appendChild(name);
const haha = document.createElement("h1");
const aa = "hello";
document.body.append(aa);
const textt = "<h1>hellobor</h1>";
document.body.innerHTML = textt;
const heading = document.querySelector(".try");
const btn = document.querySelector(".btn");
function change() {
  //   heading.classList.toggle("cheng");
  const check = heading.classList.contains("try");
  if (check) {
    heading.classList.add("cheng");
    heading.classList.remove("try");
  } else {
    heading.classList.add("try");
    heading.classList.remove("cheng");
  }
}

btn.addEventListener("click", change);
const text1 = document.getElementById("input");
const show = document.getElementById("this");
text.addEventListener("keyup", function () {
  show.innerHTML = text.value;
  if (text.value == "SoyTry") {
    document.getElementById("thiss").innerHTML = " Winner";
  }
});
