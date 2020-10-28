const hammenu = document.querySelector("#ham__menu");
const hamitems = document.querySelector("#ham__items");

hammenu.addEventListener("click", () => {
  hamitems.classList.toggle("is-active");
});
