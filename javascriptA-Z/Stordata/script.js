const listName = document.querySelector(".list-name");
const Id = document.querySelector("#id");
const name = document.querySelector("#name");
const btnSub = document.querySelector("#submit");
const btnReset = document.querySelector("#reset");
btnSub.addEventListener("click", () => {
  if (name.value == "") {
    return null;
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerHTML = Id.value;
    li.innerHTML = " " + name.value;
    li.appendChild(span);
    listName.appendChild(li);
    name.value = "";
    Id.value = "";
  }
});
