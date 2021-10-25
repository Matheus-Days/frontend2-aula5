const themeToggle = document.querySelector("#theme-toggle");
const body = document.querySelector("body");
const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const liList = document.querySelectorAll("li")
const span = document.querySelector("span");

themeToggle.addEventListener("change", (e) => {
    
  body.classList.toggle("dark-body");
  span.classList.toggle("dark-span");
  header.classList.toggle("dark-header");
  h1.classList.toggle("dark-h1");
  liList.forEach(li => {
    li.classList.toggle("dark-li")
  });

});