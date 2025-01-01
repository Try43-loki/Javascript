const sum = (para) => {
  return para * 10;
};
//Arrow function
const sum1 = (para) => para * 100;
const func = () => "Bong Try";
const boo = () => 10 < 5;
const obj = () => ({ name: "SoyTry", age: 18, gander: "M" });
const arr = () => [10, 20, 30, 40, 100];
const array = [10, 20, 30, 40, 100, 300];
// array.forEach((n) => console.log(n));

// This Keyword
const objss = {
  name: "SoyTry",
  age: 18,
  salary: 1000,
  hello: function () {
    console.log(this);
    console.log(` Welcome to ${this.name}`);
  },
};

const object = {
  firstname: "Mey",
  lastname: "Soytry",
  hi: function () {
    // setTimeout(() => {
    // }, 1000);
    setInterval(() => {
      console.log(`Welcome to ${this.firstname} ${this.lastname}`);
    }, 1000);
  },
};
//Array destructuring
const array1 = ["Try", "Meng", "Dalin", "Hend"];
const [id1, , id3, id4] = array1;
// console.log(`Welcom to ${id1}`, id2);
// array1.forEach((b) => console.log(`Welcome to ${b}`));
//Object destructuring
const objs = {
  firstName: "Try",
  lastName: "Meng",
  address: "Kandal",
  sibling: { uiversity: "University of Cambodia" },
};
const {
  firstName,
  lastName,
  address,
  sibling: { uiversity },
} = objs;
// console.log(firstName, lastName, address, uiversity);

// Object destructuring As parameter

const obj1 = {
  firstName1: "Try",
  lastName1: "Meng",
  address1: "Kandal",
};

const as = (person) => {
  const { firstName1, lastName1, address1 } = person;
  console.log(firstName1, lastName1, address1);
};
// as(obj1);
const as1 = ({ firstName1, lastName1, address1 }) => {
  //   const { firstName1, lastName1, address1 } = person;
  console.log(firstName1, lastName1, address1);
};
// as1(obj1);

// for of loop

const car = ["Bmw", "Toyota", "Ford", "BYD", "Farari"];
for (let c of car) {
  //   console.log(c);
}
const obj2 = {
  fruits: ["Apple", "banana", "cherry"],
  vegetables: ["Tomato", "Potato", "onion"],
};
for (let type in obj2) {
  //   console.log(type + " : " + obj2[type]);
  //   console.log(`${type} : ${obj2[type]}`);
}

// spreed operator

const fruits = ["Apple", "banana", "cherry"];

const vegetables = ["Tomato", "Potato", "onion"];
const allgreen = [...fruits, ...vegetables];
// console.log(allgreen);
const addgreen = ["Watermelon", ...fruits, "Orange"];
// console.log(addgreen);
for (let all of addgreen) {
  //   console.log(all);
}
// console.log(fruits);

// spreed operator - object

const intro = {
  name: "try",
  age: 18,
  province: "Kandal",
};
const me = { ...intro, name: "SoyTry" };
// console.log(me);

//rest operator with array

const colors = ["red", "green", "blue", "yelow"];
const [one, ...mixColors] = colors;
// console.log(one);
// console.log(mixColors);

//rest operator with object

const model = { mode: "Toyota", year: 2024, made: "japeness" };
const { mode, ...rest } = model;
// console.log(mode, rest);

const infor = {
  name: "Soytry",
  id: 101,
  age: 18,
};
const KeyObj = Object.keys(infor);
// console.log(KeyObj);
const valueObj = Object.values(infor);
// console.log(valueObj);
const entriesObj = Object.entries(infor);
// console.log(entriesObj);
// name          : "try"
// obj.keys()    |  obj.values()
//            obj.entries()

// includes method with array

const animal = ["cat", "dog", "tiger", "lion"];
// console.log(animal.includes("cat", 0));
