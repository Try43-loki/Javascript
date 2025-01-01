const product = [
  {
    category: "fruits",
    title: "Apple",
    price: "7$",
    imgsrc: "./img/apple.png",
  },
  {
    category: "vegetables",
    title: "Carrot",
    price: "9$",
    imgsrc: "./img/carrot.png",
  },
  {
    category: "milks",
    title: "Fresh milk",
    price: "8$",
    imgsrc: "./img/milk.png",
  },
  {
    category: "milks",
    title: "Ayran milk",
    price: "10$",
    imgsrc: "./img/ayranMilk.png",
  },
  {
    category: "milks",
    title: "Batavo milk",
    price: "20$",
    imgsrc: "./img/dairy.png",
  },
];
const allBtn = document.querySelectorAll(".btn");
const BtnWrap = document.querySelector(".list-wrapper");
const listItem = document.querySelector(".product-list");

BtnWrap.addEventListener("click", (e) => {
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
    const productFilt = product.filter((item) => {
      if (item.category == id) {
        return item;
      }
    });
    if (id == "all") {
      showitem(product);
    } else {
      showitem(productFilt);
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  showitem(product);
});

const showitem = (arrItem) => {
  const displayItem = arrItem
    .map((p) => {
      return ` <div class="item-wrapper">
        <div class="img">
            <img src="${p.imgsrc}" alt="${p.title}">
        </div>
        <p class="title-item">${p.title}</p>
        <span class="price">${p.price}</span>
    </div>`;
    })
    .join("");
  listItem.innerHTML = displayItem;
};
