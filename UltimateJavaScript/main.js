// const greeting = (cbf, country, sub, b) => {
//   return `Greeting ${cbf()}, how are you today. Are you in ${country()} ?.How old are ${sub(
//     b
//   )}?`;
// };
// const name = () => {
//   return `Mey Soytry`;
// };
// const city = () => {
//   return `Cambodia`;
// };
// const subject = (s) => {
//   return s;
// };
// const result = greeting(name, city, subject, "You");
// console.log(result);
// const multiply = (x, y, n1, n2) => x(n1) + y(n2);
// const num1 = () => 10;
// const num2 = () => 20;
// const result = multiply(num1, num2);
// console.log(result);
// const name = (fn, n) => {
//   return `how are ${fn(n)}`;
// };
// const firstname = (f) => {
//   return f;
// };
// const allname = name(firstname, "you");
// console.log(allname);
// const arr = [10, 20, 30];
// const obj = {
//   model: "BMW",
//   price: "1000$",
//   feature: ["fast", "slow", "standard"],
//   drive(x, y) {
//     return `This is my car ${x()}. We go to ${y()}, we drive `;
//   },
//   brend() {
//     return `Mitubusi`;
//   },
//   country() {
//     return `Cambodia`;
//   },
// };
// console.log(obj.drive(obj.brend, obj.country));
// const obj = { name: "Soytry", age: 18 };
// console.log(obj["name"]);
// console.log(obj.name);
// obj.price = 100;
// console.log(obj);
// const arr = [10, 20, 30];
// arr[3] = 40;
// console.log(arr);
// const data = [
//   {
//     id: 1,
//     name: "dara",
//   },
//   { id: 2, name: "Soytry" },
// ];
// for (let i = 0; i < 2; i++) {
//   if (data[i].name == "Soytry") {
//     console.log("yes I am.");
//   } else {
//     console.log("No I am not.");
//

// const old = (age) => (age >= 18 ? "Adult" : "Still young");
// const num = () => console.log(old(19));
// for (let i = 0; i <= 20; i++) {
//   console.log(old(i));
// }

// for (let i = 0; i <= 5; i++) {
//   switch (i) {
//     case 1: {
//       console.log("one");
//       break;
//     }
//     case 2: {
//       console.log("two");
//       break;
//     }
//     case 3: {
//       console.log("three");
//       break;
//     }
//     case 4: {
//       console.log("four");
//       break;
//     }
//     default: {
//       console.log("emty");
//     }
//   }
// }

// for (let i = 0; i <= arr.length - 1; i++) {
//   switch (i) {
//     case 0: {
//       console.log(`${arr[i].brand} Product : ${arr[i].year}`);
//       break;
//     }
//     case 1: {
//       console.log(`${arr[i].brand} Product : ${arr[i].year}`);
//       break;
//     }
//     case 2: {
//       console.log(`${arr[i].brand} Product : ${arr[i].year}`);
//       break;
//     }
//     case 3: {
//       console.log(`${arr[i].brand} Product : ${arr[i].year}`);
//       break;
//     }
//     default: {
//       console.log("None");
//     }
//   }
// }
// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i].brand);
//   i++;
// }
// let i = 0;
// do {
//   console.log(`Name : ${arr[i].brand} ProductYear : ${arr[i].year}`);
//   i++;
// } while (i < arr.length);
// const names = ["try", "dara", "daro", "pisey"];

// console.log(names);
// const each = (item) => {
//   console.log(item.brand);
// };
// arr.forEach(each);
// const myForEach = (cbf, arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     cbf(arr[i], i, arr);
//   }
// };

// myForEach(function (e, index, arr) {
//   console.log(e, index, arr);
// }, arr);
// Array.prototype.myForEach = function (cbf) {
//   for (let i = 0; i < this.length; i++) {
//     cbf(this[i]);
//   }
// };
// arr.myForEach(function (e) {
//   console.log(e);
// });
// const newArr = arr.map(function (item) {
//   return `<h3>${item.brand} </h3> <p>${item.year}</p>`;
// });
// const element = newArr.join("");

// document.body.innerHTML = element;
// const filterArray = arr.filter((item) => item.year == 2004);
// const mapArray = filterArray.map(function (item) {
//   return `<h3> ${item.brand} </h3>`;
// });
// document.body.innerHTML = mapArray.join("");
// const num = [1, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7];
// const total = num.reduce((ac, cr) => {
//   return ac + cr;
// }, 1);
// console.log(total);
// const names = ["Mey", " Soytry"];
// const fullname = names.reduce((fn, ln) => {
//   return fn + ln;
// });
// console.log(fullname);
