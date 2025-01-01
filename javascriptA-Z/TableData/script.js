const fullName = document.querySelector("#fullName");
const id = document.querySelector("#id");
const position = document.querySelector("#position");
const submit = document.querySelector("#submit");
const edit = document.querySelectorAll(".edit");
const dele = document.querySelectorAll(".delete");
const employeeList = document.querySelector(".employee-list");
var selectedRow = null;

//input data
submit.addEventListener("click", (e) => {
  let list = document.createElement("tr");
  e.preventDefault();
  employeeList.appendChild(list);
  if (fullName.value == "" || id.value == "" || position.value == "") {
    fullName.style.border = "2px solid red";
    id.style.border = "2px solid red";
    position.style.border = "2px solid red";
  } else {
    if (selectedRow == null) {
      fullName.style.borderColor = "dodgerblue";
      id.style.borderColor = "dodgerblue";
      position.style.borderColor = "dodgerblue";
      list.innerHTML = `<td>${fullName.value}</td>
        <td>${id.value}</td>
        <td>${position.value}</td>
        <td>
        <a href="#" class="edit">Edit</a>
        <a href="#" class="delete">Delete</a>
        </td>`;
    } else {
      selectedRow.children[0].textContent = fullName.value;
      selectedRow.children[1].textContent = id.value;
      selectedRow.children[2].textContent = position.value;
      selectedRow = null;
    }
  }
  clear();
});

// clear field data
const clear = () => {
  fullName.value = "";
  id.value = "";
  position.value = "";
};

//delete
employeeList.addEventListener("click", (p) => {
  target = p.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
  }
});
// edit
employeeList.addEventListener("click", (p) => {
  target = p.target;
  if (target.classList.contains("edit")) {
    selectedRow = target.parentElement.parentElement;
    fullName.value = selectedRow.children[0].textContent;
    id.value = selectedRow.children[1].textContent;
    position.value = selectedRow.children[2].textContent;
  }
});
