//create nomal function
function year() {
  return 10 + 10;
}

// invoke
year();

//function in es6 call arrow function

const price = () => 10 + 10;
// invoke
price();
//create para function
function sell(cb, cy) {
  return cb + cy;
}
//invoke
sell(10, 20);
/*or*/ sell(everything, everything);

//create object

const obj = {
  name: "Mey Soytry",
  age: 18,
  position: "Student",
  year: function (dd, yy) {
    return dd - yy;
  },
  arr: ["Tiger", "Cat", "Dog", "Lion", "Pig"],
};

// obj in array

const array1 = [
  { id: 1, name: "Mey SoyTry", age: 18, position: "Student" },
  { id: 2, name: "Hak Sokment", age: 17, position: "Worker" },
];

// inuse

array1[0].age;

// array1[anyObjectIndex].anyElementInObject
if (true) {
  console.log("hello");
} else {
  console.log("hey");
}

let num = 10;
let num2 = 20;
if (num === num2) {
  console.log("hello");
}

// switch
let day = 1;
switch (day) {
  case 1:
    {
      console.log("mon");
    }
    break;
  default: {
    console.log("none");
  }
}
let run = 10;
while (run > 0) {
  console.log("hello ah jork");
  run--;
}

let number = [1, 2, 3, 4, 5, 6];
let number2 = [9, 7, 6, 5, 4, 3];

function plus(para) {
  let sum = 0;
  for (let i = 0; i < para.lenght; i++) {
    sum += para[i];
  }
  return sum;
}

plus(number);

// ternary operator

a ? console.log("It is true") : console.log("It is false");
