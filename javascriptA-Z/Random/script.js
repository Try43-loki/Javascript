var random = [];
function hello() {
  for (let i = 0; i < 10; i++) {
    random.push(`${Math.floor(Math.random() * 10)}`);
  }
  console.log(random);
}
hello();
function hi() {
  var num = random[Math.floor(Math.random() * 10)];
  console.log(num);
}
hi();
