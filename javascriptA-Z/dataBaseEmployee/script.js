$(document).on("click", ".addEmployee", function () {
  $(".popUp").slideToggle(1000);
});
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const imgSrc = document.querySelector("#imge");
const phone = document.querySelector("#telephone");
const salary = document.querySelector("#salary");
const address = document.querySelector("#address");
const date = document.querySelector("#date");
const email = document.querySelector("#email");
const btnSubmit = document.querySelector("#submit");
const list = document.querySelector(".allName");
const clear = () => {
  firstName.value = "";
  lastName.value = "";
  imgSrc.value = "";
  phone.value = "";
  salary.value = "";
  address.value = "";
  date.value = "";
  email.value = "";
};
const addEmp = () => {
  btnSubmit.addEventListener("click", () => {
    var row = document.createElement("div");
    var name = `<h3 class="namelist">
    ${firstName.value + " " + lastName.value} <span class="edit">Edit</span
    ><span class="delete">Delete</span>
  </h3>`;
    if (
      firstName.value == "" ||
      phone.value == "" ||
      address.value == "" ||
      email.value == ""
    ) {
      alert("please fill in... ");
    } else {
      row.innerHTML = name;
      list.appendChild(row);
      input();
    }
    clear();
  });
};
addEmp();
const input = () => {
  const img = document.querySelector("box-img > img");
  const fullName = document.querySelector(".fullname");
  const infoSalary = document.querySelector(".info-salary");
  const infoGmail = document.querySelector(".info-gmail");
  const infoTel = document.querySelector(".info-tel");
  const infoDob = document.querySelector(".inof-dob");
  const box = document.querySelector(".box-img");
  const infoAddress = document.querySelector(".info-adress");
  img.src = `${imgSrc.value}`;
  fullName.innerHTML = `${firstName.value + " " + lastName.value}`;
  infoSalary.innerHTML = salary.value;
  infoGmail.innerHTML = email.value;
  infoDob.innerHTML = date.value;
  infoTel.innerHTML = phone.value;
  infoAddress.innerHTML = address.value;
};
console.log(imgSrc.value);
