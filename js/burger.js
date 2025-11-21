const html = document.querySelector("html");
const btn = document.querySelector("dark");

html.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  btn.classList.toggle("active");
}
