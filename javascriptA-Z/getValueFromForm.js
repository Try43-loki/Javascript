const form = document.getElementById("form");
const firstname = document.getElementById("f");
const lastname = document.getElementById("l");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let first = firstname.value;
  let last = lastname.value;
  prompt("Is your name ? " + first + " " + last);
  console.log(prompt.value);
});
