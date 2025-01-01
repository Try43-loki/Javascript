function hello(name) {
  return ` Hello ${name} remember me?`;
}
function hi(para) {
  const mama = "Jonh";
  return `${para("Try")} How are you doing ? Nice to meet ${mama}`;
}
console.log(hi(hello));

const Student = [
  { id: 1, name: "Soytry", age: 18 },
  { id: 2, name: "Soytry", age: 18 },
  { id: 3, name: "Soytry", age: 18 },
  { id: 4, name: "Soytry", age: 18 },
  { id: 5, name: "Soytry", age: 18 },
  { id: 6, name: "Soytry", age: 18 },
  { id: 7, name: "Soytry", age: 18 },
  { id: 8, name: "Soytry", age: 18 },
  { id: 9, name: "Soytry", age: 18 },
];
Student.forEach(function (p) {
  console.log(p.id);
});
const Students = [
  { id: 1, name: "Soytry", age: 18 },
  { id: 2, name: "Soytry", age: 18 },
  { id: 3, name: "Soytry", age: 18 },
  { id: 4, name: "Soytry", age: 18 },
  { id: 5, name: "Soytry", age: 18 },
];
Students.forEach(function (ps) {
  console.log(ps.id);
});
Student.forEach((p) => {
  alert(p.id);
});
Student.forEach((p) => {
  // console.log(p.id);
});
const newArr = Student.map((p) => {
  return `<h3>${p.name}</h3>`;
});
console.log(newArr.join(""));
document.body.innerHTML = newArr.join("");
const text = Student.filter(function (p) {
  return p.id === 9;
});
// console.log(text);
const tell = Student.find(function (p) {
  return p.id === 7 && p.age === 18;
});
// console.log(tell.name);
const salary = [20, 30, 40, 50];
const total1 = salary.reduce(function (p, c) {
  return (p += c);
}, 0);
// console.log(total);

const employee = [
  { id: 1, name: "Soytry", salary: 2000 },
  { id: 2, name: "Jonh", salary: 400 },
  { id: 3, name: "khely", salary: 900 },
  { id: 4, name: "Kina", salary: 800 },
  { id: 5, name: "masha", salary: 500 },
];
const total = employee.reduce(function (p, c) {
  let allSalary = c.salary;
  let totalSalary = p + allSalary;
  return totalSalary;
}, 0);
// console.log(total);
