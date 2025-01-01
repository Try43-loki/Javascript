const person = [
  { user: "Admin123", pass: "admin123", role: "Admin" },
  { user: "User123", pass: "user123", role: "User" },
];
if (!localStorage.getItem("person")) {
  localStorage.setItem("personAcc", JSON.stringify(person));
}
//form
const formLogin = document.querySelector(".formLogin");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const btnSubmit = document.querySelector("#btnSubmit");
//body
const wrapperItem = document.querySelector("#wrapperItem");
const sectLogin = document.querySelector("#sectLogin");
const wrapperBtn = document.querySelector("#wrapperBtn");
const textTitle = document.querySelector(".text-title");
const itemDisplay = document.querySelector("#itemDisplay");

// information of admin
const btnAddModal = document.querySelector("#btnAddProduct");
//information of user
const btnShowCart = document.querySelector(".showListCart");
const countCart = document.querySelector("#countCart");
const listGroup = document.querySelector("#listGroup");
const wrapperCart = document.querySelector("#wrapperCart");
const btnOut = document.querySelector("#btnLogout");
const formAddProduct = document.querySelector("#formProduct");
const nameProduct = document.querySelector("#nameProduct");
const priceProduct = document.querySelector("#price");
const quantityProduct = document.querySelector("#quantity");
const fileImageProduct = document.querySelector("#fileImage");
// display item
const showItem = document.querySelector(".showItem");

const btnAddCarts = document.querySelectorAll(".btnAdd");
const qtyCount = document.querySelectorAll(".qty");
const priceProductCart = document.querySelectorAll(".priceProduct");
const nameProductCart = document.querySelectorAll(".nameProduct");
const imageProductCart = document.querySelectorAll(".imgProduct");
const listProductTotal = document.querySelector("#listGroup");
const totalPriceElement = document.querySelector("#totalPrice");
const proceedPayment = document.querySelector("#proceedPayment");
const carts = [];

const login = (e) => {
  e.preventDefault();
  const account = JSON.parse(localStorage.getItem("personAcc"));
  isHaveAcc = account.find(
    (pd) => pd.user === username.value && pd.pass === password.value
  );
  if (!isHaveAcc) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }
  if (isHaveAcc.role === "Admin") {
    bodyShow();
    admin();
    Swal.fire({
      icon: "success",
      title: "Login success",
      text: "Welcome Admin!",
    });
  } else if (isHaveAcc.role === "User") {
    user();
    bodyShow();
    Swal.fire({
      icon: "success",
      title: "Login success",
      text: "Welcome Client",
    });
  }
  clearInput();
};

const bodyShow = () => {
  sectLogin.classList.add("d-none");
  wrapperItem.classList.remove("d-none");
  itemDisplay.classList.remove("d-none");
  btnOut.classList.remove("d-none");
};
const clearInput = () => {
  username.value = "";
  password.value = "";
};
const countProduct = () => {
  const btnIncrease = document.querySelectorAll(".btnAddPd");
  const btnDecrease = document.querySelectorAll(".btnRemovePd");
  const qtyProduct = document.querySelectorAll(".qty");
  const btnAddCarts = document.querySelectorAll(".btnAdd");
  btnIncrease.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      let currentTotalProduct = parseInt(qtyProduct[index].textContent);
      let total = currentTotalProduct;

      total++;
      qtyProduct[index].textContent = total;
      btnAddCarts.forEach((btn, index) => {
        if (total > 0) {
          btn.removeAttribute("disabled");
          btn.classList.add("btn-primary");
          btn.classList.remove("btn-secondary");
          btn.innerHTML = "Add to cart";
        }
      });
      // Re-enable the Decrease button if previously disabled
      btnDecrease[index].removeAttribute("disabled");
      btnDecrease[index].style.cursor = "pointer";
    });
  });
  btnDecrease.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      let currentTotalProduct = parseInt(qtyProduct[index].textContent);
      let total = currentTotalProduct;
      if (total > 0) {
        total--;

        qtyProduct[index].textContent = total;
      }
      if (total === 0) {
        // Disable the button if total reaches 0
        btn.setAttribute("disabled", "true");
        btn.style.cursor = "not-allowed";
      }
    });
  });
};

const admin = () => {
  btnAddModal.classList.remove("d-none");
  textTitle.textContent = "Product Management";
  wrapperBtn.classList.add("justify-content-start");
  const updateBtnAdd = document.querySelectorAll(".btnAdd");
  updateBtnAdd.forEach((btn) => {
    btn.classList.add("d-none");
  });
  const updatedManageBtns = document.querySelectorAll(".manageBtn");
  updatedManageBtns.forEach((item) => {
    item.classList.remove("d-none");
  });

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btnClear")) {
      // Traverse to the closest <li> ancestor of the clicked button
      const liElement = e.target.closest("li");
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this item?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          if (liElement) {
            liElement.remove();
          }
        }
      });

      // Remove the <li> element
    }
  });
  countProduct();
};

