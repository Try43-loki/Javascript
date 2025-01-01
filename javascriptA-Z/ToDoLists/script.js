const inputBox = document.querySelector(".input-container > input");
const btnAdd = document.querySelector(".input-container > button");
const listContainer = document.querySelector(".ul-container");
btnAdd.addEventListener("click", function () {
  if (inputBox.value == "") {
    return null;
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerHTML = "-";
    li.innerHTML = inputBox.value;
    li.appendChild(span);
    listContainer.appendChild(li);
    inputBox.value = "";
    console.log(li);
  }
});
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  }
});
