const btnAdd = document.querySelector("#btnAdd");
const picFile = document.querySelector("#picFile");
const addFile = document.querySelector("#objfile");
btnAdd.addEventListener("click", () => {
  Swal.fire({
    title: "Good job!",
    text: "Employee has added",
    icon: "success",
  });
});

addFile.addEventListener("change", (e) => {
  var file = e.target.files[0];
  picFile.src = URL.createObjectURL(file);
});

const formModal = document.querySelector("#formModal");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const id = document.querySelector("#id");
const sex = document.querySelector("#sex");
const position = document.querySelector("#position");

console.log(firstname, lastname, id, sex, position);

formModal.addEventListener("submit", (e) => {
  e.preventDefault();
});
