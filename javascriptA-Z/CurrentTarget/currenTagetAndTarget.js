const list = document.querySelectorAll("h2");
console.log(list);
list.forEach(function (e) {
  e.addEventListener("click", function (p) {
    const tt = p.target.classList.add("cheng");
    console.log(p.target);
  });
});