let isUserListenersAdded = false; // Flag to prevent duplicate listeners
const user = () => {
  textTitle.textContent = "Food Shopping";
  wrapperBtn.classList.add("justify-content-end");
  wrapperCart.classList.remove("d-none");

  // Refresh the NodeList
  const updateBtnAdd = document.querySelectorAll(".btnAdd");
  updateBtnAdd.forEach((btn) => {
    btn.classList.remove("d-none");
  });

  const updatedManageBtns = document.querySelectorAll(".manageBtn");
  updatedManageBtns.forEach((item) => {
    item.classList.add("d-none");
  });
  numberCart();
};

formAddProduct.addEventListener("submit", (e) => {
  e.preventDefault();
  let file = fileImageProduct.files[0];
  let reader = new FileReader();
  reader.onload = (event) => {
    const li = document.createElement("li");

    let fileData = event.target.result; // Base64 image data
    li.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-4", "col-xl-3");
    li.innerHTML = `
          <div class="card">
            <div class="card-header">
              <img src="${fileData}" class="img-fluid imgProduct" alt="" />
            </div>
            <div class="card-body">
              <h5>Name : <span class="nameProduct">${nameProduct.value}</span></h5>
              <h5>Price : <span class="priceProduct">${priceProduct.value}</span></h5>
              <h5>Quantity : <span class="qty">${quantityProduct.value}</span></h5>
            </div>
            <div class="card-footer">
              <button
                class="btnAdd btn btn-primary form-control rounded-pill d-none"
              >
                Add to cart
              </button>
              <div class="manageBtn">
                <button class="btn btn-primary btnAddPd">
                  <i class="fa-solid fa-plus"></i>
                </button>
                <button class="btn btn-danger btnRemovePd">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <button class="btn btn-warning btnClear">Remove</button>
              </div>
            </div>
          </div>
    `;
    showItem.append(li);
    // Show success toast
    clearInputProduct();
  };

  reader.readAsDataURL(file); // Convert file to Base64
});
formLogin.addEventListener("submit", login);

// form add product

const logout = () => {
  let timerInterval;
  Swal.fire({
    title: "Ready to logout!",
    html: "it will close in <b></b> milliseconds.",
    timer: 1000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      sectLogin.classList.remove("d-none");
      wrapperItem.classList.add("d-none");
      itemDisplay.classList.add("d-none");
      btnOut.classList.add("d-none");
      btnAddModal.classList.add("d-none");
      btnShowCart.classList.add("d-none");
      clearInput();
    }
  });
};
btnOut.addEventListener("click", logout);

const clearInputProduct = () => {
  nameProduct.value = "";
  priceProduct.value = "";
  quantityProduct.value = "";
  fileImageProduct.value = "";
};

const numberCart = () => {
  if (!isUserListenersAdded) {
    const btnAddCarts = document.querySelectorAll(".btnAdd");
    const qtyCount = document.querySelectorAll(".qty");
    const priceProductCart = document.querySelectorAll(".priceProduct");
    const nameProductCart = document.querySelectorAll(".nameProduct");
    const imageProductCart = document.querySelectorAll(".imgProduct");

    btnAddCarts.forEach((btn, index) => {
      const btnDecrease = document.querySelectorAll(".btnRemovePd");
      btn.addEventListener("click", () => {
        let totalCart = parseInt(countCart.textContent);
        totalCart++;
        countCart.textContent = totalCart;

        const name = nameProductCart[index].textContent;
        const price = parseFloat(priceProductCart[index].textContent);
        let quantity = parseInt(qtyCount[index].textContent);
        const image = imageProductCart[index].src;

        if (quantity > 0) {
          quantity--;
          btn.removeAttribute("disabled");
          btn.classList.add("btn-primary");
          btn.innerHTML = "Add to cart";
        }
        if (quantity === 0) {
          btn.innerHTML = "Sold Out";
          btn.classList.add("btn-secondary");
          btn.setAttribute("disabled", true);
          btnDecrease[index].setAttribute("disabled", "true");
        }

        qtyCount[index].textContent = quantity;

        const existingItem = carts.find((item) => item.name === name);
        if (existingItem) {
          existingItem.qty++;
        } else {
          carts.push({
            name: name,
            price: price,
            img: image,
            qty: 1,
          });
        }

        renderCart();
        updateTotalPrice();
      });
    });

    isUserListenersAdded = true; // Set flag to true after adding listeners
  }
};

const renderCart = () => {
  listProductTotal.innerHTML = "";
  carts.forEach((item) => {
    const li = document.createElement("li");
    li.className = "d-flex flex-column";
    li.innerHTML = `
      <div class="d-flex align-items-center gap-3">
        <img src="${item.img}" height="60" width="60" alt="Product Image" />
        <p>${item.name}</p>
        <p>$${item.price} x <span>${item.qty}</span></p>
      </div>
      <hr />
    `;
    listProductTotal.appendChild(li);
  });
};
const updateTotalPrice = () => {
  const totalCart = carts.reduce((sum, item) => sum + item.price * item.qty, 0);
  countCart.innerHTML = carts.reduce((sum, item) => sum + item.qty, 0);
  totalPriceElement.textContent = `$${totalCart.toFixed(2)}`;
};

const btnRemove = document.querySelectorAll(".btnClear");
