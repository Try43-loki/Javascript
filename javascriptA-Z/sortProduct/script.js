const product = [
  {
    category: "fruits",
    title: "Apple",
    price: "10$",
    imgsrc: "./img/apple.png",
  },
  {
    category: "vegetables",
    title: "carrot",
    price: "10$",
    imgsrc: "./img/carrot.png",
  },
  {
    category: "meats",
    title: "pork",
    price: "10$",
    imgsrc: "./img/pork.png",
  },
];
const list = document.querySelector(".product-list");
const allBtn = document.querySelectorAll(".li-style");
const ulList = document.querySelector(".ul-list-item");
ulList.addEventListener("click", (e) => {
  //   const btnTarget = e.target.classList.contains("li-style");
  const btnId = e.target.dataset.id;
  allBtn.forEach((btn) => {
    if (btnId) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    }
  });
});

allBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.currentTarget.dataset.id;
    const productFilter = product.filter((item) => {
      if (item.category == id) {
        return item;
      }
    });
    if (id == "all") {
      return showProduct(product);
    } else {
      return showProduct(productFilter);
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  showProduct(product);
});
const showProduct = (arrayProducts) => {
  const displayProduct = arrayProducts
    .map((p) => {
      return `<div class="item-wrapper">
  <img class="img" src="${p.imgsrc}" alt="${p.title}" />
  <h3 class="name-product">${p.title}</h3>
  <span class="price">${p.price}</span>
</div>`;
    })
    .join("");
  list.innerHTML = displayProduct;
};
