const id = document.querySelector("#id");
const fistname = document.querySelector("#fistname");
const lastname = document.querySelector("#lastname");
const age = document.querySelector("#age");
const position = document.querySelector("#position");
const salary = document.querySelector("#salary");
const address = document.querySelector("#address");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
const edit = document.querySelector("#edit");
const delet = document.querySelector("#delete");
const employeeList = document.querySelector(".employee-list");
var selectedRow = null;
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    fistname.value == "" ||
    lastname.value == "" ||
    age.value == "" ||
    position.value == "" ||
    salary.value == "" ||
    address.value == "" ||
    id.value == ""
  ) {
    dodgerblue();
  } else {
    if (selectedRow == null) {
      redBoder();
      let list = document.createElement("tr");
      employeeList.appendChild(list);
      list.innerHTML = `
            <td>${id.value}</td>
            <td>${fistname.value}</td>
            <td>${lastname.value}</td>
            <td>${age.value}</td>
            <td>${position.value}</td>
            <td>${salary.value}</td>
            <td>${address.value}</td>
            <td>
              <a href="#" class="edit" id="edit">Edit</a>
              <a href="#" class="delete" id="delete">Delete</a>
            </td>
            `;
    } else {
      catchData();
      selectedRow = null;
    }
  }
  clear();
});

const catchData = () => {
  selectedRow.children[0].textContent = id.value;
  selectedRow.children[1].textContent = lastname.value;
  selectedRow.children[2].textContent = fistname.value;
  selectedRow.children[3].textContent = position.value;
  selectedRow.children[4].textContent = age.value;
  selectedRow.children[5].textContent = address.value;
  selectedRow.children[6].textContent = salary.value;
};
const clear = () => {
  id.value = "";
  fistname.value = "";
  lastname.value = "";
  age.value = "";
  position.value = "";
  salary.value = "";
  address.value = "";
};
const dodgerblue = () => {
  fistname.style.border = "2px solid red";
  lastname.style.border = "2px solid red";
  age.style.border = "2px solid red";
  position.style.border = "2px solid red";
  salary.style.border = "2px solid red";
  address.style.border = "2px solid red";
  id.style.border = "2px solid red";
};
const redBoder = () => {
  fistname.style.border = "2px solid dodgerblue";
  lastname.style.border = "2px solid dodgerblue";
  age.style.border = "2px solid dodgerblue";
  position.style.border = "2px solid dodgerblue";
  salary.style.border = "2px solid dodgerblue";
  address.style.border = "2px solid dodgerblue";
  id.style.border = "2px solid dodgerblue";
};
reset.addEventListener("click", () => {
  clear();
});
employeeList.addEventListener("click", (p) => {
  target = p.target;
  console.log(target);
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
  }
});
employeeList.addEventListener("click", (p) => {
  target = p.target;
  if (target.classList.contains("edit")) {
    storeData();
  }
});
function storeData() {
  selectedRow = target.parentElement.parentElemen;
  id.value = selectedRow.children[0].textContent;
  fistname.value = selectedRow.children[1].textContent;
  lastname.value = selectedRow.children[2].textContent;
  age.value = selectedRow.children[3].textContent;
  position.value = selectedRow.children[4].textContent;
  salary.value = selectedRow.children[5].textContent;
  address.value = selectedRow.children[6].textContent;
}
