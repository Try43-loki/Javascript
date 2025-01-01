const cartItem = [];
const btnAdd = document.querySelectorAll(".btnAdd");
const ListGroup = document.querySelector("#listGroup");
const countCart = document.querySelector("#countCart");
const totalPay = document.querySelector("#totalPay");

btnAdd.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnTargets = e.target;
    const dataID = btnTargets.getAttribute("data-id");
    const dataName = btnTargets.getAttribute("data-name");
    const dataPrice = parseFloat(btnTargets.getAttribute("data-price"));
    const dataImage = btnTargets.getAttribute("data-img");

    // Check if the item already exists in the cart
    const item = cartItem.find((item) => item.id === dataID);
    if (item) {
      item.qty++;
    } else {
      cartItem.push({
        id: dataID,
        name: dataName,
        price: dataPrice,
        img: dataImage,
        qty: 1,
      });
    }

    // Update cart item count
    countCart.textContent = cartItem.reduce(
      (total, item) => total + item.qty,
      0
    );

    // Update the cart list
    renderCart();

    // Calculate total price
    const totalPrice = cartItem.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );
    totalPay.textContent = `$${totalPrice.toFixed(2)}`;
  });
});

// Function to render the cart list
function renderCart() {
  ListGroup.innerHTML = ""; // Clear the list first
  cartItem.forEach((item) => {
    const li = document.createElement("li");
    li.className = "d-flex flex-column";
    li.innerHTML = `
      <div class="d-flex align-items-center gap-3">
        <img src="${item.img}" height="60" width="60" alt="" class="object-cover" />
        <p>${item.name}</p>
        <p>$${item.price} x <span>${item.qty}</span></p>
      </div>
      <hr />
    `;
    ListGroup.appendChild(li);
  });
}
