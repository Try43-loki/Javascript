const user = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "user", password: "user123", role: "user" },
];

if (!localStorage.getItem("person")) {
  localStorage.setItem("person", JSON.stringify(user));
}
const formLogin = document.querySelector("#formLogin");
const userName = document.querySelector("#user");
const PassName = document.querySelector("#pass");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  let user = userName.value;
  let pss = PassName.value;
  // get item
  const users = JSON.parse(localStorage.getItem("person"));
  const correctUser = users.find(
    (u) => u.username === userName.value && u.password === PassName.value
  );
  if (!correctUser) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "User not found!",
    });
  }
});

const form = document.querySelector("#formSubmit");
const inputName = document.querySelector("#inputName");
const inputPrize = document.querySelector("#inputPrize");
const inputQty = document.querySelector("#inputQty");
const inputFile = document.querySelector("#inputFile");

// items input
const row = document.querySelector(".row");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let file = inputFile.files[0];
  if (!file) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please select a file!",
    });
    return;
  }

  let reader = new FileReader();
  reader.onload = (event) => {
    let fileData = event.target.result; // Base64 image data
    let result = `
      <div class="col-xl-3 col-lg-4 col-md-3 col-sm-12">
        <div class="card p-2">
          <img
            height="250"
            width="250"
            src="${fileData}" 
            class="card-img-top"
            alt="Product Image"
          />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <p class="card-text fw-semibold p-0 m-0 d-block">Name: ${inputName.value}</p>
              <p class="card-text p-0 m-0 d-block">Prize: ${inputPrize.value}</p>
            </div>
            <p class="card-text p-0 m-0 d-block">Quantity: ${inputQty.value}</p>
            <a href="#" class="btn btn-primary btn-sm mt-2 fs-6">Add Product</a>
          </div>
        </div>
      </div>
    `;
    row.innerHTML += result; // Append new card to existing content

    // Show success toast
    toastr.success("Product added successfully!");
  };

  reader.readAsDataURL(file); // Convert file to Base64
});
